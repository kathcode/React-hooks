import React, { useReducer, useState } from 'react';

const initalState = {
  message: 'Please select a bottom'
}

// The changes that you want to do in the state
const reducer = (state, action) => {
  switch (action.type) {
    case 'greet':
      return {
        message: `Hi ${action.name}`
      }
    case 'goodbye':
      return {
        message: `Goodbye ${action.name}`
      }
    case 'clear':
      return { ...initalState }
    default:
      return state
  }
};

function Greeting() {
  const [state, dispatch] = useReducer(
    reducer,
    initalState
  );
  const [name, setName] = useState('');

  return (
    <section>
      <h1>★ useReducer hook</h1>
      <h2>{state.message}</h2>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <button onClick={() => dispatch({ type: 'greet', name })}>Greet</button>
      <button onClick={() => dispatch({ type: 'goodbye', name })}>Goodbye</button>
      <button onClick={() => {
        dispatch({ type: 'clear' })
        setName('')
        }}
      >Clear</button>
    </section>
  );
}

export default Greeting;



/**
 * Notes:
 * 
 * We can use the hook useReducer when our state is more complex,
 * like in this example, we need to return something different depending
 * of a state.
 */