import React from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { useContext, useState } from 'react';
import "./Login.css"
// import { emailContext } from "../../App";
import { useHistory, useLocation } from "react-router";
// import { faFacebookSquare, faGoogle } from "@fortawesome/free-brands-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from 'react-router-dom';
// import logos from '../../logos/Group 1329.png'
// import logos from '../../../images/output-onlinegiftools.gif'
import './Login.css'
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}
const Login = () => {
    let history = useHistory();
    let location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };



    // const [email, setEmail] = useContext(emailContext)
    // console.log('email of', email);



    const [user, setUser] = useState({
        name: "",
        email: "",
        password: "",
        error: "",
        success: false

    });

    const [newUser, setNewUser] = useState(false)




    //saving data from input to state
    const handleBlur = (e) => {
        let isValid = false;
        if (e.target.name === 'email') {

            isValid = /\S+@\S+\.\S+/.test(e.target.value)

        }
        if (e.target.name === 'password') {
            const passLength = e.target.value.length > 6;
            const passCheck = /\d{1}/.test(e.target.value);
            isValid = passLength && passCheck;

            console.log('from password', isValid);
        }
        if (isValid) {
            const newUser = { ...user };
            newUser[e.target.name] = e.target.value;
            setUser(newUser);

        }
    }

    //sign up 
    const handleSubmit = (e) => {
        console.log(user.ema);
        if (newUser && user.email && user.password) {
            firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
                .then((userCredential) => {
                    // Signed in 
                    var user = userCredential.user;
                    const newUserInfo = { ...user }
                    newUserInfo.success = true;
                    newUserInfo.error = '';
                    setUser(newUserInfo);
                    console.log(user);
                    // setEmail(user.email);
                    history.replace(from);


                })
                .catch((error) => {
                    var errorCode = error.code;
                    var errorMessage = error.message;
                    const newUserInfo = { ...user }
                    newUserInfo.success = false;
                    newUserInfo.error = error.message;
                    setUser(newUserInfo);
                    console.log(errorCode, errorMessage);
                    // ..
                });
        }
        if (!newUser && user.email && user.password) {
            firebase.auth().signInWithEmailAndPassword(user.email, user.password)
                .then((userCredential) => {
                    // Signed in
                    var user = userCredential.user;
                    const newUserInfo = { ...user }
                    newUserInfo.success = true;
                    newUserInfo.error = '';
                    setUser(newUserInfo);
                    console.log(user);
                    // setEmail(user.email);
                    history.replace(from);



                    // console.log(user.name);
                    // ...
                })
                .catch((error) => {
                    var errorCode = error.code;
                    var errorMessage = error.message;
                    const newUserInfo = { ...user }
                    newUserInfo.success = false;
                    newUserInfo.error = error.message;
                    setUser(newUserInfo);
                    console.log(errorCode, errorMessage);

                });
        }
        e.preventDefault();
    }

   

    

    return (
        <div>
            <div className="containers">

                {/* <img src={} alt="" /> */}
                <br /><br />

                <input type="checkbox" onClick={() => setNewUser(!newUser)} name="newUser" id="" />
                <label htmlFor="newUser">{' '} Click Here To Sign Up </label>

                <form onSubmit={handleSubmit} >
                    <br />
                    {(newUser) && <input onBlur={handleBlur} name="name" style={{ backgroundColor: '', borderRadius: '5px' }} type="text" placeholder="Name" />}

                    <br /> <br />

                    <input onBlur={handleBlur} name="email" style={{ backgroundColor: '', borderRadius: '5px' }} type="text" placeholder="Email" required />

                    <br /> <br />

                    <input onBlur={handleBlur} name="password" style={{ backgroundColor: '', borderRadius: '5px' }} type="password" placeholder="Password" required />

                    <br /><br />

                    {(newUser) && <input onBlur={handleBlur} name="confirm password" style={{ backgroundColor: '', borderRadius: '5px' }} type="password" placeholder="Confirm Password" required />}

                    <br /><br />

                    <input style={{ width: '190px' }} type="submit" className="btn btn-danger" value={newUser ? 'Sign Up' : 'Sign In'} />

                </form>
                <p className="text-danger">{user.error}</p>
                {
                    (user.success) && <p className="text-success">success</p>
                }
                <br />


                <br /><br /><br /><br />
                <Link to="/home"><h4 className="login-home">Back To Home?</h4></Link>
            </div>
        </div>
    );
};

export default Login;