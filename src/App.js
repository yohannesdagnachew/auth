import { useState } from 'react';
import { createUserWithEmailAndPassword, onAuthStateChanged,
  signOut,
 } from 'firebase/auth';
import './App.css';
import {auth} from './firebase_config'

function App() {

  const [registerEmail, setRegistorEmail] = useState('')
  const [registerPassword, setRegisterPassword] = useState('')
  const [loginEmail, setLoginEmail] = useState('')
  const [loginPassword, setLoginPassword] = useState('')

  const [user, setUser] = useState({})

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser)
  })

  const register = async() => {
    try {
      const user =  await  createUserWithEmailAndPassword(auth, registerEmail, registerPassword)
      console.log(user)
    }catch(error){
      console.log(error.massage)
    }
  
  }
  const login = async() => {}
  const logOut = async() => {
    await signOut(auth)
  }


  return (
    <div className="App">
     
     <div>
      <h1>Log In</h1>
      <input placeholder='Eamil'  onChange={(event)=>{
        setLoginEmail(event.target.value)
      }}/>
      <input placeholder='password' onChange={(event)=>{
        setLoginPassword(event.target.value)
      }}/>
      <button>Login</button>
     </div>

     <div>
      <h1>Sign Up</h1>
      <input placeholder='Eamil' onChange={(event)=>{
        setRegistorEmail(event.target.value)
      }}/>
      <input placeholder='password' 
      onChange={(event)=>{
        setRegisterPassword(event.target.value)
      }}/>
      <button onClick={register}>Sign up</button>
     </div>

     <h3>{
      user.email}</h3>
       <button onClick={logOut}>Sign Out</button>
    </div>
  );
}

export default App;
