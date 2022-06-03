import styled from "styled-components";


export const Container = styled.div`
    width: 100%;
    max-width:  400px;
    height: 15vh;
    display:flex;
    justify-content: center;
    align-items: center;
    gap: 1em;
    //outline:2px solid blue;
    background: #FFFFFF;
    box-shadow: 0px 3px 15px 3px rgba(36, 22, 69, 0.1);
    border-radius: 16px;
    padding: 0 1% 0 0.5%;
`;

export const Img = styled.img`
width:         20%;
height:        80%;
max-height:    120px;
border-radius: 18px;
//outline:2px solid blue;
`;
export const WraperInfoButton = styled.div`
width:  70%;
height: 80%;
display: flex;
flex-direction: column;
gap:0.2em;
//outline:2px solid blue;
`;
export const H3 = styled.h3`
font-style:  normal;
font-weight: 700;
font-size:   14px;
line-height: 14px;
color:       #202026;
//outline:2px solid blue;
`;
export const WraperInfo = styled.div`
width:  100%;
height: 40%;
//outline:2px solid blue;
`;



export const Paragraph = styled.p`
font-style:  normal;
font-weight: 400;
font-size:   12px;
line-height: 14px;
color:       #808093;
`;

// export const WraperButton = styled.div`

// `;

export const Button = styled.button`
    width:             60%;
    height:            40%;
    max-height:        40px;
    display:           flex;
    justify-content:   center;
    align-items:       center;
    gap:               2em;
    font-style:        normal;
    font-weight:       700;
    font-size:         12px;
    line-height:       18px;
    background:        linear-gradient(180deg, #4A05ED 0%, #4000D6 100%);
    border-radius:     8px;
    box-shadow:        none;
    color:             #FFFFFF;
    outline:           none;
    border:             none;
    cursor:            pointer;
`;
