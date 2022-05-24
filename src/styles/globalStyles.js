import styled, { createGlobalStyle } from 'styled-components';
import { Link } from 'react-router-dom';

const GlobalStyle = createGlobalStyle`
*{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    //font-family: 'Source Sans Pro', sans-serif;
    font-family ‘Inter’, sans-serif;
    scroll-behavior: smooth;
}
`;

export const Button = styled(Link)`
  width: 100%;
  height: 48px;
  padding: 8px 1rem;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ outlined }) => (outlined ? 'white' : '#FF7139')};
  background-color: ${({ outlined }) => (outlined ? 'transparent' : 'white')};
  border: ${({ outlined }) => (outlined ? '2px solid white' : '')};
  border-radius: 50px;
  text-decoration: none;
`;

export const Headline = styled.h2`
  font-family: Oswald;
  font-style: normal;
  font-weight: bold;
  line-height: 44px;
  text-align: ${({textAlign})=> textAlign? textAlign : "center"};
  font-size:  ${({fontSize})=>  fontSize ? fontSize : "30px"};
  color: ${({color})=>  color ? color : "#00395B"};
  position: relative;
  width: ${({width})=>  width ? width : ""};
  @media screen and (max-width: 960px) {
    font-size: 24px !important;
    text-align: left;
    line-height: 36px;
  }
`;

export const TextLine = styled.p`
  width: ${({width})=>  width ? width : ""};
  font-family: Ubuntu;
  font-style: normal;
  text-align: justify;
  font-weight: ${({fontWeight})=> fontWeight? fontWeight : "normal"};
  font-size: 16px;
  line-height: 26px;
  color: ${({color})=>  color ? color : "#666666"};
  @media screen and (max-width: 960px) {
    font-size:  16px !important;
  }
`;

export const WraperForm = styled.div`
  width:           100%;
  height:          auto;
  display:         flex;
  flex-direction:  column;
  gap:             0.3rem;
`;

export const Labelform = styled.label`
  font-family: Ubuntu;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 24px;
  display: flex;
  align-items: center;
  color: #09101D;
  opacity: 0.8;
`;

export const Inputform = styled.input`
  background:     #FFFFFF;
  border:         1px solid #858C94;
  box-sizing:     border-box;
  border-radius:  2px;
  width:          100%;
  height:         48px;
  padding:        0 0 0 3%;
  outline:        none;
`;

export const Labelsubform = styled.label`
  font-family: Ubuntu;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 20px;
  display: flex;
  align-items: center;
  color: #09101D;
  opacity: 0.6;
`;
export const  WraperLine = styled.div`
    width:        100%;
    display:      flex;
    height:       auto;
    justify-content:center;
    align-items:  center;
    flex-wrap:    wrap;
`;

export const Lineregister = styled.div`
    width:     ${({width})=> width? width : "50%"};
    height:    ${({height})=> height? height : "1px"};
    background:${({background})=> background? background : "#00395B"};
    @media screen and (max-width: 960px) {
      width:   ${({width})=> width? width : "50%"};
    }
`;
export const WraperButton = styled.div`
    width:            100%;
    display:          flex;
    justify-content:  center;
    align-items:      center;
    flex-direction:   column;
    gap:              1rem;
`;
export const ButtonRegister = styled(Link)`
    width:     ${({width})=> width? width : "224px"};
    height:     40px;
    display:    flex;
    align-items: center;
    justify-content: center;
    background: #1CBBB4;
    font-size:  ${({fontSize})=>  fontSize ? fontSize : "16px"};
    outline:    none;
    border:     none;
    color:      white;
    cursor:     pointer;
    text-decoration: none;
    border-radius: 2px;
`;


export const Linkregister = styled(Link)`
  font-family: Oswald;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 36px;
  color: #00395B;
`;

export default GlobalStyle;
