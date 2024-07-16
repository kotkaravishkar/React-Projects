import react from 'react'
import './App.css';
import UserContextProvider from './context/UserContext'
import Login from './components/Login';
import Profile from './components/Profile';


function App() {
  return (
  
    <UserContextProvider>
    <h1>UserContext Example</h1>
    <Login/>
    <Profile/>
    </UserContextProvider>
    

  );
}

export default App;
