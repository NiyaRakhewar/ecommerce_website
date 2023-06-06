// import React, { useContext } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faPlus } from "@fortawesome/free-solid-svg-icons";
// import { AddressForm } from "./AddressForm";
// import { v4 as uuid } from "uuid";
// import { ProductListContext } from "../../../context/ProductListContext";

// export const Address = () => {
//   const { state, dispatch } = useContext(ProductListContext);

//   const handleDeleteAddress = (id) => {
//     dispatch({
//       type: "DELETE_ADDRESS_BUTTON",
//       payload: id,
//     });
//   };

//   const handleEditAddress = (id) => {
//     dispatch({
//       type: "EDIT_ADDRESS_CLICKED",
//       payload: id,
//     });
//   };

//   return (
//     <div className="address-outer-container">
//       <div className="address-header">
//         {state.addressList.length === 0 && <h3>No address to display</h3>}
//       </div>
//       <div className="address-container">
//         <div className="controller-container">
//           {state.isAdded ? (
//             <AddressForm
//               details={{
//                 id: uuid(),
//                 name: "",
//                 mobile: "",
//                 city: "",
//                 pincode: "",
//                 state: "",
//                 address: "",
//               }}
//             />
//           ) : (
//             <button
//               className="add-address-btn"
//               onClick={() => dispatch({ type: "ADD_ADDEESS_CLICKED" })}
//             >
//               <FontAwesomeIcon icon={faPlus} />
//             </button>
//           )}
//           {!state.isAdded && (
//             <p className="add-address-label">Add new Address</p>
//           )}
//         </div>

//         <ul className="list-stacked address-list">
//           {state.addressList.map((details) => {
//             const { id, name, mobile, city, pincode, address, state } = details;

//             const isEditing = state.editAddressId === id;

//             return (
//               <div className="controller-container">
//                 {isEditing ? (
//                   <AddressForm details={details} />
//                 ) : (
//                   <div>
//                     <div className="list-stacked-heading">
//                       <h3>{name}</h3>
//                     </div>
//                     <div className="ph-no-city-section">
//                       <p>{mobile}</p>
//                       <p>{city}</p>
//                     </div>
//                     <div className="pin-state-section">
//                       <p>
//                         <b>Pin:</b> {pincode}
//                       </p>
//                       <p>
//                         <b>State:</b> {state}
//                       </p>
//                     </div>
//                     <div className="address-section">
//                       <p>
//                         <b>Address:</b>: {address}
//                       </p>
//                     </div>
//                     <div className="address-footer">
//                       <button onClick={() => handleEditAddress(id)}>
//                         Edit
//                       </button>
//                       <button onClick={() => handleDeleteAddress(id)}>
//                         Delete
//                       </button>
//                     </div>
//                   </div>
//                 )}
//               </div>
//             );
//           })}
//         </ul>
//       </div>
//     </div>
//   );
// };
