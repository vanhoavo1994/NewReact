import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FaAccusoft } from 'react-icons/fa';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { FaMobileAlt } from 'react-icons/fa';
import { FaEnvelopeOpen } from 'react-icons/fa';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from '../component/Home';
function Footer() {
    return (
        <Router> 
            <footer className="foter">
                <div className="container-fluid ft_home"> 
                    <div className="container nerdauft">
                        <div className="row endfooter">
                            <div className="col-md-4 col-sm-4 col-xs-12 second_ft">
                                <div className="item_second_ft">
                                    <h4>Thông tin</h4>
                                    <p><FaAccusoft /> CÔNG TY TNHH ERIC LAND</p>
                                    <p><FaMapMarkerAlt /> Lô 03 B2.19 Khu tái định cư số 06, Xã Hoà Sơn, Huyện Hoà Vang, Đà Nẵng</p>
                                    <p><FaMobileAlt /> 0935998077</p>
                                    <p><FaEnvelopeOpen /> ericland@gmail.com</p>
                                    <div className="connect_us">
                                        <ul className="iconxhoian1">
                                            <li><Link to="#" target="_blank"><img src="../images/fb.svg" /></Link></li>
                                            <li><Link to="#" target="_blank"><img src="../images/in.svg" /></Link></li>
                                            <li><Link to="#" target="_blank"><img src="../images/gg.svg" /></Link></li>
                                            <li><Link to="#" target="_blank"><img src="../images/tw.svg" /></Link></li>
                                            <li><Link to="#" target="_blank"><img src="../images/yt.svg" /></Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 col-sm-4 col-xs-12 five_ft">
                                <div className="itemfvfooter">
                                    <h6>Facebook</h6>
                                    <div className="thirdfter">
                                        <div className="fb-page" data-href="https://www.facebook.com/facebook/" data-width="340" data-hide-cover="false" data-show-facepile="true"></div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 col-sm-12 col-xs-12 third_ft">
                                <div className="item_third_footer">
                                    <h5>Map</h5>
                                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3833.986657734327!2d108.20080181438526!3d16.0661821437882!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3142184d30cf6aeb%3A0x14300211468660fb!2zNTYgxJBp4buHbiBCacOqbiBQaOG7pywgQ2jDrW5oIEdpw6FuLCBRLiBUaGFuaCBLaMOqLCDEkMOgIE7hurVuZyA1NTAwMDAsIFZp4buHdCBOYW0!5e0!3m2!1svi!2s!4v1560180762655!5m2!1svi!2s" width="100%" height="250"></iframe>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container-fluid fluidendft">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6 col-sm-6 col-xs-6 trfluidend">
                                Copyright © 2020 ERIC LAND. All Right Reserved
                            </div>
                            <div className="col-md-6 col-sm-6 col-xs-6 righmeta">
                                Designed and Maintained by SASS
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
            <Switch>
                <Route exact path="/">
                </Route>
            </Switch>
        </Router>
    );
}

(function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.src = "//connect.facebook.net/vi_VN/sdk.js#xfbml=1&version=v2.5";
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));


export default Footer;
  