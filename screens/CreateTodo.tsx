import { View, Text, StyleSheet, TextInput, TouchableWithoutFeedback, TouchableOpacity } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { useState } from 'react';
import DateTimePicker from '@react-native-community/datetimepicker';

import { database } from '../services/firebaseService';
import { push, ref } from 'firebase/database';

const CreateTodo = ({ navigation, route }: { navigation: any; route: any }) => {
  const { userID } = route.params;
  const [title, setTitle] = useState('');
  const [selectedState, setSelectedState] = useState('Dead');
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);

  const openDatePicker = () => {
    setShowDatePicker(true);
  };

  const onDateChange = (event: Event, date: Date | undefined) => {
    setShowDatePicker(false);
    if (date) {
      setSelectedDate(date);
    }
  };

  const onTitleChange = (text: string) => {
    setTitle(text);
  };

  const sendTodo = () => {
    if (!title || !userID) {
      return;
    }

    push(ref(database, 'users/' + userID + '/todos'), {
      title: title,
      endDate: selectedDate.getTime(),
      state: selectedState,
    });

    navigation.goBack();
  };

  return (
    <View style={createTodoStyles.container}>
      <View style={createTodoStyles.titleContainer}>
        <Text style={createTodoStyles.label}>Title</Text>
        <TextInput style={createTodoStyles.titleInput} onChangeText={onTitleChange}></TextInput>
      </View>
      <Text style={createTodoStyles.label}>State</Text>
      <View style={createTodoStyles.pickerContainer}>
        <Picker style={createTodoStyles.select} selectedValue={selectedState} onValueChange={(itemValue) => setSelectedState(itemValue)}>
          <Picker.Item label="Dead" value="Dead" />
          <Picker.Item label="Running" value="Running" />
          <Picker.Item label="Alive" value="Alive" />
        </Picker>
      </View>
      <Text style={createTodoStyles.label}>End Date</Text>
      <TouchableWithoutFeedback onPress={openDatePicker}>
        <View style={createTodoStyles.button}>
          <Text style={createTodoStyles.buttonText}>Choose the end date</Text>
        </View>
      </TouchableWithoutFeedback>
      {showDatePicker && (
        <DateTimePicker
          value={selectedDate}
          minimumDate={new Date()}
          onChange={(event: any, date: Date | undefined) => {
            onDateChange(event, date);
          }}
        />
      )}
      <Text style={createTodoStyles.label}>{selectedDate.toLocaleDateString()}</Text>

      <TouchableOpacity style={[createTodoStyles.button, createTodoStyles.submitButton]} onPress={sendTodo}>
        <Text style={createTodoStyles.buttonText}>Submit Todo</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CreateTodo;

const createTodoStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#002C3E',
    alignItems: 'center',
  },
  titleContainer: {
    marginTop: 10,
    width: '100%',
    alignItems: 'center',
  },
  pickerContainer: {
    overflow: 'hidden',
    borderRadius: 8,
    width: '80%',
    height: 40,
    marginBottom: 5,
  },
  label: {
    fontWeight: 'bold',
    color: '#FFF',
    fontSize: 22,
    marginBottom: 5,
  },
  titleInput: {
    width: '80%',
    height: 40,
    borderRadius: 8,
    backgroundColor: '#FFF',
    marginBottom: 5,
  },
  select: {
    backgroundColor: '#FFF',
    width: '100%',
    marginTop: -6,
  },
  button: {
    width: '80%',
    height: 40,
    borderRadius: 8,
    backgroundColor: '#F7444E',
    justifyContent: 'center',
  },
  buttonText: {
    alignSelf: 'center',
  },
  submitButton: {
    position: 'absolute',
    bottom: 30,
  },
});
