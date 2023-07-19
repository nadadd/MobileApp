import React from 'react';
import { useFormikContext } from 'formik';
import AppPicker from '../AppPicker';
import ErrorMsg from './ErrorMsg';


function AppFormPicker({ items, name, PickerItemComponent, placeholder}) {
  const {errors, setFieldValue, touched, values } = useFormikContext();
  return (
    <>
      <AppPicker
        items={items}
        numberOfColumns={numberOfColumns}
        PickerItemComponent={PickerItemComponent}
        onSelectItem={(item) => setFieldValue(name, item)}
        placeholder={placeholder}
        selectedItem={values[name]}
        width={width}
       />
       <ErrorMsg error={errors[name]} visible={touched[name]} />
    </>
  );
}

export default AppFormPicker;
