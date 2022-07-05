import React from 'react'
import Main from './components/main';
import Review from './components/review';
import ViewMore from './components/viewMore';
import Accommodation from './components/accommodation';
import Travel from './components/travel';
import Login from './Login/Login';
import {Routes, Route} from 'react-router-dom'
import {fire} from './Firebase'
import { useEffect, useState } from 'react';
import './App.css'


function App() {
  
  const [user, setUser] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [emailError, setEmailError] = useState('')
  const [passwordError, setPasswordError] = useState('')
  const [hasAccount, setHasAccount] = useState(false)

  
  
  // const clearInputs = ()=> {
  //   setEmail("")
  //   setPassword("")
  // }

  // const clearErrors = ()=> {
  //   setEmailError("")
  //   setPasswordError("")
  // }

  // const handleLogin = () => {
  //   clearErrors()
  //   fire
  //     .auth()
  //     .signINWithEmailAndPassword(email,password)
  //     .catch((err) => {
  //         switch(err.code){
  //           case "auth/invalid-email":
  //           case "auth/user-disabled":
  //           case "auth/user-not-found":
  //               setEmailError(err.message);
  //               break;
  //           case "auth/wrong-password":
  //               setPasswordError(err.message);
  //               break;
  //       }
  //     })
  // }

  // const handleSignUp = () => {
  //   fire
  //   .auth()
  //   .createUserWithEmailAndPassword(email,password)
  //   .catch((err) => {
  //       switch(err.code){
  //         case "auth/email-already-in-use":
  //         case "auth/invalid-email":
  //             setEmailError(err.message);
  //             break;
  //         case "auth/weak-password":
  //             setPasswordError(err.message);
  //             break;
  //     }
  //   })
  // }

  // const handleLogout = () => {
  //   fire.auth().signOut()
  // }

  // const authListener = () => {
  //   fire.auth().onAuthStateChanged(user => {
  //     if(user){
  //       clearInputs()
  //       setUser(user)
  //     }else {
  //       setUser("")
  //     }
  //   })
  // }

  // useEffect( ()=> {
  //   authListener()
  // },[])

  return (
    <div className="App">
          <div className="App">
    </div>
      {/* {user ? (
            <Route exact path='/'>
              <Main handleLogout={handleLogout}></Main>
            </Route>
        // <Hero handleLogout={handleLogout}></Hero>
      ) : (
        <Login 
        email={email} 
        setEmail={setEmail} 
        setPassword={setPassword}
        handleLogin={handleLogin}
        handleSignUp={handleSignUp}
        hasAccount={hasAccount}
        setHasAccount={setHasAccount}
        emailError={emailError}
        passwordError={passwordError}
        >
        </Login>
      )} */}


      <Routes>
        <Route exact path='/' element={<Main></Main>}/>
        <Route path="/review" element={<Review></Review>}/>
        <Route path="/accommodation" element={<Accommodation></Accommodation>}/>
        <Route path="/travel" element={<Travel></Travel>}/>
        <Route path="/moretitle" element={<ViewMore></ViewMore>}/>
        <Route path='/:id' element={<div>잘못된 주소입니다.</div>}/> 
      </Routes>
    </div>
  );
}

export default App;
