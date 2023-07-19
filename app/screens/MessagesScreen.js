import React, { useState } from 'react';
import { FlatList, StyleSheet } from 'react-native';
import ListItem from '../components/List/ListItem';
import Screen from '../components/Screen';
import ListItemSeparator from '../components/List/ListItemSeparator';
import ListItemDeleteAction from '../components/List/ListItemDeleteAction';


const initialMessages = [
  {
    id: 1,
    title: 'T1',
    description: 'D1',
    image: require('../assets/user.png')
  },
  {
    id: 2,
    title: 'T2',
    description: 'D2',
    image: require('../assets/user.png')
  }
]

function MessagesScreen(props) {
   const [messages, setMessages] = useState(initialMessages);
   const [refreshing, setRefreshing] = useState(false);

   const handleDelete = (message) => {

    const newMessages = messages.filter((m) => m.id !== message.id) ;
    setMessages(newMessages);
}

  return (
    <Screen >
    <FlatList
       data={messages}
       keyExtractor={ (message) => message.id.toString() }
       renderItem={({item}) => (
         <ListItem
            title={item.title}
            subTitle={item.description}
            image={item.image }
            onPress={() => console.log("Msg selected", item )}
            renderRightActions={() =>
              <ListItemDeleteAction onPress={() => handleDelete(item)}/>
            }
         />
           )}
           ItemSeparatorComponent={ListItemSeparator}
           refreshing= {refreshing}
           onRefresh={() => {
            setMessages([
              {
                  id: 2,
                  title: 'T2',
                  description: 'D2',
                  image: require('../assets/user.png')
              },

            ])
           }}
         />
         </Screen>
  );
}

const styles = StyleSheet.create({

})

export default MessagesScreen;
