import React from 'react';
import { Image, ImageBackground , StyleSheet, Text, View} from 'react-native';
import AppButton from '../components/AppText/AppButton';
import colors from '../config/colors';

function WelcomeScreen({ navigation }) {
  return (
     <ImageBackground
     blurRadius={10}
     style={styles.background}
     source={require("../assets/bureau.jpg")}>
       <View style={styles.logoContainer}>
          <Image style={styles.logo}
          source={require("../assets/favicon.png")}/>
          <Text style={styles.tagline}>Sell what you don't need</Text>
       </View>
         <View style={styles.buttonsContainer }>
           <AppButton title="Login" onPress={() => navigation.navigate("LoginScreen", {})} />
           <AppButton title="Register" color='secondary' onPress={() => navigation.navigate("LoginScreen")} />
           </View>
     </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex:1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  logoContainer:{
    position:"absolute",
    top:70,
    alignItems: "center",
     },
     tagline:{
      fontSize: 25,
      fontWeight: "600",
      paddingVertical: 20,
      color: colors.white,
      },
  buttonsContainer:{
    padding:20,
    width: "100%",
    },

   logo:{
    width: 100,
    height:100,
   },
})

export default WelcomeScreen;
