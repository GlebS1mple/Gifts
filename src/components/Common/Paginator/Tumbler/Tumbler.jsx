import React from 'react';
import { PropTypes } from 'prop-types';

const Tumbler = ({ number, onClick, name }) => {
    return (
        <button className={name} onClick={onClick}>{number}</button>
    );
};
Tumbler.propTypes = {
    name: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
    number: PropTypes.number.isRequired,
}
//pagination__tumbler_type_active
export default Tumbler;