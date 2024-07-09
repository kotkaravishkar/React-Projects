
// import './App.css';
import {useState, useCallback, useEffect, useRef} from "react"

function App() {

  const [length , setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed]  = useState(true);
  const [password, setPassword]  = useState("");

  const passRef = useRef();

  const PasswordGenerator = useCallback(()=>{
    let pass = "";
    let string = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if(numberAllowed){string += "0123456789";}
    if (charAllowed){ string += "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~" }

    for(let i =1; i<=length;i++){

      let char = Math.floor(Math.random() * string.length+1)
    
    pass += string.charAt(char)
  }

  setPassword(pass);

  }, [length, numberAllowed,charAllowed,setPassword]);


  const copy =useCallback(()=>{
    passRef.current?.select()
    window.navigator.clipboard.writeText(password)
  },[password]) 
  

  
useEffect(()=>{
  PasswordGenerator()

},[length, numberAllowed,charAllowed, PasswordGenerator])


  return (
    <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-6 my-8 text-center py-4 text-orange-500 bg-gray-800 ">  Password Generator
    <div className="flex shadow rounded-lg overflow-hidden mb-4">

      <input type="text" value = {password} className="outline-none w-full px-3 py-3"
      placeholder="password"
      readOnly
      ref={passRef}
       />
       <button onClick={copy}
        className="outline-none hover:bg-green-700 bg-blue-700 active:bg-yellow-900  text-white px-3 py-1 shrink-0">Copy</button>
    </div>
    <div className="flex text-sm gap-x-2">
      <div className="flex items-center gap-x-1">
      <input type="range" min={6} max={20} value = {length}
      className="cursor-pointer"
      onChange={(e)=>{
        setLength(e.target.value)
      }}   />

      <label>Length:{length}</label>
      </div>
      <div className="flex items-center gap-x-1">
        <input type="checkbox"
         defaultChecked= {numberAllowed}
         id="numberInput"

         onChange={()=>{
          setNumberAllowed((prev)=> !prev);
         }} />
         <label >Numbers</label>

         <input type="checkbox"
         defaultChecked= {charAllowed}
         id="charInput"

         onChange={()=>{
          setCharAllowed((prev)=> !prev);
         }} />
         <label >Characters</label>
      </div>
    </div>
    </div>
  );
}

export default App;
