const sgMail = require("@sendgrid/mail");

sgMail.setApiKey(process.env.SendGrid_API);
export interface IUser {
  password: string;
  email: string;
}
export default class Email {
  to: string;
  name: string;
  fromEmail: string;
  fromName: string;
  password: string;

  constructor(user: IUser) {
    this.to = user.email;
    this.name = "Neo-Reviewerer";
    this.password = user.password;
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
        password: this.password,
        subject: "Request accepted!",
      },
    };

    await sgMail.send(mailOptions).then(() => {
      console.log("Sent");
    }, console.error);
  }
}
