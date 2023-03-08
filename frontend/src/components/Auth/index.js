import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";

// import { useHistory } from "react-router-dom";
import { auth, provider } from "../../firebase";
import React, { useState,useEffect } from 'react';
import './index.css';


function Index() {
  const navigate = useNavigate();
  const [register, setRegister] = useState(false);
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [username, setUsername] = useState("");
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  const handleSignInGoogle = () => {
    signInWithPopup(auth, provider).then((res) => {
     navigate('/')
     localStorage.setItem('login', true)

    })
    
     
  }
//   useEffect(()=>{
//     let login = localStorage.setItem('login', true);
//     if(!login){
//         navigate('/auth')
//     }
// })
  const handleRegister = (e) => {
    setError("")
    e.preventDefault();
    setLoading(true)
    if (email === "" || password === "" || username === "") {
      setError("Required field is missing")
      setLoading(false)
    } else {
      createUserWithEmailAndPassword(auth, email, password).then((res) => {
        setLoading(false)
        navigate("/");
        
        console.log(res)
      }).catch((error) => {
        console.log(error)
        setError(error.message)
        setLoading(false)
      })
    }
  }
  const handleSignIn = (e) => {
    e.preventDefault();
    setError("")
    setLoading(true)
    if (email === "" || password === "") {
      setError("Required field is missing")
      setLoading(false)
    } else {
      signInWithEmailAndPassword(auth, email, password).then((res) => {
        console.log(res)
        setLoading(false)
       navigate("/");
       
      }).catch((err) => {
        console.log(err.code)
        setError(error.message)
        setLoading(false)
      })
    }
  }
  return (
    <div className='auth'>
      <div className='auth-container'>
        <p>Add another way to log in using any of the following services.</p>
        <div className='sign-options'>
          <div className='single-option' onClick={handleSignInGoogle}>
            <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTgiIGhlaWdodD0iMTgiIHZpZXdCb3g9IjAgMCAxOCAxOCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0xNy42NCA5LjIwNWMwLS42MzktLjA1Ny0xLjI1Mi0uMTY0LTEuODQxSDl2My40ODFoNC44NDRhNC4xNCA0LjE0IDAgMCAxLTEuNzk2IDIuNzE2djIuMjU5aDIuOTA4YzEuNzAyLTEuNTY3IDIuNjg0LTMuODc1IDIuNjg0LTYuNjE1eiIgZmlsbD0iIzQyODVGNCIgZmlsbC1ydWxlPSJub256ZXJvIj48L3BhdGg+PHBhdGggZD0iTTkgMThjMi40MyAwIDQuNDY3LS44MDYgNS45NTYtMi4xOGwtMi45MDgtMi4yNTljLS44MDYuNTQtMS44MzcuODYtMy4wNDguODYtMi4zNDQgMC00LjMyOC0xLjU4NC01LjAzNi0zLjcxMUguOTU3djIuMzMyQTguOTk3IDguOTk3IDAgMCAwIDkgMTh6IiBmaWxsPSIjMzRBODUzIiBmaWxsLXJ1bGU9Im5vbnplcm8iPjwvcGF0aD48cGF0aCBkPSJNMy45NjQgMTAuNzFBNS40MSA1LjQxIDAgMCAxIDMuNjgyIDljMC0uNTkzLjEwMi0xLjE3LjI4Mi0xLjcxVjQuOTU4SC45NTdBOC45OTYgOC45OTYgMCAwIDAgMCA5YzAgMS40NTIuMzQ4IDIuODI3Ljk1NyA0LjA0MmwzLjAwNy0yLjMzMnoiIGZpbGw9IiNGQkJDMDUiIGZpbGwtcnVsZT0ibm9uemVybyI+PC9wYXRoPjxwYXRoIGQ9Ik05IDMuNThjMS4zMjEgMCAyLjUwOC40NTQgMy40NCAxLjM0NWwyLjU4Mi0yLjU4QzEzLjQ2My44OTEgMTEuNDI2IDAgOSAwQTguOTk3IDguOTk3IDAgMCAwIC45NTcgNC45NThMMy45NjQgNy4yOUM0LjY3MiA1LjE2MyA2LjY1NiAzLjU4IDkgMy41OHoiIGZpbGw9IiNFQTQzMzUiIGZpbGwtcnVsZT0ibm9uemVybyI+PC9wYXRoPjxwYXRoIGQ9Ik0wIDBoMTh2MThIMHoiPjwvcGF0aD48L2c+PC9zdmc+" alt="google" />
            <p>Login with google</p>

          </div>
          {/* <div className="single-option">
            <img
              alt="github"
              src="https://cdn.iconscout.com/icon/free/png-512/github-1521500-1288242.png?f=avif&w=256"
            />
            <p>Login with Github</p>
          </div>
          <div className="single-option">
            <img
              alt="facebook"
              src="https://cdn.iconscout.com/icon/free/png-512/github-1521500-1288242.png?f=avif&w=256"
            />
            <p>Login with Facebook</p>
          </div> */}
        </div>
        <div className='auth-login'>
          <div className='auth-login-container'>
            {
              register ? (<>
                <div className='input-field'>
                  <p>Username</p>
                  <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
                </div>
                <div className='input-field'>
                  <p>Email</p>
                  <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className='input-field'>
                  <p>Password</p>
                  <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                <button onClick={handleRegister} disabled={loading} style={{
                  marginTop: "10px"
                }}>
                  {loading ? "Registering..." : "Register"}</button></>)
                : (<>
                  <div className='input-field'>
                    <p>Email</p>
                    <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
                  </div>
                  <div className='input-field'>
                    <p>Password</p>
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                  </div>
                  <button onClick={handleSignIn} disabled={loading} style={{
                    marginTop: "10px"
                  }}>{loading ? "Logging in..." : "Login"}</button></>)
            }
            <p onClick={() => setRegister(!register)} style={{
              marginTop: "10px",
              textAlign: "center",
              color: "#0095ff",
              textDecoration: "underline",
              cursor: "pointer",
            }}>{register ? "Login" : "Register"}?</p>
          </div>
        </div>
        {error !== "" && (
          <p
            style={{
              color: "red",
              fontSize: "14px",
            }}
          >
            {error}
          </p>
        )}
      </div>

    </div>
  )
}

export default Index
