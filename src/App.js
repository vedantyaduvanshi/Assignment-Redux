

import React from 'react';
import { createStore } from 'redux';
import { Provider, useDispatch, useSelector } from 'react-redux';
import reducer from './Reducer';
import { decrementLike, incrementLike } from './Actions';
const store = createStore(reducer);

const LikeCounter = () => {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Like Counter: {count}</h1>
      <button style={{ marginRight: '10px' }} onClick={() => dispatch(incrementLike())}>
        Like
      </button>
      <button onClick={() => dispatch(decrementLike())}>
        Unlike
      </button>
    </div>
  );
};

const App = () => {
  return (
    <Provider store={store}>
      <LikeCounter />
    </Provider>
  );
};

export default App;
