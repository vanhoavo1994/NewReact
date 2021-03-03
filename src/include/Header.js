
import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import '../index.css';
import Home from '../component/Home';
import Gioithieu from '../component/Gioithieu';
import Batdongsan from '../component/Batdongsan';
import Tuvanthietkexaydung from '../component/Tuvanthietkexaydung';
import Thietkecanhquan from '../component/Thietkecanhquan';
import Tintuc from '../component/Tintuc';
import Lienhe from '../component/Lienhe';
import axios from 'axios';

function Header() {
    const [hoa, setHoa] = useState(0);
    const [persons, setPersons] = useState([]);
    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/users`)
        .then(res => { 
        setPersons(res.data);
        })
    }, []);

    return (
        <Router>
            <div>
            <section id="tongquattc">
                <header className="header headerchuarepon">
                    <div className="container-fluid fluidhedau">
                        <div className="container nerheaddau">
                            <div className="row">
                                <div className="col-md-2 col-sm-2 col-xs-2 leftlogo">
                                    <div className="imghead">
                                        <Link to="/"><img src="../images/logo.png" alt="" className="img_logo" /></Link>
                                    </div>
                                </div>
                                <div className="col-md-7 col-sm-7 col-xs-7 centercty">
                                    <div className="namectygi">
                                        <h1>CÔNG TY TNHH ERIC LAND</h1>
                                        <p>Lô 03 B2.19 Khu tái định cư số 06, Xã Hoà Sơn, Huyện Hoà Vang, Đà Nẵng</p>
                                    </div>
                                </div>
                                <div className="col-md-3 col-sm-3 col-xs-3 rightsdt">
                                    <div id="hotline">
                                        <h2>Hotline</h2>
                                        <p>0935998077</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container-fluid fuilmenu wow">
                        <div className="container nermenu">
                            <div className="row">
                                <div className="col-md-10 col-sm-10 col-xs-12 tongheadhed">
                                    <nav className="navigation" role="navigation">
                                        <ul className="menucll">
                                            <li>
                                                <Link to="/"><span>Trang chủ</span></Link>
                                            </li>
                                            <li>
                                                <Link to="/gioi-thieu"><span>Giới thiệu</span></Link>
                                            </li>
                                            <li>
                                                <Link to="/bat-dong-san"><span>Bất động sản</span></Link>
                                                <ul>
                                                    <li>
                                                        <Link to="/nha-o-chung-cu"><span>Nhà ở chung cư</span></Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/dat-sao-dat-mau"><span>Đất sào - đất mẫu</span></Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/dat-nen"><span>Đất nền</span></Link>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li>
                                                <Link to="/tu-van-thiet-ke-xay-dung"><span>Tư vấn thiết kế xây dựng</span></Link>
                                                <ul>
                                                    <li>
                                                        <Link to="/ky-gui-nha-dat"><span>Ký gửi nhà đất</span></Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/dan-dung"><span>Dân dụng</span></Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/cong-nghiep"><span>Công nghiệp</span></Link>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li>
                                                <Link to="/thiet-ke-canh-quan"><span>Thiết kế cảnh quan</span></Link>
                                                <ul>
                                                    <li>
                                                        <Link to="/cay-cong-trinh"><span>Cây công trình</span></Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/thiet-ke"><span>Thiết kế</span></Link>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li>
                                                <Link to="/tin-tuc"><span>Tin tức</span></Link>
                                            </li>
                                            <li>
                                                <Link to="/lien-he"><span>Liên hệ</span></Link>
                                            </li>
                                        </ul>
                                    </nav>
                                </div>
                                <div className="col-md-2 col-sm-2 col-xs-2 rightsearch">
                                    <div className="inputhead">
                                        <form method="get" action="">
                                            <input type="text" name="k" autoComplete="off" placeholder="Tìm kiếm" className="inputnhap" />
                                            <input type="submit" name="" value="" className="nuttk" />
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>
            </section>
                <Switch>
                    <Route exact path="/">
                        {/* <Home /> */}
                    </Route>
                    <Route path="/gioi-thieu">
                        <Gioithieu />
                    </Route>
                    <Route path="/bat-dong-san">
                        <Batdongsan />
                    </Route>
                    <Route path="/tu-van-thiet-ke-xay-dung">
                        <Tuvanthietkexaydung />
                    </Route>
                    <Route path="/thiet-ke-canh-quan">
                        <Thietkecanhquan />
                    </Route>
                    <Route path="/tin-tuc">
                        <Tintuc />
                    </Route>
                    <Route path="/lien-he">
                        <Lienhe />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}
export default Header;
