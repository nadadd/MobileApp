import React from 'react';
import { View, StyleSheet} from 'react-native';
import AppText from '../components/AppText/AppText';
import colors from '../config/colors';
import ListItem from '../components/List/ListItem';
import { Image } from 'react-native-expo-image-cache';


function ListingDetailsScreen({ route }) {
  const listing = route.params;
  return (
    <View>
        <Image
              style={styles.image}
              preview={{uri: listing.images[0].thubnailUr}}
              tint='light'
              uri={listing.images[0].url} 
              />
        <View style={styles.detailsContainer}>
        <AppText style={styles.title}>{listing.title}</AppText>
        <AppText style={styles.price}>${listing.price}</AppText>

            <View style={styles.userContainer}>
          <ListItem
           image ={{ uri :listing.imageUri}}
           title= "user"
           subTitle= "5 Listings"
          />
            </View>


        </View>
    </View>
  );
}

const styles= StyleSheet.create({
  detailsContainer: {
    padding:20,
  },
  userContainer:{
     marginVertical: 40,
  },
  price:{
   color: colors.secondary,
   fontWeight: "bold",
   fontSize: 20,
   marginVertical: 10,
  },
  title:{
   fontSize:24,
   fontWeight: "500",
  },
  image:{
    width: '100%',
    height: 300,
  },

})

export default ListingDetailsScreen;
