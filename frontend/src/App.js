import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import StackOverflow from './components/StackOverflow'
import { BrowserRouter as Router,Route, Routes } from 'react-router-dom'; 
import ViewQuestion from './components/ViewQuestion'
import Question from './components/Add-Question/Question';
import Auth from './components/Auth';
import { useDispatch, useSelector } from "react-redux";
import { login, logout, selectUser } from "./features/userSlice";
import { auth } from "./firebase";
import { useEffect } from 'react';
import { Navigate } from 'react-router-dom';

// import Protected from './components/Protected'





function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(()=>{
    auth.onAuthStateChanged((authUser)=>{
      if (authUser){
        dispatch(login({
          uid: authUser.uid,
          photo: authUser.photoURL,
          displayName:authUser.displayName,
          email:authUser.email
        }))
      }else {
        dispatch(logout())
      }
    })
  },[dispatch])
  
  const PrivateRoute = ({ component: Component, ...rest }) => {
    <Route
      {...rest}
      render={(props) =>
        user ? (
          <Component {...props} />
        ) : (
          <Navigate
            to={{
              pathname: "/auth",
              state: {
                from: props.location,
              },
            }}
          />
        )
      }
    />
    };

  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
       <Route path="/" element={<StackOverflow />}/> 
       <Route path="/auth"  element={<Auth/>}/>
       
          {/* <Route path={user ? "/" : "/auth"} element={user ? StackOverflow : Auth} /> */}
          
          <Route path="/add-question" element={<Question/>}/>
          <Route path="/question" element={<ViewQuestion/>} />
          {/* <PrivateRoute exact path="/" component={StackOverflow} /> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;