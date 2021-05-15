
import './App.css';
import React, { Component } from 'react';
import Navigation from './Component/Navigation/Navigation.js';
import Header from './Component/Header/Header.js';
import Section1 from './Component/Section/Section1.js';
import Section2 from './Component/Section/Section2.js';
import About from './Component/About/About.js';
import MyTeam from './Component/MyTeam/MyTeam.js';
import Footer from './Component/Footer/Footer.js';
import Contact from './Component/Contact/Contact.js';
import Review from './Component/Review/Review.js';

class App extends Component {
  constructor() {
    super();
    this.linked = [
      {
        review: "review1", fsrc1: "assets/img/review/1-1.jpg", fcontent1: "Thiết kế web responsive là tiêu chuẩn mới để xây dựng trang web. Hơn 50% thế giới truy cập Internet trên thiết bị di động thay vì máy tính để bàn và con số này đang tăng lên nhanh chóng. Trong cuốn sách lập trình web này, bạn sẽ tìm hiểu tất cả các nguyên tắc cơ bản của hai ngôn ngữ quan trọng này: HTML5 và CSS3. Chúng là xương sống của bất kỳ trang web nào và chúng quyết định khá nhiều về cách toàn bộ trang web trông, cảm nhận và vận hành. Bạn sẽ tìm hiểu các công cụ và kỹ thuật tốt nhất để sử dụng cho phát triển web hiện đại, cùng với cách lập kế hoạch trang web của bạn.", ffeel1: "Điều này có thể hơi cao cấp cho một người mới bắt đầu nhưng nó chắc chắn là một nguồn tài nguyên quý giá để theo. Tôi muốn giới thiệu cuốn sách lập trình web này cùng với cuốn tiếp theo như một cặp tài nguyên để học phát triển HTML / CSS.", fauthor1: "Ben Frain", fyear1: "--",
        fsrc2: "assets/img/review/1-2.jpg", fcontent2: "Một cuốn sách lập trình web khác mà tôi giới thiệu cùng tác giả là JavaScript & jQuery. Điều này đưa bạn đến cấp độ học tập tiếp theo bằng cách đẩy bạn vào lãnh thổ của JavaScript.Nhiều lập trình viên đồng ý rằng JS rất giống ngôn ngữ lập trình, do đó, đây là một bước tiến từ công việc phát triển HTML / CSS đơn giản hơn. Khi bạn viết mã JS, bạn đang viết các tập lệnh để tạo các hành vi trên trang web của mình.", ffeel2: "Cuốn sách này bắt đầu từ những điều cơ bản của JavaScript và từ từ đưa bạn vào thư viện jQuery. Đây là một công cụ miễn phí sẽ giúp bạn xây dựng trang web nhanh hơn và dễ dàng hơn với ít dòng code hơn.", fauthor2: "Jon Duckett", fyear2: "--"
      },
      {
        review: "review2", fsrc1: "assets/img/review/1-3.jpg", fcontent1: "Với việc phát hành PHP 7, bạn nên học cách xây dựng nhiều ứng dụng web tối ưu hóa hơn. Hầu hết các cuốn sách trong danh sách này bao gồm các nguyên tắc cơ bản của PHP rất tốt và những nền tảng này không thay đổi ngay cả trong các phiên bản mới hơn.Tuy nhiên PHP 7 nhanh hơn rất nhiều và thật tốt khi biết cách phát triển PHP trong tương lai. Hiện tại nó đang ở phiên bản thứ 5 với 580 trang và hàng tấn nội dung trên phiên bản PHP 7 mới hơn. Bạn sẽ tìm hiểu về các kỹ thuật OOP, các mẫu kiến trúc web phổ biến và cách giải quyết vấn đề với các giải pháp tốt nhất.", ffeel1: "Chỉ chọn cuốn sách lập trình web này nếu bạn thực sự nỗ lực tiến xa hơn với PHP và thậm chí có thể coi phát triển PHP là một nghề nghiệp nghiêm túc.", fauthor1: "Matt Zandstra", fyear1: "--",
        fsrc2: "assets/img/review/1-4.jpg", fcontent2: "Một trong những công nghệ mới nhất trong việc phát triển back-end là Node.js. Thư viện này cho phép bạn xây dựng các trang web hoàn toàn do JS cung cấp.Cuốn sách lập trình web này rất đồ sộ và là một trong những phần giới thiệu kỹ thuật hơn là thư viện. Bạn nên có các kỹ năng lập trình JavaScript rất mạnh trước khi nghĩ đến việc học Node.Nó đòi hỏi một môi trường máy chủ đặc biệt có thể gây khó khăn khi thiết lập, chưa kể bạn cũng cần học cách kết nối ngôn ngữ này vào cơ sở dữ liệu và các chương trình liên quan. Nhưng cuối cùng, điều này làm tăng thêm một môi trường mạnh mẽ nơi JavaScript thống trị tối cao.", ffeel2: "Nếu bạn là người hoàn toàn mới để phát triển web, cá nhân tôi khuyên bạn nên sử dụng PHP trước. Đó là ngôn ngữ back-end dễ nhất để học và nó là ngôn ngữ phổ biến nhất trong tất cả mọi thứ.Nhưng nếu bạn muốn tìm hiểu Node thì cuốn sách này sẽ giúp bạn tìm hiểu tất cả các nguyên tắc cơ bản cộng thêm một chút nữa.", fauthor2: "Alex Young & Marc Harter", fyear2: "--"
      },
      {
        review: "review3", fsrc1: "assets/img/review/1-5.jpg", fcontent1: "Tất cả những điều cơ bản bạn cầm nắm vững đều có trong cuốn sách này như : Kiến thức cơ bản về Playground, Giao thức & lập trình hướng giao thức, Xử lý lỗi, Lập trình chức năng.........", ffeel1: "Trong cuốn sách này, bạn sẽ học những điều cơ bản về Swift từ việc bắt đầu với sân chơi cho đến các thao tác đơn giản để xây dựng các kiểu của riêng bạn. Mọi thứ bạn sẽ học là trung lập với nền tảng; bạn sẽ hiểu rõ về Swift vào cuối cuốn sách này và bạn sẽ sẵn sàng chuyển sang bất kỳ nền tảng ứng dụng nào mà bạn quan tâm.", fauthor1: "--", fyear1: "--",
        fsrc2: "assets/img/review/1-6.jpg", fcontent2: "Kotlin là ngôn ngữ hiện đại thú vị của JetBrains, người tạo ra IntelliJ IDEA, nền tảng của nhiều IDE phổ biến như Android Studio và PyCharm. Kể từ khi Google chấp nhận Kotlin làm ngôn ngữ chính thức cho Android, động lực đằng sau Kotlin đã không còn trên bảng xếp hạng.Kotlin hỗ trợ nhiều nền tảng, bao gồm Android, web, back-end và thậm chí cả iOS. Khi đọc cuốn sách này, bạn sẽ sẵn sàng sử dụng Kotlin trên bất kỳ và tất cả các nền tảng này.", ffeel2: " Cuốn sách này dành cho những người mới bắt đầu hoàn toàn về Kotlin. Không cần kinh nghiệm lập trình trước!", fauthor2: "--", fyear2: "--"
      },
      {
        review: "review4", fsrc1: "assets/img/review/1-7.jpg", fcontent1: "Bộ sách hay về lịch sử Việt Nam Bảo Táp Triều Trần được ra mắt lần đầu cả bộ vào năm 2003, và cho đến nay đã được tái bản nhiều lần để đáp ứng nhu cầu của bạn đọc yêu thích lịch sử. Đặc biệt, bộ sách này đã vinh dự được nhận giải thưởng Bùi Xuân Phái – Vì tình yêu Hà Nội.Bộ sách này bao gồm 6 tập: Bão táp cung đình ; Đuổi quân Mông Thái ; Thăng Long nổi giận ; Huyết chiến Bạch Đằng ; Huyền Trân công chúa ; Vương triều sụp đổ. Khắc họa rõ nét từ khi nhà Trần ra đời tới khi kết thúc sứ mệnh lịch sử 175 năm tồn tại.", ffeel1: "Bộ sách này là tiêu biểu khắc họa rõ nét một triều đại từ hưng thịnh đến lúc kết thúc sứ mệnh.", fauthor1: "Hoàng Quốc Hải", fyear1: "--",
        fsrc2: "assets/img/review/1-8.jpg", fcontent2: "Bộ VIỆT-NAM SỬ-LƯỢC này, soạn-giả chia ra làm 5 thời-đại. Thời đại-thứ nhất là Thượng-cổ thời-đại, kể từ họ Hồng-bàng cho đến hết đời nhà Triệu. Trong thời-đại ấy, từ chương thứ III, bàn về xã-hội nước Tàu trước đời nhà Tần, phần nhiều là những chuyện hoang-đường huyền-hoặc cả. Những nhà chép sử đời trước cũng theo tục truyền mà chép lại, chứ không có di-tích gì mà khảo-cứu cho đích-xác. Tuy vậy, soạn-giả cũng cứ theo sử cũ mà chép lại, rồi cũng phê-bình một đôi câu để tỏ cho độc-giả biết rằng những chuyện ấy không nên cho là xác-thực.", ffeel2: "Tất cả đều được tục truyền cho nên chúng ta không nên cho là xác thực.", fauthor2: "Trần Trọng Kim", fyear2: "1919"
      },
      {
        review: "review5", fsrc1: "assets/img/review/1-9.jpg", fcontent1: "Chuyện xảy ra ở Cà Mau năm 1894. Ông Bạch Khiếu Nhàn là người giàu có, sanh được một cô con gái và gả cho Tri phủ sở tại, nhưng sau khi sanh Bạch Tuyết cô ta lại qua đời một cách lạ lùng. Tình cờ ông Khiếu Nhàn gặp Phan Chí Ðại từ Vĩnh Long xuống kiếm việc làm, thấy chàng là người hiếu nghĩa nên mời về ở nhà mình và xin cho chàng làm thầy ký tại dinh Tri phủ. Chí Ðại được ông phủ trọng dụng.Vợ sau của ông phủ là người tham lam. Bà ta biết nếu ông Khiếu Nhân chết thì Bạch Tuyết là người cháu duy nhứt sẽ hưởng trọn gia tài của ông, bèn nghĩ kế gả nàng cho cháu ruột của bà. Bạch Tuyết vốn nghi ngờ dì ghẻ đã giết mẹ nàng để giựt chồng và lại thầm yêu Chí Ðại, nên không bằng lòng. Bà Phủ tìm cách nói quan Phủ đuổi Chí Ðại đi khỏi Cà Mau để chia rẽ. Trong thời gian ông ngọai đi xa, Bạch Tuyết bỏ nhà trốn theo Chí Ðại và nuôi chí báo thù cho mẹ.......", ffeel1: "Bọn mình đều dốt văn, nên không biết nêu cái gì .!", fauthor1: "Hồ Biểu Chánh", fyear1: "1912",
        fsrc2: "assets/img/review/1-10.jpg", fcontent2: "Theo ông Hồ Văn Kỳ Thoại, cháu đích tôn của tác giả thì truyện „Ái tình miếu“ được phỏng theo chuyện có thật của một người láng giềng, lúc ông sống ở Bến Súc, vùng đồn điền cao su Bến Cát.Phúc đang học bên Pháp, được tin cha qua đời nên bỏ học trở về nhà để giúp đỡ mẹ. Trong thời gian ở Pháp cha mẹ Phúc có hứa hôn cho Phúc với Hạnh, con gái của một chủ đồn điền cao su. Khi về nước Phúc đến thăm viếng vị hôn thê của mình. Qua sự gặp gỡ đó Phúc yêu Hạnh và dự định sẽ cưới Hạnh làm vợ.Một thời gian sau gia đình Phúc được tin cô Hạnh bội hôn, lấy một người chồng có địa vị. Phúc thất tình nên thù oán tất cả đàn bà con gái và chỉ lo làm vườn rẫy để quên mối tình cũ....", ffeel2: "Bọn mình đều dốt văn, nên không biết nêu cái gì .!", fauthor2: "Hồ Biểu Chánh", fyear2: "1912"
      },
      {
        review: "review6", fsrc1: "assets/img/review/1-11.jpg", fcontent1: "Chiếc nhẫn tình cờ.", ffeel1: "Bọn mình đều dốt văn, nên không biết nêu cái gì .!", fauthor1: "Arthur Conan Doyle", fyear1: "1887",
        fsrc2: "assets/img/review/1-12.jpg", fcontent2: " Con chó của dòng họ Baskerville.", ffeel2: "Bọn mình đều dốt văn, nên không biết nêu cái gì .!", fauthor2: "Arthur Conan Doyle", fyear2: "1901"
      }
    ];
  }
  render() {
    return (
      <div className="MyProject">
        <Navigation />
        <Header />
        <Section1 />
        <Section2 />
        <About />
        <MyTeam />
        <Contact />
        <Footer />
        {this.linked.map((data, index) => <Review key={index} review={data.review} fsrc1={data.fsrc1} fcontent1={data.fcontent1} ffeel1={data.ffeel1} fauthor1={data.fauthor1} fyear1={data.fyear1}
          fsrc2={data.fsrc2} fcontent2={data.fcontent2} ffeel2={data.ffeel2} fauthor2={data.fauthor2} fyear2={data.fyear2} />)}
      </div>
    );
  }
}

export default App;
