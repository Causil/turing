import React from 'react';
import { Container,WraperForm } from './RegisterElements';
import FormLoginRegister from '../../components/FormLoginRegister/FormLoginRegister';
import register from '../../data/register';
const Register = () => {
   const loginBool = false;
return (
 <Container>
    <WraperForm>
      <FormLoginRegister register={register} />
    </WraperForm>
 </Container>
)
};

export default Register