// import { useContext } from "react";
// import "../../styles/AddressList.css";
// import { ProductListContext } from "../../../context/ProductListContext";
// import { Address } from "./Address";

// export const AddressList = () => {
//   const { state } = useContext(ProductListContext);

//   console.log("adresslist state", state);

//   return (
//     <>
//       {" "}
//       {state.addressList.length === 0 ? (
//         <div className="addresslist-empty-placeholder">
//           <h3>No address to display</h3>
//         </div>
//       ) : (
//         <ul className="list-stacked address-list brd-rd-semi-sq">
//           {state.addressList.map((item) => {
//             return <Address addressItem={item} key={item.id} />;
//           })}
//         </ul>
//       )}
//     </>
//   );
// };
