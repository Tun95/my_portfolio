import express from "express";
import expressAsyncHandler from "express-async-handler";
import Sib from "sib-api-v3-sdk";

const sendEmailRouter = express.Router();


//Contact Admin
sendEmailRouter.post(
  "/",
  expressAsyncHandler(async (req, res) => {
    const client = Sib.ApiClient.instance;
    const apiKey = client.authentications["api-key"];
    apiKey.apiKey = process.env.SEND_IN_BLUE_API_KEY;

    const { email, name, subject, message } = req.body;
    const tranEmailApi = new Sib.TransactionalEmailsApi();
    const sender = {
      email,
      name,
    };
    const receivers = [
      {
        email: process.env.EMAIL_ADDRESS,
      },
    ];
    tranEmailApi
      .sendTransacEmail({
        sender,
        to: receivers,
        subject,
        textContent: message,
        params: {
          role: "Frontend",
        },
      })
      .then(console.log)
      .catch(console.log);
    res.json("sent");
  })
);
export default sendEmailRouter;
