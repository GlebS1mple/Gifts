import React, { useState } from 'react';
import Tumbler from './Tumbler/Tumbler';
import arrowRight2Webp from '../../../img/arrow-right2.webp';
import arrowRight2Png from '../../../img/arrow-right2.png';
import { PropTypes } from 'prop-types';


const Paginator = ({ ...props }) => {
    let { portionNumber, setPortionNumber, nextPortionPageNumber, prevPortionPageNumber, skip, pages, setPage, portionCount } = props;
    return (
        <div className="main__pagination pagination">
            {portionNumber > 1 && <button className="pagination__arrow pagination__arrow_type_prev" onClick={() => setPortionNumber(portionNumber - 1)}>
                <picture><source srcSet={arrowRight2Webp} type="image/webp" /><img src={arrowRight2Png} alt="" className="pagination__arrowimage" /></picture>
            </button>}
            <div className="pagination__tumblers">
                {pages.filter(pages => pages <= nextPortionPageNumber && pages >= prevPortionPageNumber).map((page) =>
                    <Tumbler name={((page - 1) * 10) == skip ? "pagination__tumbler pagination__tumbler_type_active" : "pagination__tumbler"}
                        onClick={() => setPage(page)}
                        key={page}
                        number={page} />)}
            </div>
            {portionCount > portionNumber && <button className="pagination__arrow pagination__arrow_type_next" onClick={() => setPortionNumber(portionNumber + 1)}>
                <picture><source srcSet={arrowRight2Webp} type="image/webp" /><img src={arrowRight2Png} alt="" className="pagination__arrowimage" /></picture>
            </button>}
        </div>
    );
};
Paginator.propTypes = {
    portionNumber: PropTypes.number.isRequired,
    setPortionNumber: PropTypes.func.isRequired,
    nextPortionPageNumber: PropTypes.number.isRequired,
    prevPortionPageNumber: PropTypes.number.isRequired,
    skip: PropTypes.number.isRequired,
    pages: PropTypes.array.isRequired,
    setPage: PropTypes.func.isRequired,
    portionCount: PropTypes.number.isRequired
};

export default Paginator;