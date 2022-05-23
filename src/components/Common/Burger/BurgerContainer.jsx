import React from 'react';
import { getFilteredProducts, getProducts, setCategoryAC } from './../../../redux/catalogReducer';
import { useSelector, useDispatch } from 'react-redux';
import Burger from './Burger';
const BurgerContainer = ({ burger, setBurger }) => {
    let state = useSelector(state => state);
    let dispatch = useDispatch();
    const closeBurger = () => {
        setBurger(false);
    }
    const filterBy = (category) => {
        if (category !== "all") {
            dispatch(getFilteredProducts(100, 0, category, state.catalog.limit));
        } else {
            dispatch(getProducts(state.catalog.limit, state.catalog.skip))
        }
        dispatch(setCategoryAC(category));
        closeBurger();
    }
    /*useEffect(() => {
        if (state.about.isActive) {
            document.body.classList.add("lock");
        }
        return () => {
            document.body.classList.remove("lock");
        }
    }, [state.about.isActive])
    useEffect(() => {
        if (!state.about.isActive) {
            document.body.classList.remove("lock");
        }

    }, [state.about.isActive])*/
    return (
        <Burger
            burger={burger}
            setBurger={setBurger}
            closeBurger={closeBurger}
            links={state.catalog.links}
            currentCategory={state.catalog.currentCategory}
            filterBy={filterBy}
        />
    );
};

export default BurgerContainer;