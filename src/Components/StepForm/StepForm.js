import React, { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import { Redirect, useHistory } from "react-router";
import Users from "../Users/Users";
import classes from "./StepForm.module.css";
import Form from "../Form/Form";
import AddressForm from "../Form/AddressForm";

function Auth() {
  const [isData, setIsData] = useState(false);
  const [isAddress, setIsAddress] = useState(false);
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
  });
  const [isAuth, setIsAuth] = useState(false);
  const [users, setUsers] = useState([]);
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

  const homeClicked = () => {
    history.push("/");
  };
  const resetForm = () => {
    setIsData(false);
    setIsAddress(false);
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

        <Route path="/details" exact>
          {isData && isAddress ? (
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
