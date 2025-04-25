import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  console.log("request received");

  try {
    const body = await req.json();
    //console.log("body JSON :", body);

    const { rating, message } = body;

    const data = await resend.emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>',
      to: 'gabajohana77@gmail.com',
      subject: `New portfolio rating`,
      replyTo: `unknown@noreply.com`,
      html: `<p><strong>Reting:</strong> ${rating}</p>
             <p><strong>Message:</strong> ${message}</p>`,
    });

    //console.log("email succesfully sent :", data);
    return new Response(JSON.stringify({ success: true, data }), { status: 200 });
  } catch (error) {
    //console.error("error mail sending failure :", error);
    return new Response(JSON.stringify({ error: "Error: Mail sending failure." }), { status: 500 });
  }
}
