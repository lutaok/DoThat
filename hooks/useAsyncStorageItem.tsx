import { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { User } from 'firebase/auth';

const useAsyncStorageItem = (key: string): [User | undefined, boolean | undefined] => {
  const [item, setItem] = useState<User>();
  const [itemFound, setItemFound] = useState<boolean>();

  useEffect(() => {
    const getItemFromAsyncStorage = async () => {
      try {
        setItem(undefined);
        setItemFound(undefined);
        const localItem = await AsyncStorage.getItem(key);
        if (localItem) {
          setItem(JSON.parse(localItem));
          setItemFound(true);
        } else {
          setItemFound(false);
        }
      } catch (error) {
        console.error(error);
      }
    };

    getItemFromAsyncStorage();
  }, [key]);

  return [item, itemFound];
};

export default useAsyncStorageItem;
