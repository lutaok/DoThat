import { User } from 'firebase/auth';
import { useEffect, useState } from 'react';
import { ToDo } from '../models/ToDo.model';
import { ref, onValue } from 'firebase/database';
import { database } from '../services/firebaseService';

const useUserTodos = (selectedUser: User | undefined) => {
  const [userTodos, setUserTodos] = useState<ToDo[]>();
  useEffect(() => {
    if (selectedUser) {
      const userTodosRef = ref(database, 'users/' + selectedUser.uid + '/todos');
      onValue(userTodosRef, (snapshot) => {
        let todos: ToDo[] = [];
        if (snapshot) {
          snapshot.forEach((value) => {
            todos.push({
              firebaseID: value.key,
              state: value.val().state,
              title: value.val().title,
              endDate: value.val().endDate,
            });
          });
        }
        setUserTodos(todos);
      });
    }
  }, [selectedUser]);
  return userTodos;
};

export default useUserTodos;
