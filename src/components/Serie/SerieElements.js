import styled from "styled-components";

export const Container = styled.div`
    width:         100%;
    height:        80%;
    display:       flex;
    justify-content: center;
    align-items: center;
    flex-direction:column;
    outline:       2px solid blue;
`;

export const WraperInfoFile = styled.div`
width:          90%;
height:         auto;
display:        flex;
align-items: center;
justify-content: space-between;
//outline:      2px solid blue;
`;

export const WraperInfo = styled.div`
width:          50%;
height:         auto;
display:        flex;
flex-direction: column;
gap:            1em;
align-items:    center;
//outline:        2px solid blue;
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
`;
export const TextFile = styled.label`
font-style: normal;
font-weight: 400;
font-size: 20px;
line-height: 14px;
color: #4000D6;
cursor: pointer;
height: 100%;
//outline:           2px solid blue;
`;
export const Img = styled.img`
//outline:           2px solid blue;
cursor: pointer;
`;

export const WraperCarrusule = styled.div`
width:   100%;
height:  auto;
outline: 2px solid blue;
display: flex;
`;
export const  ContainerSerie = styled.div`
outline: 2px solid blue;
width: 50%;
`;

export const  Video = styled.video`
outline: 2px solid blue;
width: 100%;
height: 50%;
`;
