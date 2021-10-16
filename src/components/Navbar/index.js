import React from 'react';
import {
Nav,
NavLink,
Bars,
NavMenu,
NavBtn,
NavBtnLink,
} from './NavbarElements';

const Navbar = () => {
return (
	<>
	<Nav>
		<Bars />

		<NavMenu>
		<NavLink to='/' >
			Home
		</NavLink>
		<NavLink to='/createaccount' >
			Create Account
		</NavLink>
		<NavLink to='/Store' >
			Store
		</NavLink>
		</NavMenu>
		<NavBtn>
		<NavBtnLink to='/login'>Log In</NavBtnLink>
		</NavBtn>
	</Nav>
	</>
);
};

export default Navbar;
