import React from 'react';
import { StyleSheet, View , Image, TouchableHighlight} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import AppText from '../AppText/AppText';
import colors  from '../../config/colors';


function ListItem({title, subTitle, image, ImageComponent:IconComponent}) {

  return (

    <TouchableHighlight underlayColor={colors.light} onPress={() => console.log()}>
    <View style={styles.container}>
      {IconComponent}
     { image && <Image style={styles.image} source={image} />}
     <View style={styles.detailsContainer}>
      <AppText style={styles.title} numberOfLines={1}> {title} </AppText>
     { subTitle && <AppText style={styles.subTitle} numberOfLines={2}> {subTitle} </AppText>}
     </View>
     <MaterialCommunityIcons color={colors.medium} name='chevron-right' size={25} />
    </View>
    </TouchableHighlight>

  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flexDirection: "row",
    padding: 15,
    backgroundColor: colors.white,
    },
  detailsContainer:{
     marginLeft: 10,
     justifyContent: "center",
     flex: 1,
  },
  title:{
   height: 30,
   borderRadius: 35,
   marginRight: 10,
  },
  subTitle:{
   color: colors.medium,

  },
  image:{
    width: 70,
    height: 70,
    borderRadius:50
  }
})

export default ListItem;

