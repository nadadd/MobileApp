import React from 'react';
import AppText from '../AppText/AppText';
import { StyleSheet } from 'react-native';



function ErrorMsg({error, visible}) {
  if (!visible || !error) return null;
  return (
    <AppText style={styles.error}>{error}</AppText>
  );
}
const styles = StyleSheet.create({
  error:{
    color: "red",
  }
})

export default ErrorMsg;
