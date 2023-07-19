import React from 'react';
import Screen from '../components/Screen';
import ListItem from '../components/List/ListItem';
import {FlatList, StyleSheet, View} from 'react-native';
import colors from '../config/colors';
import Icon from '../components/Icon';
import ListItemSeparator from '../components/List/ListItemSeparator';



const menuItems = [
  {
    title: "My Listings",
    icon: {
      name: "listtt",
      backgroundColor: colors.primary,
    }
  },
  {
     title: "My Messages",
     icon: {
       name: "email",
       backgroundColor: colors.secondary,
  },
  targetScreen: "Messages"
},
];


function AccountScreen(props) {
  return (
    <Screen style={styles.screen} >
      <View style={styles.container} >

       <ListItem
          title="Nada Dhaoui"
          subTitle="nadaddh@gmail.com"
          image={require('../assets/user.png')}  />

      </View>
      <View style={styles.container} >

        <FlatList
          data={menuItems}
          keyExtractor={Item=>Item.title}
          ItemSeparatorComponent={ListItemSeparator}
          renderItem={({ item }) =>(
            <ListItem
             title={item.title}
             ImageComponent={
              <Icon
              name={item.icon.name}
              backgroundColor={item.icon.backgroundColor} />
             }
            onPress={() => navigation.navigate(item.targetScreen )}
             />
        )}
          />
      </View>
          <ListItem
            title="Log Out"
            ImageComponent={<Icon name="logout" backgroundColor='#ffe66d'/>} />
    </Screen>
  );
}

const styles = StyleSheet.create({
    container:{
       marginVertical: 10
    },
    screen:{
      backgroundColor: colors.light,
    }
})

export default AccountScreen;
