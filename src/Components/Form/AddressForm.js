import React, { useState, useEffect } from "react";
import classes from "./AddressForm.module.css";
import { useHistory } from "react-router";

function AddressForm(props) {
  const [address, setAddress] = useState({
    house: "",
    area: "",
    city: "",
    state: "",
  });
  const history = useHistory();

  useEffect(() => {
    setAddress(props.data);
  }, [props.data]);

  const houseChange = (e) => {
    setAddress((prev) => ({ ...prev, house: e.target.value }));
  };
  const areaChange = (e) => {
    setAddress((prev) => ({ ...prev, area: e.target.value }));
  };
  const cityChange = (e) => {
    setAddress((prev) => ({ ...prev, city: e.target.value }));
  };
  const stateChange = (e) => {
    setAddress((prev) => ({ ...prev, state: e.target.value }));
  };
  
  const addressFormSubmit = (e) => {
    e.preventDefault();
    const data = {
      house: address.house.trim(),
      area: address.area.trim(),
      city: address.city.trim(),
      state: address.state.trim(),
    };
    props.onSubmit(data);
    history.push("/details");
  };

  return (
    <div className={classes.AddressForm}>
      <div className={classes.Welcome}>
        <div className={classes.Title}>Enter Details</div>
      </div>

      <form onSubmit={addressFormSubmit}>
        <input
          type="text"
          placeholder="House"
          className={classes.Input}
          value={address.house}
          onChange={houseChange}
          required
        />

        <input
          type="text"
          placeholder="Area"
          className={classes.Input}
          value={address.area}
          onChange={areaChange}
          required
        />

        <input
          type="text"
          placeholder="City"
          className={classes.Input}
          value={address.city}
          onChange={cityChange}
          required
        />
        <input
          type="text"
          placeholder="State"
          className={classes.Input}
          value={address.state}
          onChange={stateChange}
          required
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default AddressForm;
