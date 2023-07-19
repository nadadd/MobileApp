import React from 'react';
import {View, StyleSheet } from 'react-native';
import colors from '../config/colors';
import AppText from './AppText/AppText';
import { TouchableWithoutFeedback } from 'react-native';
import { Image } from 'react-native-expo-image-cache';

function Card({title, subTitle, imageUrl , onPress, thumbnailUrl }) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
    <View style={styles.card}>
      <Image
           style={styles.image}
           tint='light'
           preview={{ uri: thumbnailUrl }}
           uri={imageUrl}/>
      <View style={styles.detailsContainer}>
                 <AppText style={styles.title} numberOfLines={1}>{title}</AppText>
                  <AppText style={styles.subTitle} numberOfLines={2}> {subTitle} </AppText>

      </View>
    </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
   card: {
    borderRadius: 15,
    backgroundColor: colors.white,
    marginBottom:20,
    overflow: "hidden",
   },
   detailsContainer: {
     padding:20,
   },
   title:{
      marginBottom:7,
   },
   subTitle:{
     color: colors.secondary,
     fontWeight: "bold",
   },
   image:{
     width: "100%",
     height: 200,
   },
  })

export default Card;
