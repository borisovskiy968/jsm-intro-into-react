import { useState, useEffect } from 'react';
import './App.css';

//Component
const Person = (props) => {
  //return Fragment
  //use props
  return (
    <>
      <h1>Name: {props.name}</h1>
      <h2>Last name: {props.lastName}</h2>
      <h2>Age: {props.age}</h2>
    </>
  )
}

const App = () => {
  const name = 'John';
  const isNameShowing = true;

  //State
  const [counter, setCounter] = useState(0);//a hook

  useEffect(() => {
    alert("You've changed the counter to " + counter);
  }, [counter])

  return (
    <div className="App">
      <button onClick={() => setCounter((prevCount) => prevCount - 1)}>-</button>
      <h1>{counter}</h1>
      <button onClick={() => setCounter((prevCount) => prevCount + 1)}>+</button>
      <Person
        name='John'
        lastName='Doe'
        age={25}
      />
      <Person
        name='Mary'
        lastName='Doe'
        age={24}
      />
      <Person
        name='Jane'
        lastName='Smith'
        age={20}
      />
      <h1>Hello, {isNameShowing ? name : 'someone'}!</h1>
      {name ? (
        <>
          <h1>{name}</h1>
        </>
      ) : (
        <>
          <h1>test</h1>
          <h2>There is no name</h2>
        </>
      )}
    </div>
  );
}

export default App;
