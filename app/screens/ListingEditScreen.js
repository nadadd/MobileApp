import React, { useEffect, useState } from 'react';
import { Text } from 'react-native';
import * as Yup from 'yup';
import {
  AppForm,
  AppFormField,
  AppFormPicker,
  SubmitButton,
} from '../components/Form';
import Screen from '../components/Screen';
import FormImagePicker from '../components/Form/FormImagePicker';
// import {default as useLocation} from '../hooks/useLocation';
import listingsApi from '../api/listings';

import * as Location from 'expo-location';
import UploadScreen from './UploadScreen';
import styles from '../config/styles';


const validationSchema = Yup.object().shape({
  title: Yup.string().required().min(1).label("Title"),
  price: Yup.number().required().max(10000).label("Price"),
  description: Yup.string().label("Description"),
  category: Yup.object().required().nullable().label("Category"),
  images: Yup.array().required().min(1, "please select at least one image")
});

const categories = [
  {label: "furniture", value:1, backgroundColor: 'red', icon: 'apps' },
  {label: "label", value:2, backgroundColor: 'green', icon: 'email' },
  {label: "camera", value:3 ,backgroundColor: 'blue', icon: 'lock'},
]

function ListingEditScreen() {
  //  const location = useLocation();
   const [uploadVisible, setUploadVisible] = useState(false);
   const [progress, setProgress] = useState(0);

     const handleSubmit = async(listing, {resetForm}) => {
         setProgress(0);
         setUploadVisible(true);

      const result = await listingsApi.addListing(
      { ...listing, location},
      (progress) => setProgress(progress) );



     if (!result.ok) {
        setUploadVisible(false);
        return alert('could not save the listings');
       }

       resetForm();
     };

  return (
    <Screen >
      <UploadScreen
      onDone={() => setUploadVisible(false)}
      progress={progress}
      visible={uploadVisible} />
       <AppForm
         initialValues={{
          title: "",
          price: "",
          description:"",
          category: null,
          images:[],
         }}
         onSubmit={handleSubmit}
         validationSchema={validationSchema}
       >
        <FormImagePicker name="images" />
        <AppFormField
          maxLength={255} name="title" placeholder={<Text>'Title'</Text>}/>
         <AppFormField
           keyboardType="numeric"
           maxLength={8}
           name="price"
           placeholder={<Text>'Price'</Text>}
           width={120}
         />
         <AppFormPicker items={categories} name="category"
             placeholder={<Text>'Category'</Text>}
             width="50%" />

         <AppFormField
             maxLength={255}
             multline
             name="description"
             numberOfLines={3}
             placeholder={<Text>'description'</Text>}
         />
            <SubmitButton title="post" />

       </AppForm>
    </Screen>
  );
};


export default ListingEditScreen;

