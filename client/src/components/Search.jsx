import React from "react";
import searchIcon from "../images/search-ico.svg";

const Search = () => {
	return (
		<section className="search">
			<div className="container">
				<div className="search__row">
					<h1 className="search__title">Netwrix Partner&nbsp;Locator</h1>
					<p className="search__text">
						Hundreds of Netwrix partners around the world are standing by to
						help you. <br /> With our Partner Locator you can easily find the
						list of authorized partners <span>in your area.</span>
					</p>
					<div className="search-controls">
						<form className="search__form">
							<input
								type="text"
								className="search__input"
								placeholder="Search by company name or adress.."
							/>
							<button type="submit" className="search__button">
								<img src={searchIcon} alt="" />
							</button>
						</form>
						<div className="search-selects">
							<div className="search-selects__item">
								<select name="type">
									<option value="msp">Type</option>
									<option value="msp">msp</option>
									<option value="msp">msp</option>
									<option value="msp">msp</option>
								</select>
							</div>
							<div className="search-selects__item">
								<select name="country">
									<option value="msp">Country</option>
									<option value="msp">msp</option>
									<option value="msp">msp</option>
								</select>
								<select name="state">
									<option value="msp">State</option>
									<option value="msp">msp</option>
									<option value="msp">msp</option>
								</select>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Search;
