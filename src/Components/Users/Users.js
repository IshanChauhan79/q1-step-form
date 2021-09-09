import React from "react";
import classes from "./Users.module.css";

function Users(props) {
  return (
    <div className={classes.Users}>
      <div className={classes.Home} onClick={() => props.goHome()}>
       Home
      </div>
      <div className={classes.UserData}>
        <div>
          Name: <span className={classes.Data}>{props.data.name}</span>
        </div>
        <div className={classes.Email}>
          Email: <span className={classes.Data}>{props.data.email}</span>
        </div>
        <div className={classes.Email}>
          Number: <span className={classes.Data}>{props.data.number}</span>
        </div>
        <div className={classes.Email}>
          Address:{" "}
          <span className={classes.Data}>
            {props.data.address.house}, {props.data.address.area},{" "}
            {props.data.address.city}, {props.data.address.state}
          </span>
        </div>
      </div>
    </div>
  );
}

export default Users;
