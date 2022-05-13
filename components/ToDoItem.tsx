import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { ToDo } from '../models/ToDo.model';

const ToDoItem = ({ todoItem, deleteTodo }: { todoItem: ToDo; deleteTodo: (firebaseID: string | null) => void }) => {
  const { firebaseID, title, endDate, state } = todoItem;

  return (
    <View style={todo.itemContainer}>
      <Text style={todo.title}>{title}</Text>

      <View style={todo.subdataContainer}>
        <View style={todo.stateContainer}>
          <View style={todo.stateIcon}></View>
          <Text style={todo.stateText}>{state}</Text>
        </View>

        <Text style={todo.endDate}>{new Date(endDate).toLocaleDateString()}</Text>
      </View>

      <Text style={todo.borderBottom}></Text>

      <TouchableOpacity style={todo.deleteContainer} onPress={() => deleteTodo(firebaseID)}>
        <Text style={todo.deleteIcon}>x</Text>
      </TouchableOpacity>
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
    backgroundColor: '#FFF',
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: '#F7444E',
    borderStyle: 'solid',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 22,
  },
  subdataContainer: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'nowrap',
    marginTop: 12,
  },
  stateContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  stateIcon: {
    borderColor: '#F7444E',
    borderWidth: 2,
    width: 12,
    height: 12,
    alignSelf: 'center',
    borderRadius: 10,
    marginRight: 4,
  },
  stateText: {
    fontWeight: 'bold',
  },
  endDate: {
    flex: 2,
    textAlign: 'right',
  },
  borderBottom: {
    width: '100%',
    height: 10,
    marginBottom: 4,
    backgroundColor: '#F7444E',
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
  },
  deleteContainer: {
    position: 'absolute',
    top: 5,
    right: 5,
    width: 15,
    height: 15,
    borderRadius: 20,
    backgroundColor: '#F7444E',
    alignItems: 'center',
  },
  deleteIcon: {
    fontSize: 12,
    fontWeight: 'bold',
    includeFontPadding: false,
  },
});
