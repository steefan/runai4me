import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json();
  const { name, email, company, message } = body;

  if (!name || !email || !message) {
    return NextResponse.json(
      { error: "Name, email, and message are required" },
      { status: 400 }
    );
  }

  // TODO: Replace with Resend or your preferred email service
  // For now, log to server console so submissions aren't lost
  console.log("=== NEW CONTACT FORM SUBMISSION ===");
  console.log(`Name: ${name}`);
  console.log(`Email: ${email}`);
  console.log(`Company: ${company || "N/A"}`);
  console.log(`Message: ${message}`);
  console.log("===================================");

  // Example Resend integration (uncomment when RESEND_API_KEY is set):
  //
  // const resend = new Resend(process.env.RESEND_API_KEY);
  // await resend.emails.send({
  //   from: "runai4.me <noreply@runai4.me>",
  //   to: "hello@runai4.me",
  //   subject: `New contact from ${name}`,
  //   text: `Name: ${name}\nEmail: ${email}\nCompany: ${company || "N/A"}\n\n${message}`,
  // });

  return NextResponse.json({ success: true });
}
