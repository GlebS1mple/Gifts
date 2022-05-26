import React from 'react';

const CatalogLink = ({ text, onClick, name }) => {
    return (
        <li onClick={onClick} className={name}>{text}</li>
    );
};

export default React.memo(CatalogLink);