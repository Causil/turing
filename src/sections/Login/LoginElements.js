import styled from "styled-components";

export const Container = styled.div`
    display:          flex;
    justify-content:  center;
    //align-items:    center;
    width:            100%;
    max-width:        1300px;
    height:           85vh;
    max-height:       700px;
    //outline:          2px solid blue;
    @media screen and (max-width: 960px) {

       // outline:          2px solid black;
      }
`;

export const WraperForm = styled.div`
    width:30%;
    height:80%;
    @media screen and (max-width: 960px) {
        //outline:          2px solid black;
        width:95%;
        max-width: 500px;
        height:80%;
      }
`;