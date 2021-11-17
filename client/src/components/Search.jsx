import React, {useEffect, useState} from "react";
import searchIcon from "../images/search-ico.svg";

const Search = ({ type, setType }) => {
	const [placeholder, setPlaceholder] = useState('');

	const changePlaceholderText = (breakpoint) => {
		if (breakpoint.matches) {
			setPlaceholder('Search');
		} else {
			setPlaceholder('Search by company name or address..');
		}
	}

	const checkBreakpoint = () => {
		const breakpoint = window.matchMedia('(max-width: 747px)');

		changePlaceholderText(breakpoint);

		if (breakpoint.addEventListener) {
			breakpoint.addEventListener('change', changePlaceholderText);
		} else {
			breakpoint.addListener(changePlaceholderText);
		}
	}

	useEffect(() => {
		checkBreakpoint()
	}, [])

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
								placeholder={placeholder}
							/>
							<button type="submit" className="search__button">
								<img src={searchIcon} alt="" />
							</button>
						</form>
						<div className="search-selects">
							<div className="search-selects__item search-selects__item--single">
								<select value={type} onChange={(event) => {setType(event.target.value)}} name="type">
									<option value="Type">Type</option>
									<option value="MSP Partner">MSP Partner</option>
									<option value="Preferred Partner">Preferred Partner</option>
									<option value="Premium Partner">Premium Partner</option>
									<option value="Elite Partner">Elite Partner</option>
									<option value="Distributor">Distributor</option>
								</select>
							</div>
							<div className="search-selects__group">
								<div className="search-selects__item">
									<select name="country">
										<option value="msp">Country</option>
									</select>
								</div>
								<div className="search-selects__item">
									<select name="state">
										<option value="msp">State</option>
									</select>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Search;
