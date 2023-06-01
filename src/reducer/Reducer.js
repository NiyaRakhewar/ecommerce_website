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
wishlist: []
}
export const reducer = (state, action) =>{
switch(action.type){

   case 'All_PRODUCTS' :
        return {...state, product: action.payload}

    case 'CATEGORIES' :
        return {...state, category: action.payload}

    case 'EACH_CATEGORY':
        return {...state, selectedCategory: action.payload}
    
    case 'CHANGE_RANGE':
        return {...state, range: action.payload}

    case 'SELECTED_TYPE' :
        return {...state, selectedType: action.payload}   

    case 'SORT_BY_HIGHTOLOW':
        return {...state, sortValue: action.payload}

    case 'SORT_BY_LOWTOHIGH':
        return {...state, sortValue: action.payload}

    case 'SELECTED_RATINGS':
        return {...state, rating: action.payload}

    case 'CLEAR':
        return {...state, selectedType: [], selectedCategory: "All", range: 1000, sortValue: "All", rating: 0}
    
    case 'SEARCH_DATA':
        return {...state, searchValue: action.payload}

    case 'ADD-TO-CART':
        return {...state, cart: action.payload}
    
    case 'REMOVE_FROM_CART':
        return {...state, cart: action.payload}

    case 'ADD-TO-WISHLIST':
        return {...state, wishlist: action.payload}

    case 'REMOVE_FROM_WISHLIST':
        return {...state, wishlist: action.payload}


    default:
        return state
}
}