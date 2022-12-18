import React, {Component} from "react";
import {render} from "react-dom";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Redirect
} from "react-router-dom";

import HomePage from "./HomePage";
import MyGarage from "./MyGarage";
import CreateGarage from "./CreateGarage";

import Navbar from "./NavigationBar";

export default class App extends Component {
    constructor(props){
        super(props);
    }

    render(){
        return (
        <div>
            <Navbar/>
            <Router>
                <Routes>
                    <Route exact path="/" element={<p> This is the home page </p>}/>
                    <Route exact path="/mygarage" element={<MyGarage/>}/>
                    <Route exact path="/creategarage" element={<CreateGarage/>}/>
                 </Routes>
            </Router>
        </div>
        );
    }
};


const appDiv = document.getElementById("app")

render(<App/>, appDiv);