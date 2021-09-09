import React, { useState, useEffect } from "react";
import classes from "./Payment.module.css";
import { useHistory } from "react-router";

function Payment(props) {
  const [payment, setPayment] = useState({
    amount: "",
    method: "",
  });
  const history = useHistory();

  useEffect(() => {
    setPayment(props.data);
  }, [props.data]);

  const amountChange = (e) => {
    setPayment((prev) => ({ ...prev, amount: e.target.value }));
  };
  const methodChange = (e) => {
    setPayment((prev) => ({ ...prev, method: e.target.value }));
  };

  const PaymentSubmit = (e) => {
    e.preventDefault();
    const data = {
      amount: payment.amount,
      method: payment.method.trim(),
    };
    props.onSubmit(data);
    history.push("/details");
  };

  return (
    <div className={classes.Payment}>
      <div className={classes.Back} onClick={() => history.push("/address")}>
        Back
      </div>
      <div className={classes.Welcome}>
        <div className={classes.Title}>Enter Details</div>
      </div>

      <form onSubmit={PaymentSubmit}>
        <input
          type="number"
          placeholder="Enter Payment Amount"
          className={classes.Input}
          value={payment.amount}
          onChange={amountChange}
          required
        />

        <input
          type="text"
          placeholder="Enter Payment Method"
          className={classes.Input}
          value={payment.method}
          onChange={methodChange}
          required
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Payment;
