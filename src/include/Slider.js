import React, { useState, useEffect } from 'react';
import $ from 'jquery';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from '../component/Home';
function Slider() {
    return (
        <Router> 
            <div id="wowslider-container1">
                <div className="ws_images">
                    <ul>
                        <li>
                            <img src="images/sl11.jpg" alt="" title="" id="wows1_0"/>
                        </li>
                        {/* <li>
                            <img src="images/sl2.png" alt="" title="" id="wows1_1"/>
                        </li>
                        <li>
                            <img src="images/sl1.jpg" alt="" title="" id="wows1_2"/>
                        </li> */}
                    </ul>
                </div>
            </div>
            <Switch>
                <Route exact path="/">
                </Route>
            </Switch>
        </Router>
    );
}

export default Slider;

