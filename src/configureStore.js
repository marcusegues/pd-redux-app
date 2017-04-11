import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import root from './reducers/root';
import thunkMiddleware from 'redux-thunk'

const configureStore = () => {
  const store = createStore(
    root,
    composeWithDevTools(
      applyMiddleware(
        thunkMiddleware
      )
    )
  );

  return store;
};

export default configureStore;
