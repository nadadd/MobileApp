import React from 'react';
import { View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

function Icon({
  email,
  size = 40 ,
  backgroundColor = "#000",
  iconColor = "#fff",
}) {
  return (
    <View style={{
      width: size,
      height: size,
      borderRadius: size/2,
      backgroundColor,
      justifyContent: 'center',
      alignItems: 'center',
    }}>

<MaterialCommunityIcons name='email' color={iconColor} size={size * 0.5}/>
    </View>
  );
}

export default Icon;
