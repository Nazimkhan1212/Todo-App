const addTodoList = data => {
  return {
    type: 'ADD_TODO',
    payload: {
      id: Math.floor(Math.random() * 9999),
      data,
      done: false,
    },
  };
};

const toggleTodo = id => {
  return {
    type: 'TOGGLE_TODO',
    id,
  };
};

const deleteTodo = id => {
  return {
    type: 'DELETE_TODO',
    id,
  };
};

const editTodo = (id, data) => {
  return {
    type: 'EDIT_TODO',
    payload: {
      id,
      data,
    },
  };
};

const login = (username, password) => {
  return {
    type: 'LOGIN',
    payload: {
      username,
      password,
    },
  };
};

const logout = () => {
  return {
    type: 'LOGOUT',
  };
};

export {addTodoList, toggleTodo, deleteTodo, editTodo, login, logout};
