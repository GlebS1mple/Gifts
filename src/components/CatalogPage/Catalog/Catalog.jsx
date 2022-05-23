import React from 'react';
import "../Catalog/catalog.scss";
import filterImg from "../../../img/filter.png";
import arrowRight2Webp from '../../../img/arrow-right2.webp';
import arrowRight2Png from '../../../img/arrow-right2.png';
import Card from './Card/Card';
import MyLoader from './Loader/Loader';
import CatalogLink from './CatalogLinks/CatalogLink';
import PaginatorContainer from './../../Common/Paginator/PaginatorContainer';
import { PropTypes } from 'prop-types';


const Catalog = ({ ...props }) => {
    let { filters, setFilters, links, currentCategory, isFetching, filtered, setProductActive, products, limit, addMoreProducts, filterBy, newLoader } = props;
    return (
        <main className="main">
            <div className="container container__main">
                <div className="main__block">
                    <button onClick={() => { setFilters(!filters) }} className="main__mobilefilter mobfilter">
                        <picture><source srcSet={filterImg} type="image/png" /><img src={filterImg} alt="Фильтр" className="mobfilter__image" /></picture>
                        <h6 className={filters ? "mobfilter__title mobfilter__title_type_active" : "mobfilter__title"}>Фильтр</h6>
                    </button>
                    <ul className={filters ? "main__filter main__filter_type_active" : "main__filter"}>
                        {links.map((link) =>
                            <CatalogLink
                                key={link.id}
                                text={link.text}
                                name={link.category == currentCategory ? "main__link_type_active " : "main__link"}
                                onClick={() => filterBy(link.category)}
                                category={link.category}
                            />)}
                    </ul>
                    <div className={filters ? "main__galerey main__galerey_type_mobactive" : "main__galerey"}>
                        {isFetching ?
                            newLoader.map((ar, index) => <MyLoader key={index} />) :
                            currentCategory !== "all" && filtered.length > 0 ? filtered.map((product) =>
                                <Card key={product.id}
                                    name={product.title}
                                    price={product.price}
                                    brand={product.brand}
                                    image={product.thumbnail}
                                    images={product.images}
                                    description={product.description}
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
                                />) : products.map((product) =>
                                    <Card key={product.id}
                                        name={product.title}
                                        price={product.price}
                                        brand={product.brand}
                                        image={product.thumbnail}
                                        images={product.images}
                                        description={product.description}
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
                                )}
                    </div>
                    <div className="main__paginationblock">
                        <button className={
                            limit > filtered.length && (limit < filtered.length || currentCategory !== "all")
                                ? "main__more more_type_disabled" : "main__more more"} onClick={() => addMoreProducts()}>
                            <div className="more__text" >Показать еще</div>
                            <picture><source srcSet={arrowRight2Webp} type="image/webp" /><img src={arrowRight2Png} alt="Стрелка вниз(добавить ещё)" className="more__arrow" /></picture>
                        </button>
                        <PaginatorContainer />
                    </div>
                </div>
            </div>
        </main>
    );
};

Catalog.propTypes = {
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
};
export default Catalog;