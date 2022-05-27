import styled from 'styled-components';
import { HashLink as Link } from 'react-router-hash-link';


export const Nav = styled.nav`
transition:                             all ease 0.3s;
box-shadow: ${({ navbarColor, bg }) =>
  navbarColor || bg ? '0px 0px 12px rgba(0, 0, 0, 0.25)' : ''};
background: ${({ mobile, navbarColor, bg }) =>
  mobile || navbarColor || bg ? 'white' : 'transparent'};
font-family:     'Roboto' sans-serif;
font-weight:     300;
width:           100%;
height:          15vh;
display:         flex;
justify-content: center;
align-items:     center;
font-size:       16px;
position:        sticky;
top:             0;
z-index:         999;
//outline:       2px solid blue;
@media screen and (max-width: 960px) {
    width:     100%;
    min-width: 320px;
    padding:   0 0% 0 0;
    //outline: 2px solid blue;
}
`

export const NavbarContainer = styled.div`
    display:         flex;
    justify-content: space-between;
    align-items:     center;
    height:          100%;
    width:           100%;
    max-width:       1700px;
    padding:         0 0% 0 0%;
    //outline: 2px solid black;
    @media screen and (max-width: 960px) {
        width:           100%;
        display:         flex;
        justify-content: center;
        padding:         0 2% 0 0;
    }
`

export const NavLogo = styled.a`
    height:          100%;
    width:           400px;
    display:         flex;
    justify-content: center;
    align-items:     center;
    max-width:       450px;
    //outline: 2px solid blue;
    text-decoration: none !important;
    @media screen and (max-width: 960px) {
        min-width: 110px;
        width:     120px;

    }
`;

export const Logo = styled.img`
    height: 60%;
    max-height: 50px;
    width:  40%;
    max-widht: 93px;
    cursor:pointer;
    //outline: 2px solid blue;
    @media screen and (max-width: 960px) {
        width: 100%;
        height: 73px;
    }
`;
export const Line = styled.div`
    display:   ${({mobile})=> mobile ? "none" :""};
    width:      1px;
    height:     50%;
    background: #132F66;
    margin:     0 6% 0 0;
    border:     1px solid #000066;
`;

export const NavLinksLogo = styled.p`
text-decoration: none;
display:   ${({mobile})=> mobile ? "none" :""};
color: ${({ color })=> (color ? color: 'black')};
font-family: Roboto;
font-style:  normal;
font-weight: bold;
font-size:   28px;
line-height: 33px;
width:       212px;
`;

export const NavMenu = styled.div`
    //list-style: none;
    display:    flex;
    max-width:  400px;
    margin:   0 8em 0 0;
    //outline: 2px solid blue;
    justify-content: ${({justifyContent})=>(justifyContent? justifyContent: "")};
    width:      ${({ width })=> (width ? width: 'auto')};
`;

export const NavItemBtn = styled.div`
//outline: 2px solid blue;
display:         flex;
justify-content: center;
align-items:     center;
width:      ${({ width })=> width ? width: '10em'};
@media screen and (max-width: 960px) {
    width:           210px;
    height:          73px;
    display:         flex;
    justify-content: center;
    align-items:     center;
}
`;
export const NavLinks = styled(Link)`
color: ${({ color })=> color ? color: '#1B0E38'};
text-decoration:none;
font-size:   20px;
line-height: 24px;
font-style:  normal;
&:hover{
    color: #4A05ED;
};
font-weight: 700;
@media screen and (max-width: 960px) {
    width:       100px;
    height:      30%;
    font-style:  normal;
    font-weight: 500;
    font-size:   16px;
    line-height: 24px;
}
`;

export const Slash = styled.p`
    width: ${({ width })=> (width ? width: '4px')};
    height: ${({ height })=> (height ? height: '30%')};
    color: #666666;
    font-size: 16px;
    font-weight: 500;
    line-height: ${({ lineHeight })=> (lineHeight ? lineHeight: '24px')};
    margin:0 4px 0 4px;
    cursor:pointer;
    @media screen and (max-width: 960px) {
        width: 4px;
        margin:"0 2px 0 1px";
        height: 30%;
        font-family: Oswald;
        font-style: normal;
        font-weight: normal;
        font-size: 13px;
        line-height: 24px;
    }
`;
