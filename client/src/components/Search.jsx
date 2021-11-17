import React, {useEffect, useState} from "react";
import { Select } from 'antd'
import searchIcon from "../images/search-ico.svg";

const Search = ({ type, setType }) => {
	const [placeholder, setPlaceholder] = useState('');
	const { Option } = Select;

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
								<Select className="select" showArrow={false} defaultValue="Type" onChange={(value) => {setType(value)}}>
									<Option value="Type">Type</Option>
									<Option value="MSP Partner">MSP Partner</Option>
									<Option value="Preferred Partner">Preferred Partner</Option>
									<Option value="Premium Partner">Premium Partner</Option>
									<Option value="Elite Partner">Elite Partner</Option>
									<Option value="Distributor">Distributor</Option>
								</Select>
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
