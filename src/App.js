import logo from './logo.svg';
import './App.css';
import Login from './component/Login/Login';
import NavBar from './component/Home/NavBar/NavBar';
import Header from './component/Home/Header/Header';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './component/Home/Home/Home';
function App() {
  return (
   <Router>
     <Switch>
       <Route exact path="/" >
         {/* <NavBar></NavBar>
         <Header></Header> */}
         <Home></Home>
       </Route>
       <Route  path="/login">
         <Login></Login>
       </Route>
     </Switch>
   </Router>
  );
}

export default App;
