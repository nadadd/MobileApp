import React from 'react';
import { Text, StyleSheet } from 'react-native';
import * as Font from 'expo-font';


function AppText({children}) {

  return <Text style={styles.Text}>{children}</Text>;
}

const styles = StyleSheet.create({
  Text:{
    color: "tomato",
    textTransform: 'capitalize',
    fontSize: 18,
  
  }
})

export default AppText;

