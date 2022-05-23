import { productsAPI } from './../api/api';

const GET_PRODUCTS = "CATALOG/GET_PRODUCTS";
const GET_FILTERED_PRODUCTS = "CATALOG/GET_FILTERED_PRODUCTS";
const SET_FETCHING = "CATALOG/SET_FETCHING";
const FILTER = "CATALOG/FILTER";
const SET_CATEGORY = "CATALOG/SET_CATEGORY";
const SET_TOTAL_COUNT = "CATALOG/SET_TOTAL_COUNT";
const SET_CURRENT_PAGE = "CATALOG/SET_CURRENT_PAGE";
const SET_PRODUCT_ACTIVE = "SET_PRODUCT_ACTIVE";
const SET_LIMIT = "CATALOG/SET_LIMIT";

let initialState = {
    products: [],
    links: [
        { id: 0, text: "Все товары", category: "all" },
        { id: 1, text: "Смартфоны", category: "smartphones" },
        { id: 2, text: "Ноутбуки", category: "laptops" },
        { id: 3, text: "Духи", category: "fragrances" },
        { id: 4, text: "Забота о коже", category: "skincare" },
        { id: 5, text: "Еда", category: "groceries" },
        { id: 6, text: "Для дома", category: "home-decoration" },
        { id: 7, text: "Мебель", category: "furniture" },
        { id: 8, text: "Толстовки", category: "tops" },
        { id: 9, text: "Платья", category: "womens-dresses" },
        { id: 10, text: "Обувь женская", category: "womens-shoes" },
        { id: 11, text: "Футболки мужские", category: "mens-shirts" },
        { id: 12, text: "Обувь мужская", category: "mens-shoes" },
        { id: 13, text: "Часы мужские", category: "mens-watches" },
        { id: 14, text: "Часы женские", category: "womens-watches" },
        { id: 15, text: "Сумки женские", category: "womens-bags" },
        { id: 16, text: "Ювелирные изделия", category: "womens-jewellery" },
        { id: 17, text: "Очки", category: "sunglasses" },
        { id: 18, text: "Аксессуары для авто", category: "automotive" },
        { id: 19, text: "Мотоциклы", category: "motorcycle" },
        { id: 20, text: "Лампы", category: "lighting" },
    ],
    filtered: [],
    totalCount: 0,
    limit: 10,
    skip: 0,
    isFetching: false,
    currentCategory: "all",
    product: {
        isActive: false,
        id: null,
        name: null,
        price: null,
        brand: null,
        description: null,
        image: null,
        count: 1,
        totalProductPrice: 0,
        images: [],
    }
}

const catalogReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_PRODUCTS: {
            return {
                ...state, products: [...action.products]
            }
        }
        case GET_FILTERED_PRODUCTS: {
            return {
                ...state, filtered: [...action.filtered]
            }
        }
        case SET_FETCHING: {
            return {
                ...state, isFetching: action.fetch
            }
        }
        case FILTER: {
            return {
                ...state, filtered: [...action.filtered]
            }
        }
        case SET_CATEGORY: {
            return {
                ...state, currentCategory: action.category
            }
        }
        case SET_TOTAL_COUNT: {
            return {
                ...state, totalCount: action.total
            }
        }
        case SET_CURRENT_PAGE: {
            return {
                ...state, skip: action.skip
            }
        }
        case SET_LIMIT: {
            return {
                ...state, limit: action.limit
            }
        }
        case SET_PRODUCT_ACTIVE: {
            return {
                ...state,
                product: {
                    isActive: action.payload.isActive,
                    id: action.payload.id,
                    name: action.payload.name,
                    price: action.payload.price,
                    brand: action.payload.brand,
                    description: action.payload.description,
                    image: action.payload.image,
                    price: action.payload.price,
                    count: action.payload.count,
                    totalProductPrice: action.payload.totalProductPrice,
                    images: action.payload.images
                }
            }
        }
        default: return state
    }
}
//count: action.payload.count,
export const getProductsAC = (products) => {
    return {
        type: GET_PRODUCTS,
        products
    }
}
export const getfilteredProductsAC = (filtered) => {
    return {
        type: GET_FILTERED_PRODUCTS,
        filtered
    }
}
export const setFetchingAC = (fetch) => {
    return {
        type: SET_FETCHING,
        fetch
    }
}
export const filterAC = (filtered) => {
    return {
        type: FILTER,
        filtered
    }
}
export const setCategoryAC = (category) => {
    return {
        type: SET_CATEGORY,
        category
    }
}
export const setTotalCountAC = (total) => {
    return {
        type: SET_TOTAL_COUNT,
        total
    }
}
export const setCurrentPageAC = (skip) => {
    return {
        type: SET_CURRENT_PAGE,
        skip
    }
}
export const setLimitAC = (limit) => {
    return {
        type: SET_LIMIT,
        limit
    }
}
export const setProductActiveAC = (isActive, id, name, price, brand, description, image, count, totalProductPrice, images) => {
    return {
        type: SET_PRODUCT_ACTIVE,
        payload: {
            isActive: isActive,
            id: id,
            name: name,
            price: price,
            brand: brand,
            description: description,
            image: image,
            count: count,
            totalProductPrice: totalProductPrice,
            images: images
        }
    }
}

export const getProducts = (limit, skip) => async (dispatch) => {
    dispatch(setFetchingAC(true));
    let data = await productsAPI.getProducts(limit, skip);
    dispatch(setTotalCountAC(data.total));
    dispatch(getProductsAC(data.products));
    dispatch(setFetchingAC(false));
}
export const getFilteredProducts = (limit, skip, category, commonLimit) => async (dispatch) => {
    dispatch(setFetchingAC(true));
    let data = await productsAPI.getFilteredProducts(limit, skip);
    let filtered = data.products.filter((product) => product.category == category);
    let newTotalCount = 0;
    if (filtered.length >= commonLimit) {
        newTotalCount = filtered.length;
    }
    if (category !== "all") {
        dispatch(setTotalCountAC(newTotalCount));
    }
    dispatch(getfilteredProductsAC(filtered));
    dispatch(setFetchingAC(false));
}
export default catalogReducer;