import React from 'react';
import {View} from 'react-native';
import Todo from '../components/Todo';
import {useSelector} from 'react-redux';

const HomeScreen = () => {
  const user = useSelector(state => state.loginReducer);
  return (
    <View style={{backgroundColor: 'whitesmoke', flex: 1}}>
      {user.isLoggedIn ? <Todo /> : null}
    </View>
  );
};

export default HomeScreen;
