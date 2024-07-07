
import {useState} from 'react';
import './App.css';

function App() {

let [counter, setCounter] = useState(15);

// let count = 10;



const addValue = () =>{

  console.log("clicked", counter);
  setCounter(counter+1)
}

const RemoveValue = ()=>{

  console.log("Clicked", counter);
  setCounter(counter-1);
}

  return (
    <div className="App">
     

     <h1>Count Increment Decrement</h1>
     <h3>Counter Value: {counter}</h3>

     <button    
      onClick={addValue}>Add Value </button>
      <br/>
      <br/>


  
      <button onClick={RemoveValue}>Remove Value </button>
      <p></p>
    </div>
  );
}

export default App;
