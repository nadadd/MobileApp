import React from 'react';
import AppTextInput from '../AppTextInput';
import { useFormikContext } from 'formik';
import ErrorMsg from './ErrorMsg';


function AppFormField({name, width, ...otherprops}) {

const {handleChange,
  setFieldValue,
  errors,
  setFieldTouched,
  values,
  touched,
} = useFormikContext();

  return (
    <>
<AppTextInput

    onBlur={() => setFieldTouched(name)}
    onChangeText={ text => setFieldValue(name, text) }
    value={values[name]}
    width={width}
    {...otherprops}
    />
<ErrorMsg error={errors[name]} visible={touched[name]} />
    </>
  );
}

export default AppFormField;
