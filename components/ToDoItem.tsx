import { View, Text, StyleSheet } from 'react-native';

const ToDoItem = ({ todoItem }: { todoItem: { title: string; readableDate: string; state: string } }) => {
  const { title, readableDate, state } = todoItem;
  return (
    <View style={todo.itemContainer}>
      <Text style={todo.title}>{title}</Text>
      <Text style={todo.endDate}>{readableDate}</Text>
      <Text style={todo.state}>{state}</Text>
      <Text style={todo.borderBottom}></Text>
    </View>
  );
};

export default ToDoItem;

const todo = StyleSheet.create({
  itemContainer: {
    height: 80,
    width: 260,
    marginVertical: 10,
    borderRadius: 8,
    backgroundColor: 'white',
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: 'black',
    borderStyle: 'solid',
    position: 'relative',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 22,
  },
  state: {
    position: 'absolute',
    width: 180,
    left: 10,
    bottom: 15,
  },
  endDate: {
    position: 'absolute',
    width: 180,
    textAlign: 'right',
    right: 10,
    bottom: 15,
  },
  borderBottom: {
    width: '100%',
    height: 10,
    backgroundColor: '#F7444E',
    position: 'absolute',
    bottom: 5,
    left: 10,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
  },
});
