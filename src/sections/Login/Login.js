import React from 'react';
import { 
   Container,
   WraperForm
} from './LoginElements';
import FormLoginRegister from '../../components/FormLoginRegister/FormLoginRegister';
import textLogin from '../../data/login';
const Login = () => {
const loginBool = true;
return (
 <Container>
    <WraperForm>
      <FormLoginRegister dataText={textLogin} loginBool={loginBool} />
    </WraperForm>
 </Container>
)
};

export default Login