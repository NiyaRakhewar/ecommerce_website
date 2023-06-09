import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { AddressForm } from "./AddressForm";
import { v4 as uuid } from "uuid";
import { ProductListContext } from "../../../context/ProductListContext";
import "../../styles/Addresses.css";
export const Addresses = () => {
  const { state, dispatch } = useContext(ProductListContext);

  console.log("start", state.editAddressId);
  const handleDeleteAddress = (id) => {
    dispatch({
      type: "DELETE_ADDRESS_BUTTON",
      payload: id,
    });
  };

  const handleEditAddress = (details) => {
    // console.log("edit clicked", details.id);
    dispatch({
      type: "EDIT_ADDRESS_CLICKED",
      payload: details.id,
    });
  };

  return (
    <div className="address-outer-container">
      <div className="address-header">
        {state.addressList.length === 0 && <h3>No address to display</h3>}
      </div>
      <div className="address-container">
        <div className="controller-container">
          {state.isAdded ? (
            <AddressForm
              details={{
                id: uuid(),
                name: "",
                mobile: "",
                city: "",
                pincode: "",
                state: "",
                addressText: "",
              }}
            />
          ) : (
            <button
              className="add-address-btn"
              onClick={() => dispatch({ type: "ADD_ADDRESS_CLICKED" })}
            >
              <FontAwesomeIcon icon={faPlus} />
            </button>
          )}
          {!state.isAdded && (
            <p className="add-address-label">Add new Address</p>
          )}
        </div>

        <ul className="list-stacked address-list">
          {state.addressList.map((details, i) => {
            const { id, name, mobile, city, pincode, address, state } = details;

            const isEditing = state.editAddressId === details.id;

            return (
              <div
                key={i}
                className="list-stacked-item address-list-stacked-item"
              >
                {isEditing ? (
                  <AddressForm details={details} />
                ) : (
                  <>
                    <h3 className="list-stacked-heading "> {name}</h3>
                    <p className="ph-no-section">Mobile: {mobile}</p>
                    <p>{city}</p>
                    <p>{pincode}</p>
                    <p>{state}</p>
                    <p>Address: {address}</p>
                    <button onClick={() => handleEditAddress(details)}>
                      Edit
                    </button>
                    <button onClick={() => handleDeleteAddress(id)}>
                      Delete
                    </button>
                  </>
                )}
              </div>
            );
          })}
        </ul>
      </div>
    </div>
  );
};
