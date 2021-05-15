import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <header className="masthead">
                <p id="page-top"></p>
                <div className="container">
                    <div className="masthead-subheading">Chào mừng đến với Cửa hàng sách của chúng tôi !</div>
                    <div className="masthead-heading text-uppercase">Chúc bạn một ngày tốt lành</div>
                    <a className="btn btn-primary btn-xl text-uppercase js-scroll-trigger"  href="#services">Xem Ngay</a>
                </div>
            </header>

        );
    }
}

export default Header;