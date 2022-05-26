import React from 'react';
import { Container,WraperForm } from './RegisterElements';
import FormLoginRegister from '../../components/FormLoginRegister/FormLoginRegister';
import textLogin from '../../data/register';
const Register = () => {
   const loginBool = false;
return (
 <Container>
    <WraperForm>
      <FormLoginRegister textLogin={textLogin} loginBool={loginBool} />
    </WraperForm>
 </Container>
)
};

export default Register