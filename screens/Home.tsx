import { ActivityIndicator, ScrollView, TouchableOpacity, View, Text } from 'react-native';

import ToDoItem from '../components/ToDoItem';
import globalStyles from '../global-styles';

import useGetUser from '../hooks/useGetUser';
import useUserTodos from '../hooks/useUserTodos';
import { database } from '../services/firebaseService';
import { remove, ref } from 'firebase/database';
import { ToDo } from '../models/ToDo.model';

const Home = ({ navigation }: { navigation: any }) => {
  const user = useGetUser();
  const userTodos = useUserTodos(user);

  const deleteTodo = (firebaseID: string | null) => {
    if (user && firebaseID) {
      const refToDelete = ref(database, 'users/' + user.uid + '/todos/' + firebaseID);
      remove(refToDelete);
    }
  };

  return (
    <View style={globalStyles.homepage}>
      {(!user || !userTodos) && <ActivityIndicator style={globalStyles.loadingData} size="large" color="#F7444E" />}
      {userTodos && userTodos.length > 0 && (
        <ScrollView contentContainerStyle={globalStyles.scrollView} showsVerticalScrollIndicator={false}>
          {userTodos.map((todo, index) => {
            return <ToDoItem key={`todo_${index}`} todoItem={todo} deleteTodo={deleteTodo}></ToDoItem>;
          })}
        </ScrollView>
      )}
      {user && (
        <TouchableOpacity
          style={globalStyles.plusContainer}
          onPress={() =>
            navigation.navigate('CreateTodo', {
              userID: user.uid,
            })
          }
        >
          <Text style={globalStyles.plusIcon}>+</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default Home;
