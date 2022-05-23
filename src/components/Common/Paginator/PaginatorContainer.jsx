import React, { useState } from 'react';
import Paginator from './Paginator';
import { setCurrentPageAC } from '../../../redux/catalogReducer';
import { useSelector, useDispatch } from 'react-redux';

const PaginatorContainer = () => {
    let dispatch = useDispatch();
    let state = useSelector(state => state);
    const pagesTotal = Math.ceil(state.catalog.totalCount / state.catalog.limit);
    let pages = [];
    for (let p = 1; p <= pagesTotal; p++) {
        pages.push(p);
    }
    const setPage = (page) => {
        if (page > 1) {
            let skip = (page - 1) * 10;
            dispatch(setCurrentPageAC(skip))
        }
        else {
            let skip = 0;
            dispatch(setCurrentPageAC(skip))
        }
    }
    let portionSize = 5;
    let portionCount = Math.ceil(pagesTotal / portionSize);
    let [portionNumber, setPortionNumber] = useState(1);
    let prevPortionPageNumber = (portionNumber - 1) * portionSize + 1;
    let nextPortionPageNumber = portionNumber * portionSize;

    return (
        <Paginator
            portionNumber={portionNumber}
            setPortionNumber={setPortionNumber}
            nextPortionPageNumber={nextPortionPageNumber}
            prevPortionPageNumber={prevPortionPageNumber}
            skip={state.catalog.skip}
            pages={pages}
            setPage={setPage}
            portionCount={portionCount}
        />
    );
};

export default PaginatorContainer;