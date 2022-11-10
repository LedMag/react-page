import { legacy_createStore as createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import reducer from './reducers';
import rootSaga from './sagas';

const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const sagaMiddleware = createSagaMiddleware();

export const loadState = () => {
    try {
      const serializedState = localStorage.getItem('state');
      if (serializedState === null) {
        return undefined;
      }
      return JSON.parse(serializedState);
    } catch (err) {
      return undefined;
    }
};

export const saveState = (state: any) => {
    try {
      const serializedState = JSON.stringify(state);
      localStorage.setItem('state', serializedState);
    } catch(err) {
      console.log(err)
    }
};

const persistedState = loadState();

const configureStore = (preloadState: any) => createStore(
    reducer,
    preloadState,
    composeEnhancers(applyMiddleware(sagaMiddleware))
);

const store = configureStore(persistedState);

sagaMiddleware.run(rootSaga);

store.subscribe(() => {
    saveState(store.getState());
});

export default store;