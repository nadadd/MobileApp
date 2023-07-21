import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import navigationTheme from './app/navigation/navigationTheme';
import OfflineNotice from './app/components/OfflineNotice';

import AuthNavigator from './app/navigation/AuthNavigator';
import AuthContext from './app/auth/context';
import AppNavigator from './app/navigation/AppNavigator';
import storage from './app/auth/storage';

import jwtDecode from 'jwt-decode';



export default function App() {
  const [user, setUser] = useState();

  const restoreToken = async () => {
   const token = await storage.getToken();
   if (!token) return;
   setUser(jwtDecode(token));

  }

  useEffect(() => {
    restoreToken();
  }, []);


     return(
      <AuthContext.Provider value={{user , setUser }} >
         <OfflineNotice/>
        <NavigationContainer theme={navigationTheme}>
             { user ? <AppNavigator/> : <AuthNavigator/>}
        </NavigationContainer>
        </AuthContext.Provider>
     );
}










//   ImagePicker.requestCameraPermissionsAsync().then((res) => console.log(res)).catch((err) => console.log('error: ',error) ).finally(() => console.log("fibally here "));
// const key = "hello"
// obj = {
// granted: true, hello: "world!", hey: "you"
// }

// obj.granted
// obj[key] //world!
// obj["granted"] // true
// const {hey} = obj
