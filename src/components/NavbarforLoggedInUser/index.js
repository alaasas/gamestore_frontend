import React from 'react';
import {
Nav,
NavLink,
Bars,
NavMenu,
NavBtn,
NavBtnLink,
} from './NavbarElements';

const NavbarforLoggedInUser = () => {
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
		<NavLink to='/' >
			Hi User!
		</NavLink>
		</NavMenu>
		<NavBtn>
		<NavBtnLink to='/' >Log Out</NavBtnLink>
		</NavBtn>
	</Nav>
	</>
);
};

export default NavbarforLoggedInUser;
