import React, { useState, useEffect } from "react";
import classes from "./Form.module.css";
import { useHistory } from "react-router";

function Form(props) {
  const [email, setEmail] = useState("");
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [name, setName] = useState("");
  const [isNameValid, setIsNameValid] = useState(true);
  const [number, setNumber] = useState("");
  const [isNumberValid, setIsNumberValid] = useState(true);
  const history = useHistory();
  console.log(props)

  useEffect(() => {
    setEmail(props.data.email);
    setName(props.data.name);
    setNumber(props.data.number);
  }, [props.data.email, props.data.name, props.data.number]);

  const emailChanged = (e) => {
    setEmail(e.target.value);
  };

  const numberChanged = (e) => {
    setNumber(e.target.value);
  };
  const nameChanged = (e) => {
    setName(e.target.value);
  };

  const formSubmit = (e) => {
    e.preventDefault();

    let re =
      /^(([^<>()\]\\.,;:\s@"]+(\.[^<>()\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    let name_check = /^[a-zA-Z\s]*$/;

    let emailValid = re.test(email.trim());
    setIsEmailValid(emailValid);

    let num = number.toString();
    setIsNumberValid(num.length === 10);

    let nameValid = name_check.test(name.trim());
    setIsNameValid(nameValid);

    if (emailValid && num.length === 10 && nameValid) {
      const data = {
        email: email.trim(),
        name: name.trim(),
        number: number,
      };
      props.onSubmit(data);
      history.push("/address");
    }
  };
  return (
    <div className={classes.Form}>
      <div className={classes.Welcome}>
        <div className={classes.Title}>Enter Details</div>
      </div>

      <form onSubmit={formSubmit}>
        <input
          type="text"
          placeholder="Full Name"
          className={classes.Input}
          onChange={nameChanged}
          value={name}
          required
        />
        {isNameValid ? null : (
          <div className={classes.Error}>Alphabets and white space only </div>
        )}

        <input
          type="number"
          placeholder="Phone Number"
          className={classes.Input}
          onChange={numberChanged}
          value={number}
          required
        />
        {isNumberValid ? null : (
          <div className={classes.Error}>10 digit number only</div>
        )}

        <input
          type="email"
          placeholder="Email"
          className={classes.Input}
          onChange={emailChanged}
          value={email}
          required
        />
        {isEmailValid ? null : (
          <div className={classes.Error}>Email not valid</div>
        )}
        <button type="submit">Next Step</button>
      </form>
      <div className={classes.Reset} onClick={props.reset}>Reset Form</div>
    </div>
  );
}

export default Form;
