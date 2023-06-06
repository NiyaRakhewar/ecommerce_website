import React, { useContext, useState } from "react";

import { ProductListContext } from "../../../context/ProductListContext";

export const AddressForm = ({ details }) => {
  const [detailsInput, setDetailsInput] = useState({
    id: details.id,
    name: details.name,
    mobile: details.mobile,
    city: details.city,
    pincode: details.pincode,
    state: details.state,
    address: details.address,
  });

  const { state, dispatch } = useContext(ProductListContext);

  const handleFormInput = (e, fieldName) => {
    setDetailsInput((prevData) => ({
      ...prevData,
      [fieldName]: e.target.value,
    }));
  };

  const handleUpdateButtonClick = () => {
    dispatch({
      type: "UPDATE_ADDRESS",
      payload: detailsInput,
    });
  };

  const handleAddButtonClick = () => {
    dispatch({
      type: "ADD_ADDRESS",
      payload: detailsInput,
    });
  };

  const handleCancelButtonClick = () => {
    dispatch({ type: "CANCEL_ADDRESS_BUTTON" });
  };

  const inputResetHandler = () => {
    setDetailsInput({
      id: details.id,
      name: "",
      mobile: "",
      city: "",
      pincode: "",
      state: "",
      address: "",
    });
  };

  const handleRandomData = () => {
    const randomIndex = Math.floor(Math.random() * state.randomAddress.length);
    const randomAddress = state.randomAddress[randomIndex];

    setDetailsInput({
      ...detailsInput,
      name: randomAddress.name,
      mobile: randomAddress.mobile,
      city: randomAddress.city,
      pincode: randomAddress.pincode,
      address: randomAddress.address,
    });
  };

  return (
    <div>
      <input
        type="text"
        value={detailsInput.name}
        onChange={(e) => handleFormInput(e, "name")}
      />
      <input
        type="text"
        value={detailsInput.mobile}
        onChange={(e) => handleFormInput(e, "mobile")}
      />
      <input
        type="text"
        value={detailsInput.city}
        onChange={(e) => handleFormInput(e, "city")}
      />
      <input
        type="text"
        value={detailsInput.pincode}
        onChange={(e) => handleFormInput(e, "pincode")}
      />
      <input
        type="text"
        value={detailsInput.state}
        onChange={(e) => handleFormInput(e, "state")}
      />
      <textarea
        name=""
        id=""
        cols="30"
        rows="10"
        value={detailsInput.address}
        onChange={(e) => handleFormInput(e, "address")}
      />
      <button
        onClick={state.isAdded ? handleAddButtonClick : handleUpdateButtonClick}
      >
        {state.isAdded ? "Add" : "Update"}
      </button>

      <button onClick={inputResetHandler}>Reset</button>
      <button onClick={handleRandomData}>Random Data</button>
      <button onClick={handleCancelButtonClick}>Cancel</button>
    </div>
  );
};
