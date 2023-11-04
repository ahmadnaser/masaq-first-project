import { useState } from 'react'
import Home from "./Home"
import Login from "./Login"
import Register from "./Register"
import Logout from "./Logout"
import Navbar from './Navbar'
import './App.css'
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import UserContext from './UserContext';

function App() {

  let _user = JSON.parse(localStorage.getItem("user"));
  let isLoggedIn = false;

  if (_user) {
    //useEffect to validate the user token
    isLoggedIn = true;
  }

  const [user,setUser] = useState({
    isAuthenticated:isLoggedIn
  })

  return (
    <UserContext.Provider value={{user,setUser}}>
    <Router>
     <Navbar/>
     <Routes>
     <Route exact path="/" element={ <Home />} />
     <Route path="/account" element={ <Login />} />
     <Route path="/logout" element={<Logout />} />
     <Route path="/register" element={<Register />} />
     </Routes>
    </Router>
    </UserContext.Provider>
  )
}

export default App
