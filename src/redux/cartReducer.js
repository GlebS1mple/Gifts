const SET_CART_ACTIVE = "CART/SET_CART_ACTIVE";
const SET_CART_PRODUCTS = "CART/SET_CART_PRODUCTS";
const ADD_COUNT_PRODUCT = "CART/ADD_COUNT_PRODUCT";
const REMOVE_COUNT_PRODUCT = "CART/REMOVE_PRODUCT";
const SET_TOTAL_PRICE = "CART/SET_TOTAL_PRICE";
const SET_TOTAL_PRODUCTS_COUNT = "CART/SET_TOTAL_COUNT";
const DELETE_PRODUCT = "CART/DELETE_PRODUCT";


let initialState = {
    cartProducts: [],
    isActive: false,
    totalPrice: 0,
    totalProductsCount: 0,
}
const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_CART_ACTIVE: {
            return {
                ...state, isActive: action.isActive
            }
        }
        case SET_CART_PRODUCTS: {
            return {
                ...state, cartProducts: [...state.cartProducts, action.product]
            }
        }
        case DELETE_PRODUCT: {
            let index = state.cartProducts.findIndex(product => product.id === action.id);
            state.cartProducts[index].totalProductPrice = 0;
            state.cartProducts[index].count = 0;
            let cartProducts = state.cartProducts.splice(index, 1);
            return {
                ...state,
                cartProducts: [...state.cartProducts],
            }
        }
        case ADD_COUNT_PRODUCT: {
            let cartProduct = state.cartProducts.find(product => product.id === action.id)
            cartProduct.totalProductPrice += action.price;
            cartProduct.count += 1;
            if (cartProduct) {
                return {
                    ...state,
                    cartProducts: [...state.cartProducts]
                }
            }
        }
        case REMOVE_COUNT_PRODUCT: {
            let cartProduct = state.cartProducts.find(product => product.id === action.id);
            if (cartProduct.count > 1) {
                cartProduct.totalProductPrice -= action.price;
                cartProduct.count -= 1;
            }
            if (cartProduct) {
                return {
                    ...state,
                    cartProducts: [...state.cartProducts]
                }
            }
        }
        case SET_TOTAL_PRICE: {
            return {
                ...state,
                totalPrice: action.totalPrice
            }
        }
        case SET_TOTAL_PRODUCTS_COUNT: {
            return {
                ...state,
                totalProductsCount: action.totalProductsCount
            }
        }
        default: return state;
    }
}
export const setCartActiveAC = (isActive) => {
    return {
        type: SET_CART_ACTIVE,
        isActive
    }
}
export const setCartProductsAC = (product) => {
    return {
        type: SET_CART_PRODUCTS,
        product
    }
}
export const deleteCartProductsAC = (id) => {
    return {
        type: DELETE_PRODUCT,
        id
    }
}
export const addProductAC = (id, count, price, totalProductCount) => {
    return {
        type: ADD_COUNT_PRODUCT,
        id,
        count,
        price,
        totalProductCount
    }
}
export const removeProductAC = (id, totalProductPrice, price, totalProductCount) => {
    return {
        type: REMOVE_COUNT_PRODUCT,
        id,
        totalProductPrice,
        price,
        totalProductCount
    }
}
export const setTotalPriceAC = (totalPrice) => {
    return {
        type: SET_TOTAL_PRICE,
        totalPrice
    }
}
export const setTotalProductsCountAC = (totalProductsCount) => {
    return {
        type: SET_TOTAL_PRODUCTS_COUNT,
        totalProductsCount
    }
}

export default cartReducer;