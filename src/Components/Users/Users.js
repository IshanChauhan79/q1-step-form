import React from "react";
import classes from "./Users.module.css";
import {useHistory} from 'react-router'

function Users(props) {
  const history =useHistory();
  return (
    <div className={classes.Users}>
      <div className={classes.Home} onClick={() => props.goHome()}>
        Home
      </div>
      <div className={classes.Back} onClick={() => history.push('/payment')}>
        Back
      </div>
      <div className={classes.UserData}>
        <div>
          Name: <span className={classes.Data}>{props.data.name}</span>
        </div>
        <div>
          Email: <span className={classes.Data}>{props.data.email}</span>
        </div>
        <div>
          Number: <span className={classes.Data}>{props.data.number}</span>
        </div>
        <div>
          Address:{" "}
          <span className={classes.Data}>
            {props.data.address.house}, {props.data.address.area},{" "}
            {props.data.address.city}, {props.data.address.state}
          </span>
        </div>
        <div>
          Payment:{" "}
          <span className={classes.Data}>{props.data.payment.amount}</span>
        </div>
        <div>
          Method:{" "}
          <span className={classes.Data}>{props.data.payment.method}</span>
        </div>
      </div>
    </div>
  );
}

export default Users;
