import React from "react";
import "./footer.css";


export const Footer = () => {
  return (
    <div>
        <footer className>
          <div className="container pt-50 pb-50">
            <div className="row">
              <div className="col-xl-3 col-lg-6 col-md-12 col-sm-12">
                <h4 className="footer-title">
                  Thông tin
                </h4>
                <ul className="footer-list">
                  <li> <i className="fa fa-map-marker" /> + Mộ Lao - Hà Đông - Hà Nội </li>
                  <li> <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-telephone-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M2.267.98a1.636 1.636 0 0 1 2.448.152l1.681 2.162c.309.396.418.913.296 1.4l-.513 2.053a.636.636 0 0 0 .167.604L8.65 9.654a.636.636 0 0 0 .604.167l2.052-.513a1.636 1.636 0 0 1 1.401.296l2.162 1.681c.777.604.849 1.753.153 2.448l-.97.97c-.693.693-1.73.998-2.697.658a17.47 17.47 0 0 1-6.571-4.144A17.47 17.47 0 0 1 .639 4.646c-.34-.967-.035-2.004.658-2.698l.97-.969z" />
                    </svg> + 0123 456 789 </li>
                  <li> <i className="fa fa-envelope" /> + Demo@gmail.com </li>
                </ul>
              </div>
              <div className="col-xl-3 col-lg-6 col-md-12 col-sm-12">
                <h4 className="footer-title">
                  Các dịch vụ
                </h4>
                <ul className="footer-list">
                  <li>
                    <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-arrow-down-right-square" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M14 1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
                      <path fillRule="evenodd" d="M5.172 5.172a.5.5 0 0 1 .707 0l4.096 4.096V6.5a.5.5 0 1 1 1 0v3.975a.5.5 0 0 1-.5.5H6.5a.5.5 0 0 1 0-1h2.768L5.172 5.879a.5.5 0 0 1 0-.707z" />
                    </svg>
                    Trở thành gia sư
                  </li>
                  <li>
                    <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-arrow-down-right-square" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M14 1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
                      <path fillRule="evenodd" d="M5.172 5.172a.5.5 0 0 1 .707 0l4.096 4.096V6.5a.5.5 0 1 1 1 0v3.975a.5.5 0 0 1-.5.5H6.5a.5.5 0 0 1 0-1h2.768L5.172 5.879a.5.5 0 0 1 0-.707z" />
                    </svg>
                    Đăng ký học
                  </li>
                </ul>
              </div>
              <div className="col-xl-3 col-lg-6 col-md-12 col-sm-12">
                <h4 className="footer-title">
                  Site web
                </h4>
                <ul className="footer-list">
                  <li><a href="home.html">Trang chủ</a></li>
                  <li><a href="course.html">Khóa học</a></li>
                  <li><a href="mentor-list.html">Gia sư</a></li>
                  <li><a href="blog.html">Tin tức</a></li>
                  <li><a href="contact.html">Liên hệ</a></li>
                </ul>
              </div>
              <div className="col-xl-3 col-lg-6 col-md-12 col-sm-12">
                <h4 className="footer-title">
                  Kết nối với chúng tôi
                </h4>
                <ul className="footer-list">
                  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7450.523161325157!2d105.78087342671839!3d20.98214906154175!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135accdab6f3ae7%3A0x60ddfd85d24b0c52!2zTeG7mSBMYW8sIEjDoCDEkMO0bmcsIEjDoCBO4buZaSwgVmnhu4d0IE5hbQ!5e0!3m2!1svi!2s!4v1604671938527!5m2!1svi!2s" style={{border: 0}} allowFullScreen aria-hidden="false" tabIndex={0} width height frameBorder={0} />
                </ul>
              </div>
            </div>
          </div>
        </footer>
        <div className="footer-coppyright">
          <div className="container">
            <p>
              © Copyright 2020 - Mentor X
            </p>
          </div>
        </div>
      </div>
  );
};

export default Footer;
