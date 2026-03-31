import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json();
  const { email, score, tier } = body;

  if (!email) {
    return NextResponse.json({ error: "Email is required" }, { status: 400 });
  }

  // TODO: Replace with Resend or store in Supabase
  console.log("=== NEW QUIZ SUBMISSION ===");
  console.log(`Email: ${email}`);
  console.log(`Score: ${score}`);
  console.log(`Tier: ${tier}`);
  console.log("==========================");

  // Example Resend integration (uncomment when RESEND_API_KEY is set):
  //
  // const resend = new Resend(process.env.RESEND_API_KEY);
  // await resend.emails.send({
  //   from: "runai4.me <noreply@runai4.me>",
  //   to: email,
  //   subject: "Your AI Readiness Results",
  //   text: `Your score: ${score}/30\nTier: ${tier}\n\nVisit https://runai4.me/services to see how we can help.`,
  // });
  //
  // // Notify yourself
  // await resend.emails.send({
  //   from: "runai4.me <noreply@runai4.me>",
  //   to: "hello@runai4.me",
  //   subject: `New quiz lead: ${email} (${tier})`,
  //   text: `Email: ${email}\nScore: ${score}/30\nTier: ${tier}`,
  // });

  return NextResponse.json({ success: true });
}
