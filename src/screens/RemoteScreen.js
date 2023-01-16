import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {View, Text, StyleSheet, FlatList} from 'react-native';

const RemoteScreen = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const fetchTodos = async () => {
      const {data} = await axios.get(
        'https://jsonplaceholder.typicode.com/todos',
      );
      setTodos(data);
    };
    fetchTodos();
  }, []);

  return (
    <View>
      <FlatList
        data={todos}
        keyExtractor={item => item.id}
        renderItem={({item}) => {
          return (
            <View
              style={item.completed ? styles.viewStyleTwo : styles.viewStyle}>
              <Text style={styles.textstyle}>ID : {item.id}</Text>
              <Text style={styles.textstyle}>TITLE : {item.title}</Text>
              {/* <Text style={{color: 'black'}}>Status : {item.completed}</Text> */}
            </View>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  viewStyle: {
    marginTop: 25,
    padding: 30,
    borderLeftWidth: 2,
    borderRadius: 25,
    marginHorizontal: '3%',
    borderColor: 'lightgreen',
    borderBottomWidth: 5,
    borderRightWidth: 3,
  },
  viewStyleTwo: {
    marginTop: 25,
    padding: 30,
    // borderLeftWidth: 2,
    borderRadius: 25,
    marginHorizontal: '3%',
    // borderColor: 'lightgreen',
    // borderBottomWidth: 5,
    // borderRightWidth: 3,
    backgroundColor: '#82A284',
  },
  textstyle: {
    fontSize: 21,
    fontWeight: '400',
    color: 'black',
  },
});

export default RemoteScreen;
