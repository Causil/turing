import styled from "styled-components";

export const Container = styled.div`
    position:         relative;
    width:            80%;
    height:           10%;
    max-height:       4em;
    display:          flex;
    justify-content:  center;
    align-items:      center;
    //outline:        2px solid blue;
`;


export const WraperSearch = styled.div`
    width:           40%;
    height:          100%;
    display:         flex;
    justify-content: space-between;
    align-items:     center;
    //outline:       2px solid blue;
    position:        relative;
    padding :        0 2% 0 2%;
    background:      #FFFFFF;
    box-shadow:      0px 1px 8px rgba(1, 82, 138, 0.1);
    border-radius:   8px;
`
export const Input = styled.input`
    width:           90%;
    height:          100%;
    position:    relative;
    font-style:  normal;
    font-weight: 700;
    font-size:   20px;
    color:       #000000;
    outline:     none;
    border:      none;
`;


export const Img = styled.img`
    object-fill: cover;
    cursor:      pointer;
    //outline:     2px solid blue;
`