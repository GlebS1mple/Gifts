import axios from "axios";

const baseUrl = "https://dummyjson.com/products";
export const productsAPI = {
    getProducts(limit = 10, skip = 0) {
        return axios.get(`${baseUrl}?limit=${limit}&skip=${skip}`).then(response => { return response.data });;
    },
    getFilteredProducts(limit = 100, skip = 0) {
        return axios.get(`${baseUrl}?limit=${limit}&skip=${skip}`).then(response => { return response.data });;
    },
    getSearchedProducts(limit = 100, skip = 0) {
        return axios.get(`${baseUrl}?limit=${limit}&skip=${skip}`).then(response => { return response.data });;
    },
}


