import emailjs from "emailjs-com";
import React, { useState } from "react";
import { db } from "./firebase";

const Contact = (props) => {
  const resumeData = props.resumeData;
  const [name, setName] = useState("");
  const [company, setCompagny] = useState("");
  const [mail, setMail] = useState("");
  const [message, setMessage] = useState("");
  const [phone, setPhone] = useState("");

  const [mailError, setMailError] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [emptyError, setEmptyError] = useState("");

  const [emptyErrorForm, setEmptyErrorForm] = useState(null);

  const [loader, setLoader] = useState(false);

  const validateEmail = () => {
    if (!mail) {
      setMailError(resumeData.emptyForm);
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(mail)) {
      setMailError(resumeData.invalidmail);
    } else {
      setMailError("");
    }
  };

  const validatePhone = () => {
    setPhoneError("");
    if (!phone) {
      setPhoneError("");
    } else if (phone.length > 13 || phone.length < 9) {
      setPhoneError(resumeData.invalidlengthphone);
    } else if (
      !/^\+?([0-9]{2})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{4})$/i.test(phone)
    ) {
      setPhoneError(resumeData.invalidphone);
    }
  };

  const verifyEmpty = () => {
    setEmptyError("");
    if (!name || !message || !mail) {
      setEmptyError(resumeData.emptyForm);
      setEmptyErrorForm(true);
    } else {
      setEmptyError("");
      setEmptyErrorForm(false);
    }
  };

  var errorOnForm = phoneError || mailError;

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoader(true);
    verifyEmpty();
    if (emptyErrorForm) {
      const templateID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
      const serviceID = process.env.REACT_APP_EMAILJS_SERVICE_ID;
      const userID = process.env.REACT_APP_EMAILJS_USER_ID;

      sendFeedback(serviceID, templateID, userID, {
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
    }
  };

  const sendFeedback = (serviceID, templateID, variables, userID) => {
    emailjs
      .send(serviceID, templateID, variables, userID)
      .then((res) => {
        console.log("Email successfully sent!", res.status, res.text);
      })
      .catch((err) =>
        console.error(
          "There has been an error.  Here some thoughts on the error that occured:",
          err
        )
      );
  };

  return (
    <div
      className={
        props.selectedLang === "he" ? "app-contact-rtl" : "app-contact"
      }
      id="contact"
    >
      <form className="form_wrapper">
        <div className="fourwrapper">
          <div className="inputanderror">
            <input
              placeholder={resumeData.fullname}
              type="text"
              value={name}
              name="name"
              onChange={(e) => setName(e.target.value)}
            />
            {!name && emptyErrorForm && (
              <div className="errortext">{resumeData.emptyForm}</div>
            )}
          </div>

          <div className="inputanderror">
            <input
              placeholder={resumeData.tel}
              type="text"
              value={phone}
              onBlur={validatePhone}
              name="tel"
              onChange={(e) => setPhone(e.target.value)}
            />
            {phoneError && <div className="errortext">{phoneError}</div>}
          </div>

          <div className="inputanderror">
            <input
              placeholder={resumeData.email}
              type="email"
              value={mail}
              name="mail"
              onBlur={validateEmail}
              onChange={(e) => setMail(e.target.value)}
            />
            {!mail && emptyErrorForm && (
              <div className="errortext">{resumeData.emptyForm}</div>
            )}
            {mailError && <div className="errortext">{mailError}</div>}
          </div>
          <div className="inputanderror">
            <input
              placeholder={resumeData.company}
              type="text"
              value={company}
              name="company"
              onChange={(e) => setCompagny(e.target.value)}
            />
          </div>
        </div>

        <div className="inputanderror">
          <textarea
            rows="5"
            cols="33"
            placeholder={resumeData.dontbeashame}
            className="textarea"
            type="textarea"
            value={message}
            onBlur={verifyEmpty}
            name="message"
            onChange={(e) => setMessage(e.target.value)}
          />
          {!message && emptyErrorForm && (
            <div className="errortext">{resumeData.emptyForm}</div>
          )}
        </div>

        {(errorOnForm || emptyErrorForm) && (
          <div className="errortext last">{resumeData.errorbeforesubmit}</div>
        )}

        <button
          className={errorOnForm || emptyError ? "disabled" : null}
          style={{ background: loader ? "#ccc" : "" }}
          onClick={handleSubmit}
          disabled={errorOnForm || emptyError}
        >
          {props.resumeData.submit}
        </button>
      </form>
    </div>
  );
};

export default Contact;
