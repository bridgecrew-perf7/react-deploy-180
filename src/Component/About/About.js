import React, { Component } from 'react';
import Benefits from './Benifits/Benifits.js'

const right = "timeline-inverted";

class About extends Component {
    constructor(){
        super();
        this.dataBenefits = [
            {src: "assets/img/benefits/1.jpg", li: "", stt: "1", main: "Thúc đẩy trí não", sub: " Các nghiên cứu khoa học đã chỉ ra rằng việc đọc thường xuyên sẽ giúp làm chậm quá trình não lão hóa, hạ thấp khả năng mắc chứng Alzheimer. Giống như bất kì bộ phận nào, não cần được hoạt động để luôn khỏe mạnh."},
            {src: "assets/img/benefits/2.jpg", li: right, stt: "2", main: "Giảm stress", sub: "Dù đang đối mặt vấn đề lớn cỡ nào trong công việc, tình yêu hay gia đình, chỉ cần mở trang sách người đọc sẽ ngay lập tức bước vào một thế giới khác. Một cuốn sách hay sẽ giúp bạn thư giãn và quên đi mọi muộn phiền trong cuộc sống. "},
            {src: "assets/img/benefits/3.jpg", li: "", stt: "3", main: "Cung cấp kiến thức", sub: " Dù đọc chủ động hay bị động, những kiến thức đó chúng ta đều thu nạp ít hay nhiều. Sách cung cấp những tri thức có ích cho người đọc – một yếu tố góp phần hoàn thiện nhiều mặt trong cuộc sống như sự nghiệp, tài chính, sức khỏe…"},
            {src: "assets/img/benefits/4.jpg", li: right, stt: "4", main: "Mở rộng vốn từ", sub: "Đọc càng nhiều bạn càng có vốn từ lớn. Lưu loát trong giao tiếp là một trong những yếu tố quyết định đến sự thành công trong cuộc sống. Càng ăn nói gãy gọn bạn càng tự tin."},
            {src: "assets/img/benefits/5.jpg", li: "", stt: "5", main: "Củng cố trí nhớ", sub: "Khi đọc một cuốn sách, bạn sẽ phải nhớ nội dung, ý chính, nhân vật, các lớp nghĩa, bài học…. Mỗi lượng thông tin mới được não thu nhập, cơ quan chỉ huy sẽ tạo ra những tế bào não mới."},
            {src: "assets/img/benefits/6.jpg", li: right, stt: "6", main: " Tăng khả năng tập trung", sub: "Trong xã hội hiện đại, một người thường phải làm nhiều việc cùng lúc, kỹ năng multi-tasking đã trở thành một yếu tố quan trọng trong đời sống. Đọc sách giúp tăng khả năng tập trung, củng cố sự phối hợp giữa các giác quan và bộ phận cơ thể."}
        ];
    }
    render() {
        return (
            <section className="page-section" id="about">
                <div className="container">
                    <div className="text-center">
                        <h2 className="section-heading text-uppercase">Lợi ích</h2>
                        <h3 className="section-subheading text-muted">"Việc đọc rất quan trọng. Nếu bạn biết cách đọc, cả thế giới sẽ mở ra cho bạn."</h3>
                    </div>
                    <ul className="timeline">
                        {this.dataBenefits.map((data, index) => <Benefits key={index} src={data.src} li={data.li} stt={data.stt} main={data.main} sub={data.sub} />)}
                        <li className="timeline-inverted">
                            <div className="timeline-image">
                                <h4>
                                    Sách là
                                    <br />
                                    Một phần của cuộc sống !
                                    <br />
                                </h4>
                            </div>
                        </li>
                    </ul>
                </div>
            </section>

        );
    }
}

export default About;