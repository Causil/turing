import React from 'react';
import {
    Container,
    H2,
    WraperInputs,
    WraperInput,
    Img,
    Input,
    Button,
    WraperLabels,
    WraperLabel,
    Label,
    Tolink
} from './FormLoginRegisterElements';

const FormLoginRegister = ({dataText,loginBool}) => {

return(
    <Container>
        {dataText.title.map( (item,i) =>  <H2 key={`${i}a${loginBool}`}> {item} </H2> )}
        <WraperInputs>
            {dataText.input.map( (item,i) =>
            <WraperInput key={`${i}b${loginBool}`}>
                <Img   src ={dataText.input[i].logo}></Img>
                <Input type={dataText.input[i].type} placeholder={dataText.input[i].placeholder}/>
            </WraperInput>
            )} 
        </WraperInputs>
        { dataText.button.map( (item,i) =>  <Button key={`${i}b${loginBool}`} type={dataText.button[i].type}> {dataText.button[i].text} </Button>)}
        { loginBool 
        ?
        <WraperLabels >
            <WraperLabel>
                <Label fontWeight='400'> {dataText.text[0].text} <Tolink to={'/register'} fontWeight='700'> {dataText.text[1].text} </Tolink> </Label>
            </WraperLabel>
            <WraperLabel>
                <Label fontWeight='700'> {dataText.text[2].text} </Label>
            </WraperLabel>
        </WraperLabels>
        : 
        <WraperLabels >
            <WraperLabel>
                <Label fontWeight='400'> {dataText.text[0].text} <Tolink to={'/'} fontWeight='700'> {dataText.text[1].text} </Tolink> </Label>
            </WraperLabel>
        </WraperLabels>
        }
    </Container>
)
}

export default FormLoginRegister;