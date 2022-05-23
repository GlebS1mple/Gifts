import React from 'react';
import "../Sponsors/sponsors.scss";
import SwiperSponsors from './SwiperSponsors/SwiperSponsors';


const Sponsors = () => {
    return (
        <div className="sponsors">
            <div className="container sponsors__container">
                <div className="sponsors__block">
                    <h1 className="sponsors__heading">С нами соотрудничают</h1>
                    <SwiperSponsors />
                </div>
            </div>
        </div>
    );
};

export default Sponsors;