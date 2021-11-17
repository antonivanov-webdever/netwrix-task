import React from "react";
import PartnersItem from "./PartnersItem";
import Loader from "./Loader";

const Partners = ({ partners, isLoading }) => {

	return (
		<section className="partners">
			<div className="container">
				{isLoading ?
					<Loader />
					:
					<ul className="partners-list">
						{partners.length ?
							partners.map(partner =>
								<PartnersItem
									key={partner.id}
									partner={partner}
								/>)
							:
							<p className="partners-list__text">Your search parameters did not match any partners. Please try different search.</p>
						}
					</ul>
				}

			</div>
		</section>
	);
};

export default Partners;
