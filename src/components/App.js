import React, {Component} from "react";
import {render} from "react-dom";

import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom";

import {Provider} from 'react-redux';

import HomePage from "./HomePage";
import MyGarage from "./MyGarage";
import CreateGarage from "./CreateGarage";
import LoginPage from "./Login"
import SignUpPage from "./SignUp"
import ActivatePasswordPage from "./ActivateAccount"
import ResetPasswordPage from "./ResetPassword"
import ResetPasswordConfirmPage from "./ResetPasswordConfirmPage"

import Navbar from "./NavigationBar";

import '../../static/css/index.css'

import store from "../store";


export default class App extends Component {
    constructor(props){
        super(props);
    }

    render(){
        return (
        <>
            
            <Navbar/>
            <div className="container" style={{"height": "100%"}}>
            
                <Routes>
                    <Route exact path="/" element={<HomePage/>}/>
                    <Route exact path="/mygarage" element={<MyGarage/>}/>
                    <Route exact path="/creategarage" element={<CreateGarage/>}/>
                    <Route exact path="/login" element={<LoginPage/>}/>
                    <Route exact path="/signup" element={<SignUpPage/>}/>
                    <Route exact path="/reset_password" element={<ResetPasswordPage/>}/>
                    <Route exact path="/activate/:uid/:token" element={<ActivatePasswordPage/>}/>
                    <Route exact path="/password/reset/confirm/:uid/:token" element={<ResetPasswordConfirmPage/>}/>
                 </Routes>
            </div>
        </>
        );
    }
};


const appDiv = document.getElementById("app")

render((
<Provider store={store}>
    <Router>
        <App/>
    </Router>
</Provider>
), appDiv);