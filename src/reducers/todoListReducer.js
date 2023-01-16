import {combineReducers} from 'redux';
import loginReducer from './loginReducer';

const todoListReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      const {id, data, done} = action.payload;

      return data ? [...state, {id, data, done}] : state;

    case 'TOGGLE_TODO':
      return state.map(todo =>
        todo.id === action.id ? {...todo, done: !todo.done} : todo,
      );

    case 'DELETE_TODO':
      return state.filter(todo => todo.id !== action.id);

    case 'EDIT_TODO':
      // const filtered = state.filter(todo => todo.id !== action.payload.id);
      const edited = state.map(todo =>
        todo.id === action.payload.id
          ? {...todo, data: action.payload.data}
          : todo,
      );
      return edited;
    default:
      return state;
  }
};

const rootReducers = combineReducers({
  todoListReducer,
  loginReducer,
});

export default rootReducers;
