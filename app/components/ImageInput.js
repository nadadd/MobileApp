import React, { useEffect } from 'react';
import { View, StyleSheet, Image ,TouchableWithoutFeedback, Alert} from 'react-native';
import colors from '../config/colors';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';


function ImageInput({imageUri, onChangeImage}) {
  useEffect(() => {
     requestPermission();
  }, [])
  const requestPermission = async () => {
    const { granted } = await ImagePicker.requestCameraPermissionsAsync(); //{ granted: boolean , key: value}
    if (!granted)
       Alert.alert('you need to enable permission to access the library');
    };
  const handlePress = () => {
    if (!imageUri) selectImage();
     else Alert.alert('Supprimer', 'Voulez-Vous spprimer cette image?', [
      {text: 'Yes', onPress: () => onChangeImage(null) },
      {text: 'No'},
     ])
  }

  const selectImage = async() => {
    try{
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        quality: 0.5,
      });
      if (!result.canceled)
         onChangeImage(result.uri);
    } catch (error){
      console.log('Error reading an image', error);
    }
  };

  return (
    <TouchableWithoutFeedback onPress={handlePress}>
    <View style={styles.container}>
      {!imageUri && (
        <MaterialCommunityIcons colors={colors.medium} name="camera" size={40} />
      )}
      {imageUri && <Image source={{uri: imageUri}} style={styles.image} />}
    </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    overflow:'hidden',
    backgroundColor: colors.light,
    borderRadius: 15,
    alignItems: 'center',
    height: 100,
    width: 100,
  },
  image:{
    height: "100%",
    width:"100%",
  }
})

export default ImageInput;
