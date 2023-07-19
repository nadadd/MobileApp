import React from 'react';
import { StyleSheet } from 'react-native';

import { useFormikContext } from 'formik';
import ImageInputList from '../ImageInputList';
import ErrorMsg from './ErrorMsg';


function FormImagePicker({ name }) {
  const { setFieldValue, values } = useFormikContext();
  const imageUris = values[name];

  const handleAdd = (uri) => {
    setFieldValue(name, [...imageUris, uri]);
   }

   const handleRemove = (uri) => {
    setFieldValue(name, imageUris.filter((imageUri) => (imageUri) !== uri));
   }

return (
  <>
 <ImageInputList
    imageUris={imageUris}
    onAddImage={handleAdd}
    onRemoveImage={handleRemove}
    />
 <ErrorMsg/>
 </>
 );
}


const styles = StyleSheet.create({

})


export default FormImagePicker;
