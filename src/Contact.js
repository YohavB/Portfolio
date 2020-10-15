import React, { useState } from "react";

const Contact = () => {
  const [user, setUser] = useState({
    name: "",
    tel: "",
    mail: "",
    company: "",
    message: "",
  });

  const onChangeUser = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(user);
  };

  return (
    <div className="app-contact">
      <form className="form_wrapper" onSubmit={onSubmit}>
        <input
          placeholder="Full Name"
          type="text"
          value={user.name}
          name="name"
          onChange={onChangeUser}
        />

        <input
          placeholder="Tel."
          type="text"
          value={user.tel}
          name="tel"
          onChange={onChangeUser}
        />

        <input
          placeholder="Email"
          type="email"
          value={user.mail}
          name="mail"
          onChange={onChangeUser}
        />
        <input
          placeholder="Company"
          type="text"
          value={user.company}
          name="company"
          onChange={onChangeUser}
        />

        <textarea
          rows="5"
          cols="33"
          placeholder="Don't be ashame"
          className="textarea"
          type="textarea"
          value={user.message}
          name="message"
          onChange={onChangeUser}
        />

        <button onClick={onSubmit}>Submit</button>
      </form>
    </div>
  );
};

export default Contact;
