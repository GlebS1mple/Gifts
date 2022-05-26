import React, { useMemo } from 'react';
import "../AboutSearch/AboutSearch.scss";
import AboutProductLink from './AboutProductLink/AboutProductLink';
import { PropTypes } from 'prop-types';


const AboutSearch = ({ searchedProducts, className, setProductActive }) => {
    const memoSearchedProducts = useMemo(() =>
        searchedProducts.map(product =>
            <AboutProductLink
                key={product.id}
                img={product.thumbnail}
                title={product.title}
                price={product.price}
                brand={product.brand}
                onClick={() => setProductActive(true,
                    product.id,
                    product.title,
                    product.price,
                    product.brand,
                    product.description,
                    product.thumbnail,
                    1,
                    product.price,
                    product.images)}
            />
        ), [searchedProducts]);
    return (
        <ul className={className}>
            {memoSearchedProducts}
        </ul>
    );
};

AboutSearch.propTypes = {
    className: PropTypes.string.isRequired,
    searchedProducts: PropTypes.array.isRequired,
    setProductActive: PropTypes.func.isRequired
}


export default React.memo(AboutSearch);