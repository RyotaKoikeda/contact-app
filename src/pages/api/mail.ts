import type { NextApiRequest, NextApiResponse } from "next";
const nodemailer = require("nodemailer");

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const reqest = JSON.parse(req.body);
  const transporter = nodemailer.createTransport({
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
