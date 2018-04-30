import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.css';
script(src='components/jquery/dist/jquery.min.js') 
script(src='components/bootstrap/dist/js/bootstrap.min.js')

window.jQuery = window.$ = require('jquery/dist/jquery.min.js');

const Nav = () => (

	<Bar className="navbar navbar-expand-lg navbar-dark">

		<Logo className="navbar-brand" to="/" href="http://monkeybitemusic.com/"> MONKEYBITE </Logo>

		<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
			<span className="navbar-toggler-icon" />
		</button>
		<div className="collapse navbar-collapse" id="navbarNavAltMarkup">
			<div className="navbar-nav">
				<NavBarLink className="nav-item nav-link" to="/gigs" href="http://monkeybitemusic.com/gigs"> GIGS </NavBarLink>

				<NavBarLink className="nav-item nav-link" to="/music" href="http://monkeybitemusic.com/music"> MUSIC </NavBarLink>
				<NavBarLink className="nav-item nav-link" to="/contact" href="http://monkeybitemusic.com/contact"> CONTACT </NavBarLink>
			</div>
		</div>
	</Bar>
);

export default Nav;

const Bar = styled.div`

	background: rgba(7,3,41, 0.9);
`;

const NavBarLink = styled(Link)`
	color: white !important;
	font-size: 30px
	text-align: bottom;
	

`;

const Logo = NavBarLink.extend`
	font-size: 50px
`;
