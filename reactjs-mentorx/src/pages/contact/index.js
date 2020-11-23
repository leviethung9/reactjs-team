import React from 'react'
import imgContact from "../../assets/images/home/tutor-1-02.png";

const Contact=()=> {
    return (
        <div>
            <div>
        {/* content */}
        {/* about-us */}
        <div className="container mt-50">
          <div className="about-us-main">
            <div className="row">
              <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
                <div className="img-about-us">
                  <img src={imgContact} className="img-fluid" alt="" />
                </div>
              </div>
              <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
                <div className="about-us-content">
                  <h3 className="entry-about-title">
                    Giới thiệu
                  </h3>
                  <p>
                    Mentor-X là chương trình đào tạo nguồn lực công nghệ thông tin chất lượng cao, bao
                    gồm nhiều khoá học: online ngắn hạnn hằm giúp bạn trở thành lập trình
                    viên chuyên nghiệp trong thời gian ngắn nhất.
                  </p>
                  <p>
                    Chúng tôi phát triển mô hình đào tạo dựa trên phương pháp học mô phỏng môi trường làm việc
                    thực tế để tất cả học viên đều “nhập cuộc” nhanh chóng với xu hướng công nghệ đang thay đổi
                    từng ngày. Học Với Chuyên Gia đặt mục tiêu đào tạo học viên vững kiến thức, giỏi kỹ năng,
                    đáp ứng toàn diện yêu cầu công việc và tự tin chinh phục những nhà tuyển dụng khó tính nhất.
                  </p>
                  <p>
                    Bằng việc tham gia bạn đã đồng ý với <a href="rules.html" style={{fontSize: '17px'}} className="link-to-rules">điều khoản &amp; nội quy</a>  của chúng tôi.
                  </p>
                  <div className="box-btn-about-us">
                    <a href="contact.html" className="read-more-btn"> Xem thêm </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* about-us end */}
        <div className="container mt-5">
          <div className="row">
            {/* map */}
            <div className="responsive-media">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7450.523161325157!2d105.78087342671839!3d20.98214906154175!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135accdab6f3ae7%3A0x60ddfd85d24b0c52!2zTeG7mSBMYW8sIEjDoCDEkMO0bmcsIEjDoCBO4buZaSwgVmnhu4d0IE5hbQ!5e0!3m2!1svi!2s!4v1604648787085!5m2!1svi!2s" width height={400} frameBorder={0} style={{border: 0}} allowFullScreen aria-hidden="false" tabIndex={0} />
            </div>
            {/* map  end*/}
            {/* contact */}
            <div className="col-lg-6 col-sm-12">
              {/* contact-info */}
              <div className="contact-info mt-5">
                <h2 className="heading-contact">
                  Liên hệ
                </h2>
                <h5 className="contact-text mt-4">
                  Luôn luôn lắng nghe ý kiến đóng góp của khách hàng để hoàn thiện hơn.
                </h5>
                <hr />
                <div className="contact-list mt-4">
                  <ul>
                    <li>
                      <p>
                        <i className="fas fa-map-marker-alt color-red" /> Mộ Lao - Hà Đông - Hà Nội
                      </p>
                    </li>
                    <li>
                      <p>
                        <i className="fa fa-phone-volume color-red" /> + 0123 456 789
                      </p>
                    </li>
                    <li>
                      <p>
                        <i className="far fa-envelope color-red" /> Demo@gmail.com
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
              {/* contact-info end */}
            </div>
            <div className="col-lg-6 col-sm-12">
              {/* form contact */}
              <form method="POST" className="mt-5 mb-20">
                <div className="form-group">
                  <label htmlFor>Họ và tên <span>*</span></label>
                  <input type="text" className="form-control " id placeholder />
                </div>
                <div className="form-group ">
                  <label htmlFor>Email <span>*</span></label>
                  <input type="email" className="form-control  " id placeholder />
                </div>
                <div className="form-group ">
                  <label htmlFor>Tiêu đề <span>*</span></label>
                  <input type="text" className="form-control  " id placeholder />
                </div>
                <div className="form-group">
                  <label htmlFor>Nội dung <span>*</span></label>
                  <textarea name id cols={30} rows={10} className="form-control" defaultValue={""} />
                </div>
                <div className="mt-5 ">
                  <button type="submit" className="btn btn-danger ">Phản hồi</button>
                </div>
              </form>
              {/* form contact end*/}
            </div>
            {/* contact end */}
          </div>
        </div>
        {/* content end */}
      </div>
        </div>
    )
}
export default Contact
