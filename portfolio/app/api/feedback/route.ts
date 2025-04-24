import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { rating, message } = req.body;

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: "noreply@votreapp.com",
      to: "votreadresse@mail.com",
      subject: "Nouveau Feedback",
      html: `<p>Note : ${rating}/5</p><p>Message : ${message || "Aucun message."}</p>`,
    }),
  });

  if (response.ok) {
    return res.status(200).json({ success: true });
  } else {
    return res.status(500).json({ error: "Erreur d'envoi avec Resend" });
  }
}
