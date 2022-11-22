import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createStore } from 'redux'
import allReducers from './reducers/'
import { Provider } from 'react-redux'

const store = createStore(
  allReducers, 
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

// //STORE - Globalized state

// //ACTION - Describes what you want to do with redux(eg: if you are incrementing we can give the name for the action as increment)
// const increment = () => {
//   return {
//     type: 'INCREMENT', // 'type' is actually the 'name' of the action and not a type
//   }
// }
// const decrement = () => {
//   return {
//     type: 'DECREMENT',
//   }
// }

// //REDUCER - Reducer describes how the actions transform the state into the next state. When action is called reducer is going to check
// //          which action you did and based on the action it's gonna modify the STORE
// const counter = (state = 0, action) => {
//   switch(action.type) {
//     case 'INCREMENT':
//       return state + 1
//     case 'DECREMENT':
//       return state - 1
//   }
// }
// let store = createStore(counter)
// //displaying on the console
// store.subscribe(() => console.log(store.getState()))

// //DISPATCH - This the way we can actually execute that ACTION. We can say "Hey! dispatch this ACTION to the REDUCER". So we send 
// //           that ACTION to the REDUCER, the REDUCER is gonna check what to do, then the STORE gets updated.
// store.dispatch(increment())
// store.dispatch(increment())
// store.dispatch(decrement())
// store.dispatch(decrement())
// store.dispatch(decrement())


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
reportWebVitals();
