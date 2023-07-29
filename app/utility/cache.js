import {AsyncStorage} from '@react-native-async-storage/async-storage';
import dayjs from 'dayjs';



const prefixe = 'cache';
const expiryInMinutes = 5;


const store = async(key, value) => {
  try {
    const item ={
      value,
      timestamp: Date.now()
    }
    await AsyncStorage.setItem(prefixe + key, JSON.stringify(item));

  } catch (error) {
     console.log(error);
  }
}

const isExpired = (item) => {
      const now = dayjs();
      const storedTime = dayjs(item.timestamp);
      return now.diff(storedTime, "minute") > expiryInMinutes;
}

const get = async(key) => {
  try {
    const value = await AsyncStorage.getItem(prefixe + key);
    const item = JSON.parse(value);

  if(!item) return null;

  if(isExpired(item)) {
    // Command Query Separation (CQS)
    await AsyncStorage.removeItem(prefixe + key);
    return null;
  }

  return item.value;

  } catch (error) {
      console.log(error);
  }

};

export default {
  store,
};
