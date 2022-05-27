import React from 'react';
import { 
   Container,
   WraperForm
} from './LoginElements';
import FormLoginRegister from '../../components/FormLoginRegister/FormLoginRegister';
import textLogin from '../../data/login';
import useAuth   from '../../hooks/auth/useAuth';
import { useForm } from '../../hooks/formAuth/useForm';
import { validationsFormLogin } from '../../services/validationFormAuth/validationForm';
const loginInfo = {
   identifier:'',
   password:'',
   remember:false,
};

const Login = ({setNavbutton}) => {
  const { login, loginState } = useAuth();
  const {
    form,
    errors,
    loading,
    response,
    handleSubmit,
    handleChange,
    handleBlur,
    handle
} = useForm(loginInfo,validationsFormLogin,login);

const loginBool = true;
setNavbutton(false)
return (
 <Container>
    <WraperForm>
      <FormLoginRegister
         handleSubmit={handleSubmit}
         handleChange={handleChange}
         handleBlur={handleBlur}
         errors={errors}
         form={form}
         dataText={textLogin}
         loginBool={loginBool} 
      />
    </WraperForm>
 </Container>
)
};

export default Login