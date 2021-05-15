import React, { Component } from 'react';
import SectionChild from '../Section/SectionChild/SectionChild'
class Section2 extends Component {
    constructor(){
        super();
        this.dataSection = [
            {src: "assets/img/review/1.jpg", type: "Lập trình Front-End", link: "#review1"},
            {src: "assets/img/review/2.jpg", type: "Lập trình Back-End", link: "#review2"},
            {src: "assets/img/review/3.jpg", type: "Lập trình Mobile", link: "#review3"},
            {src: "assets/img/review/4.jpg", type: "Lịch Sử", link: "#review4"},
            {src: "assets/img/review/5.jpg", type: "Văn Học Việt Nam", link: "#review5"},
            {src: "assets/img/review/6.jpg", type: "Văn Học Nước Ngoài", link: "#review6"}
          ];
    }
    render() {
        return (
            <section className="page-section bg-light" id="portfolio">
                <div className="container">
                    <div className="text-center">
                        <h2 className="section-heading text-uppercase">Sách hay</h2>
                        <h3 className="section-subheading text-muted">"Một cuốn sách hay cho ta một điều tốt, một người bạn tốt cho ta một điều hay."</h3>
                    </div>
                    <div className="row">
                        {this.dataSection.map((data, index) => <SectionChild key={index} src={data.src} type={data.type} link={data.link} />)}
                    </div>
                </div>
            </section>

        );
    }
}
    

export default Section2;