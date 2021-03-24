import nodemailer from "nodemailer";
import generateEmail from "../../utils/emailGenerator";
export default async function mail(req, res) {
  const { name, phone, text, mail } = req.body;
  if (req.method !== "POST" && req.method !== "post") {
    return res.status(406).json({ status: "err", info: "Wrong method" });
  }
  if (!mail || !name || !text) {
    return res.status(406).json({ status: "err", info: "emptyFields" });
  } else {
    try {
      let acc = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true, // use SSL
        auth: {
          user: process.env.LOGIN,
          pass: process.env.PASSWORD,
        },
      });
      await acc.sendMail({
        from: `"Rocket Jump 🚀 " <rocket.contact77@gmail.com>`,
        to: req.body.mail,
        cc: "rocket.contact77@gmail.com",
        subject: "Rocket Jump 🚀 ",
        html: generateEmail(name, text),
      });
      await acc.sendMail({
        from: `"Rocket Jump 🚀 " <rocket.contact77@gmail.com>`,
        to: "michal.galuza77@gmail.com",

        subject: "Rocket Jump 🚀 nowa widomość ze strony",
        html: `<p>${name}</p><p>${mail}</p><p>${phone}</p><p>${text}</p>`,
      });

      return res.status(200).json({ status: "ok", info: "succes" });
    } catch (err) {
      res.statusCode = 406;
      res.json({
        status: "err",
        err: err,
      });
    }
  }
}
