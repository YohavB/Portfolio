import emailjs from "emailjs-com";
import React, { useEffect, useState } from "react";
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
  const [messageError, setMessageError] = useState("");
  const [nameError, setNameError] = useState("");

  const [errorinForm, setErrorinForm] = useState(true);
  const [submitError, setSubmitError] = useState(false);

  const [loader, setLoader] = useState(false);

  useEffect(() => {
    validateName();
    validatePhone();
    validateEmail();
    validateMessage();
    if (!mailError && !nameError && !phoneError && !messageError) {
      setErrorinForm(false);
    } else {
      setErrorinForm(true);
      setSubmitError(false);
    }
  }, [name, phone, message, mail, errorinForm]);

  //usseffect pour recupo errorinform des le debut

  useEffect(() => {
    setErrorinForm(true);
  }, []);

  const templateID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
  const serviceID = process.env.REACT_APP_EMAILJS_SERVICE_ID;
  const userID = process.env.REACT_APP_EMAILJS_USER_ID;

  const validateEmail = () => {
    if (!mail) {
      setMailError(resumeData.emptyField);
      setErrorinForm(true);
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(mail)) {
      setMailError(resumeData.invalidmail);
      setErrorinForm(true);
    } else {
      setMailError("");
      setErrorinForm(false);
    }
  };

  const validatePhone = () => {
    setPhoneError("");
    if (!phone) {
      setPhoneError("");
      setErrorinForm(false);
    } else if (
      !/^\+?(\d{1,3})?[-.\s]?\(?\d{2,3}\)?[-.\s]?\d{2,3}[-.\s]?\d{2,3}([-.\s]?\d{2,3})?$/i.test(
        phone
      )
    ) {
      setPhoneError(resumeData.invalidlengthphone);
      setErrorinForm(true);
    }
  };

  const validateMessage = () => {
    if (!message) {
      setMessageError(resumeData.emptyField);
      setErrorinForm(true);
    } else {
      setMessageError("");
      setErrorinForm(false);
    }
  };

  const validateName = () => {
    setNameError("");
    if (!name) {
      setNameError(resumeData.emptyField);
      setErrorinForm(true);
    } else {
      setNameError("");
      setErrorinForm(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!errorinForm) {
      console.log("message sent");
      console.log(errorinForm);
      setLoader(true);
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
            setErrorinForm(false)
          })
          .catch((error) => {
            alert(error.message);
            setLoader(false);
            setErrorinForm(false)

          });
    } else {
      setLoader(false);
      console.log("message not send");
      setSubmitError(true);
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
              onBlur={validateName}
              name="name"
              onChange={(e) => setName(e.target.value)}
            />
            {!name && nameError && <div className="errortext">{nameError}</div>}
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
            onBlur={validateMessage}
            name="message"
            onChange={(e) => setMessage(e.target.value)}
          />
          {!message && messageError && (
            <div className="errortext">{messageError}</div>
          )}
        </div>
        {submitError && (
          <div className="errortext last">{resumeData.errorbeforesubmit}</div>
        )}

        <button
          className={submitError ? "disabled" : null}
          style={{ background: loader ? "#ccc" : null }}
          onClick={handleSubmit}
          disabled={submitError}
        >
          {props.resumeData.submit}
        </button>
      </form>
    </div>
  );
};

export default Contact;
