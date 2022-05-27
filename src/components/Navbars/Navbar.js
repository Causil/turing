import React, {memo} from 'react';
import {
    Nav,
    NavbarContainer,
    NavLogo,
    Logo,
    NavMenu,
    NavItemBtn,
    NavLinks
} from './NavbarElements';
import navbars from '../../data/navbar';
//import useWindowDimensions from '../../hooks/useWindowDimensions';
const Navbar = ({navbutton}) => {
//const {mobile} = useWindowDimensions();
return (
    <Nav> 
        <NavbarContainer>
            <NavLogo>
                <Logo src='/image/logoNavbar.svg'/>
            </NavLogo>
            <NavMenu >
                { navbutton &&
                Object.values(navbars).map( (item,i) => 
                    <NavItemBtn key={`navbar${i}`}>
                        <NavLinks to = {item[1]} color='#1B0E38;'>
                            {item[0]}
                        </NavLinks>
                    </NavItemBtn>
                )
                }
            </NavMenu>
        </NavbarContainer>
    </Nav>
)
};

export default memo(Navbar);