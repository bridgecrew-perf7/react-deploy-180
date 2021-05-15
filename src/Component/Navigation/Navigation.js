import React, { Component } from 'react';

class Navigation extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav">
                <div className="container">
                    <a className="navbar-brand js-scroll-trigger" href="#page-top" ><img src="assets/img/logo-nav.png" alt="" /></a>
                    <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    <i className="fas fa-bars ml-1" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarResponsive">
                        <ul className="navbar-nav text-uppercase ml-auto">
                            <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#services">Dịch Vụ</a></li>
                            <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#portfolio">Sách Hay</a></li>
                            <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#about">Lợi ích</a></li>
                            <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#team">Đội Ngũ</a></li>
                            <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#contact">Liên Hệ</a></li>
                        </ul>
                    </div>
                </div>
            </nav>

        );
    }
}

export default Navigation;