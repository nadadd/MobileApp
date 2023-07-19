import React, { useEffect, useState } from 'react';
import Screen from '../components/Screen';
import { FlatList , StyleSheet, Text } from 'react-native';
import Card from '../components/Card';
import colors from '../config/colors';
import routes from '../navigation/routes';
import listingsApi from '../api/listings';
import AppText from '../components/AppText.android';
import AppButton from '../components/AppText/AppButton';
import ActivityIndicator from '../components/ActivityIndicator';



function ListingScreen({ navigation }) {
   const getListingsApi = useApi(listingsApi.getListings);

  useEffect(() => {
    getListingsApi.request(1, 2, 3);
  }, []);


  return (
    <Screen style={styles.screen}>
       getListingsApi.error && (
        <>
        <AppText>
          Couldn't retrieve the listings
          </AppText>
        <AppButton title="Retry" onPress={getListingsApi.request} />
        </>
      );
      <ActivityIndicator visible={getListingsApi.loading}/>
    <FlatList
       data={getListingsApi.data}
       keyExtractor={listings => listings.id.toString()}
       renderItem={({ item }) =>
         <Card
          title={item.title}
          subTitle={"$" + item.price}
          imageUrl={item.images[0].url}
          onPress={() => navigation.navigate(routes.LISTING_DETAILS, item)}
          thumbnailUrl={item.images[0].thumbnailUrl}
         />}
      />
    </Screen>
  );
};

const styles = StyleSheet.create({
   screen:{
    padding: 20,
    backgroundColor: colors.light,
   }
});

export default ListingScreen;
