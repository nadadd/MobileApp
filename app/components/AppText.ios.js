import React from 'react';
import { Text, StyleSheet } from 'react-native';

function AppText({children}) {
  return  <Text style={styles.Text}>{children}</Text>
}


const styles = StyleSheet.create({
  Text:{
    color: "tomato",
    textTransform: 'capitalize',
    fontSize:20,
 
  }
})

export default AppText;
