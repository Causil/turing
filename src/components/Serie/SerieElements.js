import styled from "styled-components";
import { HashLink as Link } from 'react-router-hash-link';

export const Container = styled.div`
    width:           100%;
    height:          75vh;
    max-height:      32em;
    display:         flex;
    justify-content: center;
    align-items:     center;
    flex-direction:  column;
    gap:             2em;
    //outline:       2px solid blue;
    @media screen and (max-width: 960px) {
        width:     100%;
      //  outline:        2px solid blue;
    }
`;

export const WraperInfoFile = styled.div`
width:          90%;
height:         auto;
display:        flex;
align-items: center;
justify-content: space-between;
//outline:      2px solid blue;
@media screen and (max-width: 960px) {
    width:     95%;
  //  outline:        2px solid blue;
}
`;

export const WraperInfo = styled.div`
width:          50%;
height:         auto;
display:        flex;
flex-direction: column;
gap:            1em;
align-items:    center;
//outline:        2px solid blue;
@media screen and (max-width: 960px) {
    width:     90%;
    //outline:        2px solid blue;
}
`;

export const H2 = styled.h3`
width:       90%;
height:      auto;
`;

export const Paragraph = styled.label`
width:       100%;
font-style:  normal;
font-weight: 400;
font-size:   20px;
line-height: 24px;
//display:   flex;
color:       #808093;
//outline:   2px solid blue;
`;


export const Download = styled.a`
display:           flex;
justify-content:   space-between;
align-items:       center;
width:             25%;
//outline:           2px solid blue;
text-decoration:   none;
cursor:            default;
@media screen and (max-width: 960px) {
    width:          10%;
    //outline:        2px solid blue;
}
`;
export const TextFile = styled.label`
font-style: normal;
font-weight: 400;
font-size: 20px;
line-height: 14px;
color: #4000D6;
cursor: pointer;
height: 100%;
//outline: 2px solid blue;
`;
export const Img = styled.img`
//outline:           2px solid blue;
cursor: pointer;
`;

export const WraperCarrusule = styled.div`
width:   100%;
height:  auto;
//outline: 2px solid blue;
display: flex;
`;
export const  ContainerSerie = styled.div`
//outline:       2px solid blue;
width:           90%;
height:          95%;
box-shadow:      0px 3px 15px 3px rgba(36, 22, 69, 0.1);
border-radius:   12px;
cursor:          default;
`;

export const  ImgSerie = styled.img`
    //outline: 2px solid blue;
    width: 100%;
    height: 70%;
    border-radius: 12px 12px 0px 0px;
`;

export const WraperTextChapter = styled.div`
    //outline: 2px solid blue;
    width: 100%;
    height: 25%;
    padding: 0 0 0 2em; 
    display:flex;
    flex-direction:column;
    justify-content: center;
//    align-items:center;
`;

export const ButtonLink = styled(Link)`
    //background: black;
    //outline: 2px solid blue;
    text-decoration:none;
    color: #4A05ED;
`;