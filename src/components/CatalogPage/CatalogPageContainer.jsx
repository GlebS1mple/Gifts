import React from 'react';
import CatalogPage from './CatalogPage';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { setNavLink } from '../../redux/navReducer';
import { setSearchActiveAC } from '../../redux/aboutReducer';
import { useState, useCallback, useMemo } from 'react';
import { setCategoryAC, getFilteredProducts, getProducts, setProductActiveAC, setLimitAC, getMoreProducts } from './../../redux/catalogReducer';
import { setCartActiveAC, setCartProductsAC } from './../../redux/cartReducer';

const CatalogPageContainer = () => {
    let state = useSelector(state => state)
    let dispatch = useDispatch();
    const activateSearch = (isActive) => {
        dispatch(setSearchActiveAC(isActive))
    }
    useEffect(() => {
        dispatch(getProducts(state.catalog.limit, state.catalog.skip));
    }, [])
    useEffect(() => {
        dispatch(getProducts(state.catalog.limit, state.catalog.skip));
    }, [state.catalog.skip])
    let location = useLocation();
    useEffect(() => {
        dispatch(setNavLink(location.pathname))
    }, [])
    let loaderLimit = state.catalog.limit;
    let newLoader = [];
    for (let i = 1; i <= loaderLimit; i++) {
        newLoader.push(i);
    }
    //let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const [filters, setFilters] = useState(false);
    let count = state.catalog.product.count;
    const filterBy = (category) => {
        //dispatch(setFetchingAC(true))
        if (category !== "all") {
            dispatch(getFilteredProducts(100, 0, category, state.catalog.limit));
        } else {
            dispatch(getProducts(state.catalog.limit, state.catalog.skip))
        }
        //let filtered = state.catalog.products.filter((product) => product.category == category);
        dispatch(setCategoryAC(category));
        //dispatch(filterAC(filtered));
        //dispatch(setFetchingAC(false));
    }
    const setProductActive = (isActive, id, name, price, brand, description, image, count, totalProductPrice, images) => {
        dispatch(setProductActiveAC(isActive, id, name, price, brand, description, image, count, totalProductPrice, images))
    }
    const addMoreProducts = () => {
        let newLimit = state.catalog.limit + 5;
        dispatch(setLimitAC(newLimit))
        dispatch(getProducts(newLimit, state.catalog.skip))
    }
    const setProductUnactive = (isActive) => {
        dispatch(setProductActiveAC(isActive))
    }
    /*useEffect(() => {
        const raw = localStorage.getItem("state");
        let cartStorageProducts = JSON.parse(raw);
        dispatch(setCartProductsAC(cartStorageProducts.cartProducts))
    }, [])*/
    let setActive = (isActiveCart, isActiveProduct, product) => {
        let repeatedProduct = state.cart.cartProducts.find(cartProduct => cartProduct.id === product.id);
        if (!repeatedProduct) {
            dispatch(setCartProductsAC(product));
            dispatch(setCartActiveAC(isActiveCart));
            dispatch(setProductActiveAC(isActiveProduct));
        } else {
            dispatch(setCartActiveAC(isActiveCart));
            dispatch(setProductActiveAC(isActiveProduct));
        }
    }
    return (
        <CatalogPage
            activateSearch={activateSearch}
            filters={filters}
            setFilters={setFilters}
            links={state.catalog.links}
            currentCategory={state.catalog.currentCategory}
            isFetching={state.catalog.isFetching}
            filtered={state.catalog.filtered}
            setProductActive={setProductActive}
            products={state.catalog.products}
            limit={state.catalog.limit}
            addMoreProducts={addMoreProducts}
            filterBy={filterBy}
            newLoader={newLoader}
            setProductUnactive={setProductUnactive}
            setActive={setActive}
            isActive={state.catalog.product.isActive}
            images={state.catalog.product.images}
            name={state.catalog.product.name}
            brand={state.catalog.product.brand}
            price={state.catalog.product.price}
            description={state.catalog.product.description}
            id={state.catalog.product.id}
            image={state.catalog.product.image}
            count={state.catalog.product.count}
            totalProductPrice={state.catalog.product.totalProductPrice}
            totalProductCount={state.catalog.product.totalProductCount}
        />
    );
};

export default CatalogPageContainer;