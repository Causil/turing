import styled from "styled-components";

export const Container = styled.div`
    display:          flex;
    justify-content:  center;
    width:            100%;
    //border:           2px solid blue;
    height:           85vh;
`;

export const WraperForm = styled.div`
    width:30%;
    height:100%;
    max-height:  700px;
    //outline:2px solid blue;
    @media screen and (max-width: 960px) {
        //outline:          2px solid black;
        width:95%;
        max-width: 500px;
        height:80%;
        
      }
`;