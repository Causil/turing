import React, {memo} from 'react';
import {
    Nav,
    NavbarContainer,
    NavLogo,
    Logo,
    NavMenu,
    NavItemBtn,
    NavLinks,
    NavLinksLogo,
} from './NavbarElements';
import navbars from '../../data/navbar';
import useWindowDimensions from '../../hooks/useWindowDimensions';
//import useWindowDimensions from '../../hooks/useWindowDimensions';
const Navbar = ({navbutton}) => {
//const {mobile} = useWindowDimensions();
const {navbarColor} = useWindowDimensions();
return (
    <Nav  navbarColor={navbarColor}> 
        <NavbarContainer>
            <NavLogo>
                <Logo src='/image/logoNavbar.svg'/>
            </NavLogo>
            {navbutton && (
            <NavMenu >   
                {Object.values(navbars).map( (item,i) => 
                    <NavItemBtn key={`navbar${i}`}>
                        <NavLinks to={`${item[1]}`}  >
                            {item[0]}
                        </NavLinks>
                    </NavItemBtn>
                                )
                }
            </NavMenu>
            )
            }
        </NavbarContainer>
    </Nav>
)
};

export default Navbar;