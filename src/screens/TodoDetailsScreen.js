import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const TodoDetailsScreen = ({route}) => {
  const {id, data, status} = route.params;
  return (
    <View style={status === 'done' ? styles.viewStyleTwo : styles.viewStyle}>
      <Text style={styles.textStyle}>ID : {id}</Text>
      <Text style={styles.textStyle}>Task : {data}</Text>
      <Text style={styles.textStyle}>Status : {status}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  viewStyle: {
    // flex: 1,
    fontSize: 30,
    fontWeight: 20,
    padding: 30,
    justifyContent: 'center',
    borderLeftWidth: 2,
    borderRadius: 30,
    marginTop: '30%',
    marginHorizontal: '5%',
    borderColor: 'lightgreen',
    borderBottomWidth: 5,
    borderRightWidth: 3,
  },
  viewStyleTwo: {
    // flex: 1,
    fontSize: 30,
    fontWeight: 20,
    padding: 30,
    justifyContent: 'center',
    borderRadius: 30,
    marginTop: '30%',
    marginHorizontal: '5%',

    backgroundColor: '#82A284',
  },
  textStyle: {
    fontWeight: '500',
    fontSize: 23,
    color: 'black',
  },
});

export default TodoDetailsScreen;
