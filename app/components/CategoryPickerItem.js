import React from 'react';
import { View, StyleSheet} from 'react-native';
import Icon from './Icon';
import AppText from './AppText/AppText';

function CategoryPickerItem({Item}) {      // {label, onPress}
  return <View style={styles.container} >
           <Icon backgroundColor={Item.backgroundColor} name={Item.icon} size={80} />
           <AppText style={styles.label} >{ Item.label}</AppText>
       </View>
}

const styles = StyleSheet.create({
  container:{
     paddingHorizontal: 30,
     paddingVertical: 15,
     alignItems: "center",
     width: "30%",
  },
  label: {
    marginTop: 5,
    textAlign: "center",
  }
})

export default CategoryPickerItem;
