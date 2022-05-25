import styled from "styled-components";
import { Link } from 'react-router-dom';

export const Container = styled.div`
    width:100%;
    height:100%;
    display:flex;
    flex-direction:column;
    justify-content: center;
    align-items: center;
    //outline:2px solid black;
    gap: 2.3em;
`;

export const H2 = styled.h2`
    width:    100%;
    height:   5%;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 26px;
    line-height: 14px;
    color: #1B0E38;
    //outline:2px solid black;
    text-align:center;
`;

export const WraperInputs  = styled.div`
    width:100%;
    height:30%;
    display:flex;
    flex-direction: column;
    //outline:2px solid black;
    gap:1em;
`

export const WraperInput = styled.div`
    width:    100%;
    height:   40%;
    padding:  0 0 0 2%;
    display:flex;
    justify-content: center;
    align-items:center;
    background: #FFFFFF;
    box-shadow: 0px 3px 15px 3px rgba(36, 22, 69, 0.1);
    border-radius: 8px;
    &:hover {
        outline:2px solid #4000D6;
        color:#202026;
    }
`;

export const Img = styled.img`
    width:    5%;
    height:   40%;
    //outline:2px solid blue;
`;


export const Input = styled.input`
    width:    90%;
    height:   95%;
    border:   none;
    outline:  none;
    color:    #808093;
    font-size: 16px;
    padding:  0 0 0 2%;
    &:hover {
     //   outline:2px solid #4000D6;
        color:#202026;
    }


`;

export const Button = styled.button`
    width:         90%;
    height:        10%;
    background:    linear-gradient(180deg, #4A05ED 0%, #4000D6 100%);
    border-radius: 16px;
    border:        none;
    outline:       none;
    cursor:        pointer;
    font-style:    normal;
    font-weight:   700;
    font-size:     16px;
    color:         #FFFFFF;
    //outline:2px solid blue;
`;

export const WraperLabels = styled.div`
    width:100%;
    height:auto;
    display:flex;
    flex-direction:column;
    justify-content:center;
    margin:   -5% 0 0 0;
    gap:1em;
    //outline:2px solid blue;
`;

export const WraperLabel = styled.div`
    width:100%;
    height:auto;
    display:flex;
    justify-content:center;
    //outline:2px solid blue;
    text-decoration:none;
`;

export const Label = styled.label`
    width:        100%;
    height:       10%;
    text-align:center;
    font-family:  'Roboto';
    font-style:   normal;
    font-weight:  ${({ fontWeight }) => (fontWeight ? fontWeight : 400)};
    font-size:    16px;
    color: #1B0E38;
`;

export const Tolink = styled(Link)`
text-decoration:none;   
font-weight:  ${({ fontWeight }) => (fontWeight ? fontWeight : 400)};
color: #1B0E38;
`