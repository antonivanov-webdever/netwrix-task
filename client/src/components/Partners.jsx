import React from "react";
import distributor from "../images/distributor.png";

const Partners = () => {
	return (
		<section className="partners">
			<div className="container">
				<ul className="partners-list">
					<li className="partners-item">
						<div className="partners-item__logo">
							<img src={distributor} alt="" className="partners-item__img" />
						</div>
						<div className="partners-item__info">
							<h2 className="partners-item__name">Tango Technology</h2>
							<address className="partners-item__address">
								Sydney, Level 7, 171 Clarence Street
							</address>
						</div>
						<div className="partners-item__contacts">
							<a href="https://google.com/" className="partners-item__link">
								Website
							</a>
							<span className="partners-item__phone">+61 2 8001 0250</span>
						</div>
						<div className="partners-item__devider"></div>
						<div className="partners-item__type">Distributor</div>
					</li>
					<li className="partners-item">
						<div className="partners-item__logo">
							<img src={distributor} alt="" className="partners-item__img" />
						</div>
						<div className="partners-item__info">
							<h2 className="partners-item__name">Tango Technology</h2>
							<address className="partners-item__address">
								Sydney, Level 7, 171 Clarence Street
							</address>
						</div>
						<div className="partners-item__contacts">
							<a href="https://google.com/" className="partners-item__link">
								Website
							</a>
							<span className="partners-item__phone">+61 2 8001 0250</span>
						</div>
						<div className="partners-item__devider"></div>
						<div className="partners-item__type">Distributor</div>
					</li>
				</ul>
			</div>
		</section>
	);
};

export default Partners;
