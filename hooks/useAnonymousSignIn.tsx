import { useEffect, useState } from 'react';
import { Platform } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { onAuthStateChanged, signInAnonymously, User } from 'firebase/auth';
import { ref, set } from 'firebase/database';

import { auth, database } from '../services/firebaseService';

const useAnonymousSignIn = (alreadyFound: boolean | undefined) => {
  const [newAnonymousUser, setNewAnonymousUser] = useState<User>();
  useEffect(() => {
    if (alreadyFound === false) {
      onAuthStateChanged(auth, (newUser) => {
        if (newUser) {
          setNewAnonymousUser(newUser);
          AsyncStorage.setItem('user', JSON.stringify(newUser));
          set(ref(database, 'users/' + newUser.uid), {
            platform: Platform.OS,
          });
        }
      });
      signInAnonymously(auth);
    }
  }, [alreadyFound]);
  return newAnonymousUser;
};

export default useAnonymousSignIn;
