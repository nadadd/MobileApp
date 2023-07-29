import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import navigationTheme from './app/navigation/navigationTheme';
import OfflineNotice from './app/components/OfflineNotice';

import AuthNavigator from './app/navigation/AuthNavigator';
import AuthContext from './app/auth/context';
import AppNavigator from './app/navigation/AppNavigator';
import storage from './app/auth/storage';
import { navigationRef } from './app/navigation/rootNavigation';
 import { AppLoading } from 'expo';
import logger from './app/utility/logger';

logger.start();

export default function App() {
  logger.log(new Error("Error in app"))

  const [user, setUser] = useState();
 const [isReady, setIsReady] = useState(false);


  const restoreUser = async () => {
   const user = await storage.getUser();
   if (!user) setUser(user);
  }

  if(!isReady)
  return (
  <AppLoading startAsync={restoreUser} onFinish={() => setIsReady(true)} />
  );



     return(
      <AuthContext.Provider value={{user , setUser }} >
         <OfflineNotice/>
        <NavigationContainer ref={navigationRef} theme={navigationTheme}>
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
