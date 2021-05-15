import React, { Component } from 'react';
import Member from './Member/Member.js'
class MyTeam extends Component {
    constructor(){
        super();
        this.dataMember = [
            {src: "assets/img/team/1.jpg", name: "Trần Quang Hưng", positon: "Leader", mail: "mailto:trqhung2591@gmail.com", fb: "https://www.facebook.com/gnasche2509", messenger: "#!"},
            {src: "assets/img/team/2.jpg", name: "Phí Văn Minh", positon: "Content 1", mail: "mailto:Phiminh6c@gmail.com", fb: "https://www.facebook.com/profile.php?id=100014211606660", messenger: "#!"},
            {src: "assets/img/team/3.jpg", name: "Trần Đức Long", positon: "Content 1", mail: "mailto:Longrong2301@gmail.com", fb: "https://www.facebook.com/duclong.tran.2001", messenger: "#!"},
            {src: "assets/img/team/4.jpg", name: "Trần Lê Mạnh", positon: "Content 2", mail: "mailto:tranlemanh2607@gmail.com", fb: "https://www.facebook.com/manh.tranle.96", messenger: "#!"},
            {src: "assets/img/team/5.jpg", name: "Lê Duy Mạnh", positon: "Content 2", mail: "mailto:ldm18022001@gmail.com", fb: "https://www.facebook.com/melody1821", messenger: "#!"},
            {src: "assets/img/team/6.jpg", name: "Đặng Xuân Phú", positon: "Content", mail: "mailto:mrphu2001@gmail.com", fb: "https://www.facebook.com/PhuNope/", messenger: "#!"}
        ];
    }
    render() {
        return (
            <section className="page-section bg-light" id="team">
                <div className="container">
                    <div className="text-center">
                        <h2 className="section-heading text-uppercase">Đội Ngũ</h2>
                        <h3 className="section-subheading text-muted">"Không ai trong chúng ta thông minh như tất cả chúng ta. - <b>Ken Blanchard</b>"</h3>
                    </div>
                    <div className="row">
                        {this.dataMember.map((data, index) => <Member key={index} src={data.src} name={data.name} positon={data.positon} 
                                                            mail={data.mail} fb={data.fb} messenger={data.messenger} />)}
                    </div>  
                    <div className="row">
                        <div className="col-lg-8 mx-auto text-center"><p className="large text-muted">"Phải mất 2 hòn đá lửa để tạo ra ngọn lửa. <b>-Louisa May Alcott</b>"</p></div>
                    </div>
                </div>
            </section>

        );
    }
}

export default MyTeam;