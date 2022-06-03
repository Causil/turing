import styled from "styled-components";

export const Container = styled.div`
    width:          100%;
    max-width:      1400px;
    height:         100vh;
    display:        flex;
    flex-direction: column;
    gap:            2em;
    padding:        2% 0% 0 2%;
`;

export const H3 = styled.h3`
font-style:  normal;
font-weight: 700;
font-size:   20px;
line-height: 14px;
color:       #202026;
//outline:2px solid blue;
padding: 0 0 0 2%;
`;
export const Paragraph = styled.p`
font-style:  normal;
font-weight: 400;
font-size:   20px;
line-height: 14px;
color:       #000000;
@media screen and (max-width: 960px) {
    width:                 100%;
    max-width:             800px;
    line-height: 25px;
    //outline:               2px solid blue;
    grid-template-columns: repeat(1, 1fr);
}
`;


export const ContainerTestCard = styled.div`
    width:                 100%;
    max-width:             1400px;
    height:                100vh;
    display:               grid;
    grid-template-columns: repeat(3, 1fr);
    @media screen and (max-width: 960px) {
        width:     100%;
        max-width:             800px;
        //outline:2px solid blue;
        grid-template-columns: repeat(1, 1fr);
    }
`;