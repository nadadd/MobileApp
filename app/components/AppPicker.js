import { MaterialCommunityIcons } from '@expo/vector-icons';
import React, { useState } from 'react';
import { TextInput, View , StyleSheet, Platform, TouchableWithoutFeedback, Modal} from 'react-native';
import colors from '../config/colors';
import defaultStyles from '../config/styles';
import AppText from './AppText/AppText';
import { Button } from 'react-native-paper';
import Screen from './Screen';
import { FlatList } from 'react-native-gesture-handler';
import PickerItem from './PickerItem';


function AppPicker({icon,
  items,
  numberOfColumns=1 ,
  onSelectItem, selectedItem, placeholder,
   width="100%" ,
   PickerItemComponent = PickerItem,}) {

  const [modalVisible, setModalVisible] = useState(false)

  return (
     <>
    <TouchableWithoutFeedback onPress={() => setModalVisible(true)} >
    <View style={[styles.container, {width}]}>

    {icon && (
      <MaterialCommunityIcons
         name="chevron-down"
         size={20}
         color={defaultStyles.colors.medium}
         style={styles.icon}
         />
         )}
            {selectedItem ? (<AppText style={styles.text}> {selectedItem.label} </AppText>
            ) : (
            <AppText style={styles.placeholder} >{placeholder}</AppText>
            )}

      <MaterialCommunityIcons
         name="chevron-down"
         size={20}
         color={defaultStyles.colors.medium}
         />
    </View>
    </TouchableWithoutFeedback>
  <Modal visible={modalVisible} animationType='slide' >
    <Screen>
    <Button title='close' onPress={() => setModalVisible(false)} />
    <FlatList
    data={items}
    keyExtractor={item => item.value.toString()}
    numColumns={numberOfColumns}
    renderItem={({ item }) =>

    <PickerItemComponent
       item={item}
       label={item.label}
       onPress={() => {
        setModalVisible(false);
        onSelectItem(item);
       }}
    /> }
      />
    </Screen>
  </Modal>
  </>
);
}

const styles = StyleSheet.create({
  container: {
   backgroundColor: defaultStyles.colors.light,
   borderRadius: 25,
   flexDirection: "row",
   width: '100%',
   padding: 15,
   marginVertical: 10,
  },
   placeholder:{
     color: defaultStyles.colors.medium,
     flex:1,
   },
  icon:{
    marginRight: 10,
  },
  text:{
    flex: 1,
  }

})

export default AppPicker;
