import React, {useState} from 'react';
import {View, Text, StyleSheet, Button, Pressable} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import {useDispatch, useSelector} from 'react-redux';
import {login} from '../actions';

const LoginScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const user = useSelector(state => state.loginReducer);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);

  return (
    <View style={styles.viewStyle}>
      <Text
        style={{
          fontSize: 40,
          fontWeight: 'bold',
          marginBottom: 10,
          alignSelf: 'center',
          color: 'black',
        }}>
        Sign-in
      </Text>
      <TextInput
        placeholderTextColor="grey"
        style={{
          marginBottom: 20,
          fontSize: 20,
          borderRadius: 20,
          padding: 20,
          marginHorizontal: '3%',
          borderColor: 'lightgreen',
          borderBottomWidth: 3,
          borderRightWidth: 1.5,
          borderLeftWidth: 1,
          color: 'black',
        }}
        autoFocus
        placeholder="Name"
        value={username}
        onChangeText={text => {
          setError(false);
          setUsername(text);
        }}
      />
      <TextInput
        placeholderTextColor="grey"
        style={{
          marginBottom: 20,
          fontSize: 20,
          borderRadius: 20,
          padding: 20,
          marginHorizontal: '3%',
          borderColor: 'lightgreen',
          borderBottomWidth: 3,
          borderRightWidth: 1.5,
          borderLeftWidth: 1,
          color: 'black',
        }}
        placeholder="password"
        secureTextEntry={true}
        value={password}
        onChangeText={text => {
          setError(false);
          setPassword(text);
        }}
      />
      {error ? (
        <Text style={{color: 'red', alignSelf: 'center', marginBottom: 10}}>
          please enter valid credentials
        </Text>
      ) : null}
      <Pressable
        disabled={username && password ? false : true}
        style={{
          padding: 10,
          backgroundColor: 'black',
          width: '50%',
          alignSelf: 'center',
          borderRadius: 20,
          borderBottomWidth: 3,
          borderRightWidth: 1.5,
          borderLeftWidth: 1,
        }}
        onPress={() => {
          if ((username && password) === 'nazim') {
            dispatch(login(username, password));
            navigation.replace('MainScreen');
          } else {
            setError(true);
          }
        }}>
        <Text
          style={{
            alignSelf: 'center',
            fontSize: 25,
            color: 'white',
            fontWeight: 'bold',
          }}>
          Login
        </Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  viewStyle: {
    flex: 1,
    padding: 10,
    flexDirection: 'column',
    paddingTop: 150,
    backgroundColor: 'white',
  },
});

export default LoginScreen;
