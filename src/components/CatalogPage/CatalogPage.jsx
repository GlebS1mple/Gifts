import React from 'react';
import "./CatalogPage.scss"
import Catalog from './Catalog/Catalog';
import Opening from './Opening/Opening';
import Product from './Product/Product';
import CartContainer from './../Cart/CartContainer';
import { PropTypes } from 'prop-types';

const CatalogPage = React.memo(({ ...props }) => {
    let { activateSearch, filters, setFilters, links, currentCategory, isFetching, filtered, setProductActive, products, limit, addMoreProducts, filterBy, newLoader,
        setProductUnactive, setCartProductActive, setActive, isActive, images, name, brand, price, description, id, image, count, totalProductPrice, totalProductCount } = props;
    return (
        <div onClick={() => { activateSearch(false) }}>
            <Opening />
            <Catalog
                activateSearch={activateSearch}
                filters={filters}
                setFilters={setFilters}
                links={links}
                currentCategory={currentCategory}
                isFetching={isFetching}
                filtered={filtered}
                setProductActive={setProductActive}
                products={products}
                limit={limit}
                addMoreProducts={addMoreProducts}
                filterBy={filterBy}
                newLoader={newLoader}
                setActive={setActive}
                count={count}
                totalProductPrice={totalProductPrice}
                totalProductCount={totalProductCount}
                setCartProductActive={setCartProductActive}
            />
            <CartContainer />
            <Product
                setProductUnactive={setProductUnactive}
                setActive={setActive}
                isActive={isActive}
                images={images}
                name={name}
                brand={brand}
                price={price}
                description={description}
                id={id}
                image={image}
                count={count}
                totalProductPrice={totalProductPrice}
                totalProductCount={totalProductCount}
            />
        </div>
    );
});
// <Product isActive={productActive} />

CatalogPage.defaultProps = {
    images: [],
    name: "",
    brand: "",
    price: 0,
    description: "",
    id: 0,
    image: "",
    count: 1,
    totalProductPrice: 0,
    totalProductCount: 0,
};

CatalogPage.propTypes = {
    activateSearch: PropTypes.func.isRequired,
    filters: PropTypes.bool.isRequired,
    setFilters: PropTypes.func.isRequired,
    links: PropTypes.array.isRequired,
    currentCategory: PropTypes.string.isRequired,
    isFetching: PropTypes.bool.isRequired,
    filtered: PropTypes.array.isRequired,
    setProductActive: PropTypes.func.isRequired,
    products: PropTypes.array.isRequired,
    limit: PropTypes.number.isRequired,
    addMoreProducts: PropTypes.func.isRequired,
    filterBy: PropTypes.func.isRequired,
    newLoader: PropTypes.array.isRequired,
    setProductUnactive: PropTypes.func.isRequired,
    setActive: PropTypes.func.isRequired,
    isActive: PropTypes.bool.isRequired,
    images: PropTypes.array.isRequired,
    name: PropTypes.string,
    brand: PropTypes.string,
    price: PropTypes.number,
    description: PropTypes.string,
    id: PropTypes.number,
    image: PropTypes.string,
    count: PropTypes.number,
    totalProductPrice: PropTypes.number.isRequired,
    totalProductCount: PropTypes.number.isRequired,
};



export default React.memo(CatalogPage);