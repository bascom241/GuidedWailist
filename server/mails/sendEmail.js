import SibApiV3Sdk from 'sib-api-v3-sdk';
import dotenv from 'dotenv';
import { emailContent } from './emailTemplate.js';
dotenv.config();

export const sendEmail = async (to, fullName) => {
  try {
    let defaultClient = SibApiV3Sdk.ApiClient.instance;
    let apiKey = defaultClient.authentications["api-key"];
    apiKey.apiKey = process.env.BREVO_API_KEY;

    let apiInstance = new SibApiV3Sdk.TransactionalEmailsApi();

    let sendSmtpEmail = new SibApiV3Sdk.SendSmtpEmail();
    sendSmtpEmail.sender = { email: process.env.BREVO_SENDER_EMAIL || "abdulbasitabdulwahab21@gmail.com", name: 'GuidEd' };
    sendSmtpEmail.to = [{ email: to, name: fullName }];
    sendSmtpEmail.subject = "Thank you for joining the GuidEd Waitlist!";
    sendSmtpEmail.htmlContent = emailContent(fullName);

    const response = await apiInstance.sendTransacEmail(sendSmtpEmail);
    console.log("Email sent successfully:", response);
    return response;
  } catch (error) {
    console.error("Error sending email:", error.response ? error.response.body : error);
    throw new Error("Email could not be sent.");
  }
};