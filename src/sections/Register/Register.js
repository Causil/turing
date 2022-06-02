import React from 'react';
import { Container,WraperForm } from './RegisterElements';
import FormLoginRegister from '../../components/FormLoginRegister/FormLoginRegister';
import textLogin from '../../data/register';
const Register = ({setNavbutton}) => {
   const loginBool = false;
   setNavbutton(false)
return (
 <Container>
    <WraperForm>
      <FormLoginRegister dataText={textLogin} loginBool={loginBool} />
    </WraperForm>
 </Container>
)
};

export default Register