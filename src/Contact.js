import React, { useState } from "react";
import { db } from "./firebase";

const Contact = (props) => {
  const [name, setName] = useState("");
  const [company, setCompagny] = useState("");
  const [mail, setMail] = useState("");
  const [message, setMessage] = useState("");
  const [phone, setPhone] = useState("");

  const [loader, setLoader] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoader(true);

    db.collection("contact")
      .add({
        name: name,
        mail: mail,
        message: message,
        phone: phone,
        company: company,
      })
      .then(() => {
        alert("Message has been submitted");
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
          placeholder={props.resumeData.fullname}
          type="text"
          value={name}
          name="name"
          onChange={(e) => setName(e.target.value)}
        />

        <input
          placeholder={props.resumeData.tel}
          type="text"
          value={phone}
          name="tel"
          onChange={(e) => setPhone(e.target.value)}
        />

        <input
          placeholder={props.resumeData.email}
          type="email"
          value={mail}
          name="mail"
          onChange={(e) => setMail(e.target.value)}
        />
        <input
          placeholder={props.resumeData.company}
          type="text"
          value={company}
          name="company"
          onChange={(e) => setCompagny(e.target.value)}
        />

        <textarea
          rows="5"
          cols="33"
          placeholder={props.resumeData.dontbeashame}
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
