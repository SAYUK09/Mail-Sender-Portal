// import sgMail from "@sendgrid/mail";
const sgMail = require("@sendgrid/mail");

sgMail.setApiKey(process.env.SendGrid_API);

export default class Email {
  to: any;
  name: any;
  fromEmail: string;
  fromName: string;
  constructor(user: any) {
    this.to = user.email;
    this.name = "Neo-Reviewerer";
    this.fromEmail = "sayurikamble123@gmail.com";
    this.fromName = "Neog Camp";
  }

  async sendMails() {
    const mailOptions = {
      to: this.to,
      subject: "Request Accepted",
      from: {
        email: this.fromEmail,
        name: this.fromName,
      },
      templateId: "d-513404a92d8d4768b33bffdb97d36209",
      dynamic_template_data: {
        name: this.name,
        subject: "Request accepted!",
      },
    };

    await sgMail.send(mailOptions).then(() => {
      console.log("Sent");
    }, console.error);
  }
}
