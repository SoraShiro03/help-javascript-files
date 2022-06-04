
import React from 'react';
import './App.css';
import { ThemeProvider, useThemeUpdate } from './theme/themeContext';
import { MyFunctionalComponent } from './components/functional.component';
import MyClassComponent from './components/class.component'
import { SimpleCalculation } from './components/simpleCalculation';
import { TodoApp } from './components/todo/todoApp.component';

const initialState = { count: 0 }

function init(initialState) {
  return { count: initialState.count }
}

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      console.log(state, "increment")
      return { count: state.count + 1 }
    case 'decrement':
      return { count: state.count - 1 }
    case 'reset':
      return init(action.payload)
    default:
      throw new Error()
  }

}

function App() {

  const [state, dispatch] = React.useReducer(reducer, { count: 0 }, init)
  console.log("mystate: ", state)
  return (
    <div className="App">
      <ThemeProvider>

        <MyFunctionalComponent />

        <div className='simple-calculation'>
          <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
          <SimpleCalculation count={state.count} />
          <button onClick={() => dispatch({ type: 'increment' })}>+</button>
          <button onClick={() => dispatch({ type: 'reset', payload: { count: 0 } })}>reset</button>
        </div>
      </ThemeProvider>
      {/* <MyClassComponent /> */}
      <TodoApp />

    </div>
  );
}

export default App;
