import { User } from 'firebase/auth';
import useAnonymousSignIn from './useAnonymousSignIn';
import useAsyncStorageItem from './useAsyncStorageItem';

const useGetUser = (): User | undefined => {
  const [localUser, userFound] = useAsyncStorageItem('user');
  const newUser = useAnonymousSignIn(userFound);
  if (localUser) {
    return localUser;
  }
  return newUser;
};

export default useGetUser;
