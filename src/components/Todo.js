import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {Button, StyleSheet, Text, View} from 'react-native';
import {
  FlatList,
  TextInput,
  TouchableOpacity,
} from 'react-native-gesture-handler';
import {useDispatch, useSelector} from 'react-redux';
import {addTodoList, deleteTodo, editTodo, toggleTodo} from '../actions/index';
import {useLayoutEffect} from 'react';

const Todo = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const todoList = useSelector(state => state.todoListReducer);

  const [todo, setTodo] = useState('');
  const [isEdit, setIsEdit] = useState(false);
  const [updateData, setUpdateData] = useState('');
  const [id, setId] = useState('');

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <AntDesign
            name="logout"
            color="white"
            size={30}
            style={{marginRight: 20}}
          />
        </TouchableOpacity>
      ),
    });
  }, [navigation]);

  return (
    <View style={styles.viewStyle}>
      <TextInput
        style={{fontSize: 25}}
        placeholder={isEdit ? 'edit your todo list' : 'add your todo list'}
        color="black"
        placeholderTextColor="grey"
        value={isEdit ? updateData : todo}
        autoFocus
        onChangeText={
          isEdit ? text => setUpdateData(text) : text => setTodo(text)
        }
      />
      <Button
        title={isEdit ? 'save' : 'add'}
        color="lightgreen"
        onPress={
          isEdit
            ? () => {
                setIsEdit(false);
                dispatch(editTodo(id, updateData));
                dispatch(addTodoList(updateData), setTodo(''));
                // alert(`task edited successfully`);
              }
            : () => {
                dispatch(addTodoList(todo), setTodo(''));
                // alert(`task added successfully`);
              }
        }
      />
      <FlatList
        data={todoList}
        keyExtractor={item => item.id}
        renderItem={({item}) => {
          return (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('DetailsScreen', {
                  data: item.data,
                  status: item.done ? 'done' : 'not-done',
                  id: item.id,
                })
              }>
              <View style={item.done ? styles.textStyleTwo : styles.textStyle}>
                <TouchableOpacity onPress={() => dispatch(toggleTodo(item.id))}>
                  <Text
                    style={{
                      textDecorationLine: item.done ? 'line-through' : 'none',
                      fontSize: 30,
                      color: 'black',
                      textDecorationStyle: {color: 'red'},
                    }}>
                    {item.data}
                  </Text>
                </TouchableOpacity>

                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'center',
                  }}>
                  <TouchableOpacity
                    style={{marginRight: 14}}
                    onPress={() => {
                      dispatch(deleteTodo(item.id));
                      setIsEdit(true);
                      setUpdateData(item.data);
                      setId(item.id);
                    }}>
                    {/* <Button title="edit" /> */}
                    <Entypo color="lightgreen" name="edit" size={30} />
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => dispatch(deleteTodo(item.id))}>
                    {/* <Button title="delete" /> */}
                    <MaterialIcons color="red" name="delete" size={30} />
                  </TouchableOpacity>
                </View>
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  viewStyle: {
    margin: 20,
    flex: 1,
  },
  textStyle: {
    flex: 1,
    padding: 20,
    marginTop: 20,
    borderBottomWidth: 2,
    borderColor: 'lightgreen',
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderLeftWidth: 2,
    borderRadius: 20,
    marginHorizontal: '1%',
    borderColor: 'lightgreen',
    borderBottomWidth: 5,
    borderRightWidth: 3,
    color: 'black',
  },
  textStyleTwo: {
    flex: 1,

    padding: 20,
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderRadius: 20,
    marginHorizontal: '1%',
    backgroundColor: '#82A284',
    color: 'black',
  },
});
export default Todo;
