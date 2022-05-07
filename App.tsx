import { ScrollView, View } from 'react-native';
import ToDoItem from './components/ToDoItem';
import HeaderBand from './components/HeaderBand';
import globalStyles from './global-styles';
import exampleJson from './assets/todos.json';

export default function App() {
  const data = exampleJson.todos;

  return (
    <View style={globalStyles.homepage}>
      <HeaderBand></HeaderBand>
      <ScrollView contentContainerStyle={globalStyles.scrollView}>
        {data.map((todo, index) => {
          return <ToDoItem key={`todo_${index}`} todoItem={todo}></ToDoItem>;
        })}
      </ScrollView>
    </View>
  );
}
