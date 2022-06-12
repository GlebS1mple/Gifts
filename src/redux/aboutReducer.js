
import { productsAPI } from './../api/api';

const SET_SEARCHED_PRODUCTS = "ABOUT/SET_SEARCHED_PRODUCTS";
const SET_TOTAL_PRODUCTS = "ABOUT/SET_TOTAL_PRODUCTS";
const SET_SEARCH_ACTIVE = "ABOUT/SET_SEARCH_ACTIVE";
const SET_MOBILE_SEARCH_ACTIVE = "ABOUT/SET_MOBILE_SEARCH_ACTIVE";

let initialState = {
    searchedProducts: [],
    totalProducts: [],
    isMobileSearchActive: false,
    isActive: false,
}


const aboutReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_SEARCHED_PRODUCTS: {
            return {
                ...state, searchedProducts: [...action.searchedProducts]
            }
        }
        case SET_TOTAL_PRODUCTS: {
            return {
                ...state, totalProducts: [...action.totalProducts]
            }
        }
        case SET_SEARCH_ACTIVE: {
            return {
                ...state, isActive: action.isActive
            }
        }
        case SET_MOBILE_SEARCH_ACTIVE: {
            return {
                ...state, isMobileSearchActive: !state.isMobileSearchActive
            }
        }
        default: return state
    }
}

export const setSearchedProductsAC = (searchedProducts) => {
    return {
        type: SET_SEARCHED_PRODUCTS,
        searchedProducts
    }
}
export const setTotalProductsAC = (totalProducts) => {
    return {
        type: SET_TOTAL_PRODUCTS,
        totalProducts
    }
}
export const setSearchActiveAC = (isActive) => {
    return {
        type: SET_SEARCH_ACTIVE,
        isActive
    }
}
export const setMobileSearchActiveAC = () => {
    return {
        type: SET_MOBILE_SEARCH_ACTIVE,
    }
}

export const getTotalProducts = (limit, skip) => async (dispatch) => {
    try {
        let data = await productsAPI.getProducts(limit, skip);
        dispatch(setTotalProductsAC(data.products));
    }
    catch (error) { alert(error.message) }
}
export default aboutReducer;