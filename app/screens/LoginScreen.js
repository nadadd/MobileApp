import React, { useContext, useState } from 'react';
import { Image, StyleSheet } from 'react-native';
import * as Yup from 'yup';
import Screen  from '../components/Screen';
import { ErrorMsg ,AppForm, SubmitButton, AppFormField} from '../components/Form';
import authApi from '../api/auth';
import jwtDecode from 'jwt-decode';
import AuthContext from '../auth/context';



const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
})

function LoginScreen(props) {
  const authContext  = useContext(AuthContext);
  const [loginFailed, setLoginFailed] = useState(false);

  const handleSubmit = async({email, password}) => {
   const result = await authApi.login(email, password);
   if(!result.ok) return setLoginFailed(true) ;
   setLoginFailed(false);
   const user = jwtDecode(result.data);
   authContext.setUser(user);
  }

  return (
    <Screen>
      <Image style={loginStyles.logo} source={require("../assets/user.png")} />
     <AppForm
       initialValues={{email: '', password:''}}
       onSubmit={handleSubmit}
       validationSchema={validationSchema}>
    <ErrorMsg error='Invalid email and/or password' visible={loginFailed} />

<AppFormField
    autoCapitalize="none"
    autoCorrect={false}
    name="email"
    keyboardType="email-address"
    textContentType="emailAddress"
    icon="email"
    placeholder="Email" />


<AppFormField
     autoCapitalize="none"
     autoCorrect={false}
     name="password"
     icon="lock"
     placeholder='password'
     textContentType='password'
     secureTextEntry/>

         <SubmitButton title={login} />
     </AppForm>
    </Screen>
  );
}

const loginStyles = StyleSheet.create({
  logo:{
    width: 80,
    height: 80,
    alignSelf: 'center',
    marginTop: 50,
    marginBottom:20,
  },
})

export default LoginScreen;
