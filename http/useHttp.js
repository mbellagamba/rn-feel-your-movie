import React from 'react';

export const useHttp = input => {
  const [state, dispatch] = React.useReducer(reducer, initialState);
  React.useEffect(() => {
    dispatch({type: 'loading'});
    fetch(input)
      .then(response => response.json())
      .then(data => dispatch({type: 'success', data}))
      .catch(error => dispatch({type: 'error', error}));
  }, [input]);
  return state;
};

const initialState = {
  status: 'idle',
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'loading':
      return {
        status: 'loading',
      };
    case 'success':
      return {
        status: 'success',
        data: action.data,
      };
    case 'error':
      return {
        status: 'error',
        error: action.error,
      };
    default:
      return state;
  }
};
