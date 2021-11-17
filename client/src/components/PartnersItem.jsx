import React from 'react';

const PartnersItem = ({ partner }) => {
    return (
        <li className="partners-item">
            <div className="partners-item__logo">
                <img src={partner.logo} alt="" className="partners-item__img" />
            </div>
            <div className="partners-item__info">
                <h2 className="partners-item__name">{ partner.company }</h2>
                <address className="partners-item__address">
                    { partner.address }
                </address>
            </div>
            <div className="partners-item__contacts">
                <a href={ partner.website } className="partners-item__link">
                    Website
                </a>
                <span className="partners-item__phone">{ partner.phone }</span>
            </div>
            <div className="partners-item__divider"></div>
            <div className="partners-item__type">{ partner.status }</div>
        </li>
    );
};

export default PartnersItem;