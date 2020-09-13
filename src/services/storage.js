import AsyncStorage from '@react-native-community/async-storage';

export const retrieveItem = async (key, transformation) => {
  try {
    let value = await AsyncStorage.getItem(key);
    if (transformation) {
      value = transformation(value);
    }
    return value;
  } catch (error) {
    // Error in retrieving data
    throw error;
  }
};

export const storeItem = async (key, value) => {
  try {
    if (value == null) {
      return await Promise.resolve();
    }
    return await AsyncStorage.setItem(key, value);
  } catch (error) {
    // Error in storing data
    throw error;
  }
};

export const storeObject = async (key, value) => {
  try {
    const jsonValue = JSON.stringify(value);

    await AsyncStorage.setItem(key, jsonValue);
  } catch (e) {
    // saving error
  }
};
