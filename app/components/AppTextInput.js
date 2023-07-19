import { MaterialCommunityIcons } from '@expo/vector-icons';
import React from 'react';
import { TextInput, View , StyleSheet, Platform} from 'react-native';
import colors from '../config/colors';
import defaultStyles from '../config/styles';



function AppTextInput({icon, width = "100%" , ...otherProps}) {
  return (
    <View style={[styles.container, {width}]}>
      { icon && (<MaterialCommunityIcons
      name={icon}
      size={20}
      color={colors.medium}
      style={styles.icon} />)}
      <TextInput
      placeholderTextColor={defaultStyles.colors.medium}
      style={defaultStyles.text} {...otherProps} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
   backgroundColor: defaultStyles.colors.light,
   borderRadius: 25,
   flexDirection: "row",
   width: "100%",
   padding: 15,
   marginVertical: 10,
  },

  icon:{
    marginRight: 10,
  },
  text:{
    color: defaultStyles.colors.dark,
    fontSize: 18,
    fontFamily: Platform.OS === "android" ? "Robot" : "Avenir",
  }

})

export default AppTextInput;
