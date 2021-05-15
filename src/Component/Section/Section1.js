import React, { Component } from 'react';

class Section1 extends Component {
    render() {
        return (
            <section className="page-section" id="services">
                <div className="container">
                    <div className="text-center">
                        <h2 className="section-heading text-uppercase">Dịch Vụ</h2>
                        <h3 className="section-subheading text-muted">"Khách hàng sẽ quên những điều bạn làm. Nhưng họ sẽ không bao giờ quên những cảm nhận mà bạn mang đến cho họ" <b>- Maya Angelou</b></h3>
                    </div>
                    <div className="row text-center">
                        <div className="col-md-4">
                            <span className="fa-stack fa-4x">
                                <i className="fas fa-circle fa-stack-2x text-primary" />
                                <i className="fas fa-book-open fa-stack-1x fa-inverse" />
                            </span>
                            <h4 className="my-3">Review</h4>
                            <p className="text-muted">Chúng tôi mang đến cho bạn những tri thức tuyệt vời nhất mà vẫn còn ẩn dấu.</p>
                        </div>
                        <div className="col-md-4">
                            <span className="fa-stack fa-4x">
                                <i className="fas fa-circle fa-stack-2x text-primary" />
                                <i className="fas fa-archive fa-stack-1x fa-inverse" />
                            </span>
                            <h4 className="my-3">Thuê Sách</h4>
                            <p className="text-muted">Bạn có thể thuê bất cứ loại sách nào bạn muốn.</p>
                        </div>
                        <div className="col-md-4">
                            <span className="fa-stack fa-4x">
                                <i className="fas fa-circle fa-stack-2x text-primary" />
                                <i className="fas fa-handshake fa-stack-1x fa-inverse" />
                            </span>
                            <h4 className="my-3">Coming soon</h4>
                            <p className="text-muted">Đang chờ....</p>
                        </div>
                    </div>
                </div>
            </section>

        );
    }
}

export default Section1;