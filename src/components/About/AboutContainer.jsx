import React from 'react';
import About from "./About";
import { useState, useCallback, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setSearchedProductsAC, getTotalProducts, setSearchActiveAC, setMobileSearchActiveAC } from './../../redux/aboutReducer';
import { setProductActiveAC } from './../../redux/catalogReducer';

const AboutContainer = () => {
    let state = useSelector(state => state);
    const dispatch = useDispatch();
    const [burger, setBurger] = useState(false);
    const activateSearch = useCallback((isActive) => {
        dispatch(setSearchActiveAC(isActive))
        //console.log("render");
    }, [state.about.isActive]);
    /*const setSomeBurger = useCallback(() => {
        setBurger(true)
        console.log("render");
    }, [burger]);*/
    const setProductActive = useCallback((isActive, id, name, price, brand, description, image, count, totalProductPrice, images) => {
        dispatch(setProductActiveAC(isActive, id, name, price, brand, description, image, count, totalProductPrice, images));
        dispatch(setSearchActiveAC(false))
    }, [state.catalog.product.isActive]);
    const setSomeBurger = () => {
        setBurger(true);
        document.body.classList.add("lock");
    }
    useEffect(() => {
        dispatch(getTotalProducts(100, 0));
    }, [])
    let setCurrentValue = (value) => {
        if (state.about.totalProducts.length > 0 && value) {
            let searchedProducts = state.about.totalProducts.filter((product) => {
                return product.title.toLowerCase().includes(value.toLowerCase());
            }, []);
            dispatch(setSearchedProductsAC(searchedProducts));
        }
    };
    /*const memorized = useMemo((value) => {
        setCurrentValue(value);
    }, [value])*/
    const debounce = (fn, ms) => {
        let timeout;
        return function () {
            const fnCall = () => {
                fn.apply(this, arguments)
            }
            clearTimeout(timeout);
            timeout = setTimeout(fnCall, ms)
        };
    };
    const setMobileSearchActive = useCallback(() => {
        dispatch(setMobileSearchActiveAC());
        dispatch(setSearchActiveAC(false));
    }, [state.about.isMobileSearchActive])
    setCurrentValue = debounce(setCurrentValue, 200);
    //memorized = debounce(memorized, 200)
    return (
        <About
            searchedProducts={state.about.searchedProducts}
            setProductActive={setProductActive}
            setCurrentValue={setCurrentValue}
            isMobileSearchActive={state.about.isMobileSearchActive}
            setBurger={setBurger}
            burger={burger}
            setSomeBurger={setSomeBurger}
            setMobileSearchActive={setMobileSearchActive}
            activateSearch={activateSearch}
            isActive={state.about.isActive} />
    );
};

export default AboutContainer;