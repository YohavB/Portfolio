import React, { useState } from "react";
import { db } from "./firebase";

const Contact = (props) => {
  const resumeData = props.resumeData;
  const [name, setName] = useState("");
  const [company, setCompagny] = useState("");
  const [mail, setMail] = useState("");
  const [message, setMessage] = useState("");
  const [phone, setPhone] = useState("");

  const [loader, setLoader] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoader(true);

    const templateId = "template_portfolio_YB";
    const serviceID = "portfolio_YB_1206";
    sendFeedback(serviceID, templateId, {
      from_name: name,
      from_mail: mail,
      from_phone: phone,
      from_company: company,
      message: message,
      reply_to: mail,
    });

    db.collection("contact")
      .add({
        name: name,
        mail: mail,
        message: message,
        phone: phone,
        company: company,
      })
      .then(() => {
        alert(resumeData.messagesent);
        setLoader(false);
        setName("");
        setMail("");
        setPhone("");
        setMessage("");
        setCompagny("");
      })
      .catch((error) => {
        alert(error.message);
        setLoader(false);
      });
  };

  const sendFeedback = (serviceID, templateId, variables) => {
    window.emailjs
      .send(serviceID, templateId, variables)
      .then((res) => {
        console.log("Email successfully sent!");
      })
      .catch((err) =>
        console.error(
          "There has been an error.  Here some thoughts on the error that occured:",
          err
        )
      );
  };
  //

  return (
    <div
      className={
        props.selectedLang === "he" ? "app-contact-rtl" : "app-contact"
      }
      id="contact"
    >
      <form className="form_wrapper" onSubmit={handleSubmit}>
        <input
          placeholder={resumeData.fullname}
          type="text"
          value={name}
          name="name"
          onChange={(e) => setName(e.target.value)}
        />

        <input
          placeholder={resumeData.tel}
          type="text"
          value={phone}
          name="tel"
          onChange={(e) => setPhone(e.target.value)}
        />

        <input
          placeholder={resumeData.email}
          type="email"
          value={mail}
          name="mail"
          onChange={(e) => setMail(e.target.value)}
        />
        <input
          placeholder={resumeData.company}
          type="text"
          value={company}
          name="company"
          onChange={(e) => setCompagny(e.target.value)}
        />

        <textarea
          rows="5"
          cols="33"
          placeholder={resumeData.dontbeashame}
          className="textarea"
          type="textarea"
          value={message}
          name="message"
          onChange={(e) => setMessage(e.target.value)}
        />

        <button
          style={{ background: loader ? "#ccc" : "" }}
          onClick={handleSubmit}
        >
          {props.resumeData.submit}
        </button>
      </form>
    </div>
  );
};

export default Contact;
