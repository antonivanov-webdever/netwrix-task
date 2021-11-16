import React from "react";
import logo from "../images/logo.png";

const Header = () => {
	return (
		<header className="header">
			<div className="header__wrapper">
				<div className="header__brand">
					<a href="/">
						<img src={logo} alt="NETWRIX" className="header__logo" />
					</a>
				</div>
			</div>
		</header>
	);
};

export default Header;
