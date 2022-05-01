import { createTransport } from "nodemailer";

export default async (req, res) => {
  const reqest = JSON.parse(req.body);
  const transporter = createTransport({
    service: "gmail",
    port: 465,
    secure: true,
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASS,
    },
  });
  await transporter.sendMail({
    from: process.env.MAIL_USER,
    to: reqest.email,
    subject: "お問い合わせ",
    text: reqest.contents,
  });

  res.status(200).json({
    success: true,
  });
};
