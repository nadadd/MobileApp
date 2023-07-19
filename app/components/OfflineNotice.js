import React from 'react';
import { View, StyleSheet } from 'react-native';
import AppText from './AppText/AppText';
import colors from '../config/colors';
import { useNetInfo } from '@react-native-community/netinfo';
import Constants from 'expo-constants';



function OfflineNotice(props) {

   const netInfo = useNetInfo();

  if(netInfo.type !=="unknown" && !netInfo.isInternetReachable === false)

  return (
     <View style={styles.container}>
        <AppText style={styles.text}>No internet Connexion</AppText>
     </View>
     );

     return null;
    }




const styles = StyleSheet.create({
 container: {
  alignItems: 'center',
  backgroundColor: colors.primary,
  height: 50,
  justifyContent: "center",
  top: Constants.statusBarHeight || 0 ,
  position: "absolute",
  width: "100%" ,
  zIndex: 1,
  },
  text: {
   color: colors.white,
  },
 })

export default OfflineNotice;
