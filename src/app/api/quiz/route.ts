import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const NOTIFY_EMAIL = process.env.NOTIFY_EMAIL || "hello@runai4.me";

export async function POST(request: Request) {
  const body = await request.json();
  const { email, score, tier } = body;

  if (!email) {
    return NextResponse.json({ error: "Email is required" }, { status: 400 });
  }

  const tierLabels: Record<string, string> = {
    "high-opportunity": "High Opportunity",
    growing: "Growing",
    advanced: "Advanced",
  };

  try {
    // Send results to the quiz taker
    await resend.emails.send({
      from: "runai4.me <onboarding@resend.dev>",
      to: email,
      subject: "Your AI Readiness Results",
      text: `Your AI Readiness Score: ${score}/30
Level: ${tierLabels[tier] || tier}

${tier === "high-opportunity" ? "Your business has major untapped AI potential. Manual processes are costing you time and money. I recommend starting with a free AI Audit." : ""}${tier === "growing" ? "You have some systems in place but significant room to automate and optimize. An Implementation project targeting your biggest bottleneck will deliver the highest ROI." : ""}${tier === "advanced" ? "Your operations are well-digitized. AI can take you to the next level with intelligent automation and predictive insights. An AI Partner retainer gives you continuous monthly improvements." : ""}

Want to discuss your results? Book a free AI Audit: https://runai4.me/contact

Best,
runai4.me`,
    });

    // Notify yourself about the new lead
    await resend.emails.send({
      from: "runai4.me <onboarding@resend.dev>",
      to: NOTIFY_EMAIL,
      subject: `New quiz lead: ${email} (${tierLabels[tier] || tier})`,
      text: `New AI Readiness Quiz submission:\n\nEmail: ${email}\nScore: ${score}/30\nTier: ${tierLabels[tier] || tier}`,
    });
  } catch (error) {
    console.error("Failed to send quiz emails:", error);
    // Don't fail the request if email fails — the quiz result was already shown
  }

  return NextResponse.json({ success: true });
}
