import React from 'react';
import Card from './components/Card';


function App() {
   
  
   return (
    <div className="h-screen flex flex-col items-center bg-gray-100">
      <h1 className="text-4xl font-bold bg-blue-500 mb-8 rounded-xl">Tailwind Demo</h1>
      <Card  username="Mackbook" btntext="Click me"    />
      <Card  username={"Legion"} btntext="Visit me"   />
      <Card  username={"Victus"} btntext="Check me"  />
      <Card  username={"TuF"}  btntext="Read more"  />



    </div>
  );
}

export default App;
