
import React, { useState, useEffect } from 'react';
import parse from 'html-react-parser';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Gioithieu from '../component/Gioithieu';
import Batdongsan from '../component/Batdongsan';
import Tuvanthietkexaydung from '../component/Tuvanthietkexaydung';
import Thietkecanhquan from '../component/Thietkecanhquan';
import Tintuc from '../component/Tintuc';
import Lienhe from '../component/Lienhe';
import axios from 'axios';


function Home() {
    const parse = require('html-react-parser');
    const [pro, setPro] = useState([]);
    useEffect(() => {
        axios.get(`http://noithattrung:8081/action.php?url=product`)
        .then(res => { 
            setPro(res.data);
        })
    }, []);

    const [about, setAbout] = useState([]);
    useEffect(() => {
        axios.get(`http://noithattrung:8081/action.php?url=gt`)
        .then(res => { 
            setAbout(res.data);
        })
    }, []);
    return (
        <Router> 
            <div className="root-home">
                <div className="container nerdvhome">
                    <div className="row">
                        <div className="col-md-4 col-sm-4 col-xs-4 leftdki">
                            <div className="trdangki">
                                <div className="tr_baogiahome">
                                    <div className="titdki">
                                        <h2>Đăng ký mua nhà đất chính chủ</h2>
                                    </div>
                                    <div className="wpform">
                                        <p>Mời bạn điền những thông tin bên dưới chuyên viên tư vấn sẽ trực tiếp liên hệ với quý khách</p>
                                        <form id="_frm_order" name="frm_order" className="frm f-space20" method="post">
                                            <div className="row input_baogia">
                                                <div className="col-md-12 col-sm-12 col-xs-12 tr_inputbgia">
                                                    <input type="text" id="full_name" autoComplete="off" name="full_name" placeholder="Họ tên" maxLength="250" />
                                                </div>
                                                <div className="col-md-12 col-sm-12 col-xs-12 tr_inputbgia">
                                                    <input type="text" id="tell" autoComplete="off" name="tell" placeholder="Số điện thoại" maxLength="20" />
                                                </div>
                                                <div className="col-md-12 col-sm-12 col-xs-12 tr_inputbgia">
                                                    <input type="text" id="add" autoComplete="off" name="add" placeholder="Địa chỉ" maxLength="250" />
                                                </div>
                                                <div className="col-md-12 col-sm-12 col-xs-12 tr_inputbgia">
                                                    <input type="email" id="email" autoComplete="off" name="email" placeholder="Email" maxLength="250" />
                                                </div>
                                            </div>
                                            <div className="btn_submit send_baogia">
                                                <input type="submit" id="_send_order" value="Gửi yêu cầu" name="send_order" />
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-3 col-xs-3 centergthieu">
                            <div className="trctergthieu">
                                <img src="images/gt.png" />
                            </div>
                        </div>
                        <div className="col-md-5 col-sm-5 col-xs-5 rightgthome">
                            {
                                about.map((number, key) =>
                                <div className="trabouthm" key={key}>
                                    <div className="titgithieu">
                                        <h2>Giới thiệu chung</h2>
                                        <p>Công ty bất động sản xin kính chào</p>
                                    </div>
                                    <div className="namedvhome">
                                        {() => parse(number.comment)}
                                        {/* {parse('<p>Hello world</p>')} */}
                                    </div>
                                    <p className="detailgthm"><Link to="/gioi-thieu">Xem thêm</Link></p>
                                </div>
                                )
                            }
                        </div>
                    </div>
                </div>
                <div className="container nerbdongsan">
                    <div className="titdatdai">
                        <h2>Bất động sản</h2>
                    </div>
                    <div className="row">
                        {
                            pro.map((number, key) =>
                                <div className="col-md-3 col-sm-3 col-xs-3 itembdshome" key={key}>
                                    <div className="trbdshome">
                                        <Link to="#">
                                            <div className="imgbdsan">
                                                <img src="images/682x454.jpg" title="" alt="" />
                                            </div>
                                            <div className="contentbds">
                                                <p className="namebdshm">{number.name}</p>
                                                <p className="dientichbdshm"><b>Diện tích: </b>{number.guarantee}m<sup>2</sup></p>
                                                <p className="giabdshm"><b>Giá: </b><span>{number.price}</span></p>
                                                <p className="diachibdshm"><b>Địa chỉ: </b><span>{number.img_note}</span></p>
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                            )
                        }
                    </div>
                </div>
                <Switch>
                    <Route exact path="/">
                    </Route>
                    <Route path="/gioi-thieu">
                        <Gioithieu />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}  
export default Home;