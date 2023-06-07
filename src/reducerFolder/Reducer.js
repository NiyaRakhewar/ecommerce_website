import { v4 as uuid } from "uuid";

export const initialState = {
  product: [],
  category: [],
  selectedType: [],
  selectedCategory: "All",
  range: 1000,
  sortValue: "All",
  rating: 0,
  searchValue: "",
  cart: [],
  wishlist: [],
  // isEdit: false,
  isAdded: false,
  editAddressId: null,
  selectedAddressId: null,
  totalBill: 0,
  showPass: false,
  showConfirmPass: false,

  addressList: [
    {
      id: uuid(),
      name: "Niharika Rakhewar",
      mobile: 1234567893,
      pincode: 530068,
      alternatemobile: 7234567893,
      state: "Karnataka",
      city: "Banglore",
      address: "A F station yelahanka",
    },
  ],
  randomAddress: [
    {
      id: uuid(),
      name: "John Doe",
      pincode: "12345",
      mobile: "1234567890",
      alternateMobile: "9876543210",
      city: "Anytown",
      state: "USA",
      address: "123 Main Street",
    },
    {
      id: uuid(),
      name: "Jane Smith",
      pincode: "67890",
      mobile: "9876543210",
      alternateMobile: "1234567890",
      city: "Springfield",
      state: "USA",
      address: "456 Elm Avenue",
    },
    {
      id: uuid(),
      name: "Alice Johnson",
      pincode: "54321",
      mobile: "2468135790",
      alternateMobile: "1357924680",
      city: "Pleasantville",
      state: "USA",
      address: "789 Oak Lane",
    },
    {
      id: uuid(),
      name: "Robert Brown",
      pincode: "24680",
      mobile: "9876543210",
      alternateMobile: "1234567890",
      city: "Lakeside",
      state: "USA",
      address: "321 Pine Road",
    },
    {
      id: uuid(),
      name: "Emily Davis",
      pincode: "13579",
      mobile: "2468135790",
      alternateMobile: "1357924680",
      city: "Meadowville",
      state: "USA",
      address: "555 Maple Drive",
    },
    {
      id: uuid(),
      name: "Michael Johnson",
      pincode: "98765",
      mobile: "1234567890",
      alternateMobile: "9876543210",
      city: "Hillside",
      state: "USA",
      address: "888 Cedar Court",
    },
    {
      id: uuid(),
      name: "Sophia Wilson",
      pincode: "43210",
      mobile: "2468135790",
      alternateMobile: "1357924680",
      city: "Riverside",
      state: "USA",
      address: "999 Birch Street",
    },
    {
      id: uuid(),
      name: "Daniel Thompson",
      pincode: "13579",
      mobile: "9876543210",
      alternateMobile: "1234567890",
      city: "Mountainview",
      state: "USA",
      address: "234 Spruce Avenue",
    },
    {
      id: uuid(),
      name: "Olivia Parker",
      pincode: "24680",
      mobile: "2468135790",
      alternateMobile: "1357924680",
      city: "Beachside",
      state: "USA",
      address: "777 Willow Lane",
    },
  ],
};
export const Reducer = (state, action) => {
  switch (action.type) {
    case "All_PRODUCTS":
      return { ...state, product: action.payload };

    case "CATEGORIES":
      return { ...state, category: action.payload };

    case "EACH_CATEGORY":
      return { ...state, selectedCategory: action.payload };

    case "CHANGE_RANGE":
      return { ...state, range: action.payload };

    case "SELECTED_TYPE":
      return { ...state, selectedType: action.payload };

    case "SORT_BY_HIGHTOLOW":
      return { ...state, sortValue: action.payload };

    case "SORT_BY_LOWTOHIGH":
      return { ...state, sortValue: action.payload };

    case "SELECTED_RATINGS":
      return { ...state, rating: action.payload };

    case "CLEAR":
      return {
        ...state,
        selectedType: [],
        selectedCategory: "All",
        range: 1000,
        sortValue: "All",
        rating: 0,
      };

    case "SEARCH_DATA":
      return { ...state, searchValue: action.payload };

    case "ADD-TO-CART":
      return { ...state, cart: action.payload };

    case "REMOVE_FROM_CART":
      return { ...state, cart: action.payload };

    case "ADD-TO-WISHLIST":
      return { ...state, wishlist: action.payload };

    case "REMOVE_FROM_WISHLIST":
      return { ...state, wishlist: action.payload };

    case "QUANTITY_DECREMENT_BUTTON":
      return {
        ...state,
        cart: state.cart.map((item) => {
          if (item._id === action.payload) {
            console.log("action.payload :", action.payload);
            console.log("item:", item);
            return { ...item, qty: item.qty > 1 ? item.qty - 1 : 1 };
          }
          return item;
        }),
      };

    case "QUANTITY_INCREMENT_BUTTON":
      return {
        ...state,
        cart: state.cart.map((item) => {
          if (item._id === action.payload) {
            console.log("action.payload:", action.payload);
            console.log("item :", item);
            return { ...item, qty: item.qty + 1 };
          }
          return item;
        }),
      };

    case "DELETE_ADDRESS_BUTTON":
      const filteredAddresses = state.addressList.filter(
        (address) => address.id !== action.payload
      );
      return {
        ...state,
        addressList: filteredAddresses,
      };

    case "ADD_ADDRESS_CLICKED":
      return { ...state, isAdded: true };

    case "ADD_ADDRESS":
      return {
        ...state,
        isAdded: false,
        addressList: [...state.addressList, action.payload],
      };

    case "CANCEL_ADDRESS_BUTTON":
      return {
        ...state,
        editAddressId: null,
        isAdded: false,
      };

    case "EDIT_ADDRESS_CLICKED":
      return { ...state, editAddressId: action.payload };

    // case "EDIT_ADDRESS":
    //   return {
    //     ...state,
    //     addressList: state.addressList.map((item) => {
    //       return item.id === action.payload.address.id
    // ? action.payload.address
    //         : item;
    //     }),
    //   };

    case "UPDATE_ADDRESS":
      const updateAddress = state.addressList.map((address) => {
        if (address.id === action.payload.id) {
          return {
            ...address,
            name: action.payload.name,
            mobile: action.payload.mobile,
            city: action.payload.city,
            pincode: action.payload.pincode,
            address: action.payload.address,
          };
        }
        return address;
      });
      return {
        ...state,
        editAddressId: null,
        addressList: updateAddress,
      };

    case "SELECTED_ADDRESS":
      return {
        ...state,
        selectedAddressId: action.payload,
      };

    case "SHOW_PASSWORD":
      return { ...state, showPass: action.payload };

    case "SHOW_CONFIRM_PASSWORD":
      return { ...state, showConfirmPass: action.payload };

    case "CART_EMPTY":
      return { ...state, cart: [] };

    default:
      return state;
  }
};
