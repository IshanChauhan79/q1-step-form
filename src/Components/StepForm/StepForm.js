import React, { useState } from "react";
import { Switch, Route } from "react-router-dom";
import { Redirect, useHistory } from "react-router";
import Users from "../Users/Users";
import classes from "./StepForm.module.css";
import Form from "../Form/Form";
import AddressForm from "../Form/AddressForm";
import Payment from "../Form/Payment";

function Auth() {
  const [isData, setIsData] = useState(false);
  const [isAddress, setIsAddress] = useState(false);
  const [isPayment, setIsPayment] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    number: "",
    address: {
      house: "",
      area: "",
      city: "",
      state: "",
    },
    payment: {
      amount: "",
      method: "",
    },
  });
  const history = useHistory();

  const submitDetails = (data) => {
    setFormData((prev) => ({
      ...prev,
      name: data.name,
      number: data.number,
      email: data.email,
    }));
    setIsData(true);
  };

  const submitAddress = (data) => {
    setFormData((prev) => ({
      ...prev,
      address: data,
    }));
    setIsAddress(true);
  };
  const submitPayment = (data) => {
    setFormData((prev) => ({
      ...prev,
      payment: data,
    }));
    setIsPayment(true);
  };

  const homeClicked = () => {
    history.push("/");
  };
  const resetForm = () => {
    setIsData(false);
    setIsAddress(false);
    setIsPayment(false);
    setFormData({
      name: "",
      email: "",
      number: "",
      address: {
        house: "",
        area: "",
        city: "",
        state: "",
      },
      payment: {
        amount: "",
        method: "",
      },
    });
  };

  return (
    <div className={classes.StepForm}>
      <Switch>
        <Route path="/" exact>
          <Form onSubmit={submitDetails} data={formData} reset={resetForm} />
        </Route>

        <Route path="/address" exact>
          {isData ? (
            <AddressForm onSubmit={submitAddress} data={formData.address} />
          ) : (
            <Redirect to="/" />
          )}
        </Route>
        <Route path="/payment" exact>
          {isData && isAddress  ? (
            <Payment onSubmit={submitPayment} data={formData.payment} />
          ) : (
            <Redirect to="/" />
          )}
        </Route>

        <Route path="/details" exact>
          {isData && isAddress && isPayment ? (
            <Users data={formData} goHome={homeClicked} />
          ) : (
            <Redirect to="/" />
          )}
        </Route>

        <Route path="/">
          <div>404 Page not Found</div>
        </Route>
      </Switch>
    </div>
  );
}

export default Auth;
