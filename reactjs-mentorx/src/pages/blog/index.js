import React from 'react'
import imgBlog1 from "../../assets/images/blog/post-item.jpg";
import icon1 from "../../assets/images/social-icon/iconfinder_1_social_2609541.png";
import icon2 from "../../assets/images/social-icon/iconfinder_1_Youtube_colored_svg_5296521.png";
import icon3 from "../../assets/images/social-icon/iconfinder_Instagram_1298747.png";
import icon4 from "../../assets/images/social-icon/iconfinder_twitter_386736.png";
import blog1 from "../../assets/images/blog/Blog-singer-1.jpg"


const Blog=()=> {
    return (
        <div>
             <div className="container mt-5">
        <div className="row">
          <div className="col-lg-3 col-md-3 col-sm-12 blog-sidebar">
            {/* banner */}
            <div className="siderbar-banner">
              <img src="assets/img/blog/sidebar.jpg" className="img-fluid" alt="" />
            </div>
            {/* banner end */}
            {/* blog-box */}
            <div className="blog-box">
              <h4 className="blog-box--title">
                Các chủ đề nổi bật
              </h4>
              <ul className="list-theme">
                <li><a href> Công nghệ </a></li>
                <li><a href> Kiến thức </a></li>
                <li><a href> Mẹo vặt </a></li>
                <li><a href> Bí quyết </a></li>
                <li><a href> Chia sẻ kiến thức </a></li>
                <li><a href> Kinh nghiệm </a></li>
              </ul>
            </div>
            {/* blog-box end*/}
            {/* blog-box */}
            <div className="blog-box">
              <h4 className="blog-box--title">
                Bài viết mới
              </h4>
              <ul className="list-post">
                {/* list post item */}
                <li>
                  <a href>
                    <img src={imgBlog1} className="entry-img" alt="" />
                  </a>
                  <div className="entry-content">
                    <h3 className="entry-title"> Bí quyết học tập </h3>
                    <h4 className="entry-time"> 15/10/2020 </h4>
                  </div>
                </li>
                {/* list post item end */}
                {/* list post item */}
                <li>
                  <a href>
                    <img src={imgBlog1} className="entry-img" alt="" />
                  </a>
                  <div className="entry-content">
                    <h3 className="entry-title"> Bí quyết học tập </h3>
                    <h4 className="entry-time"> 15/10/2020 </h4>
                  </div>
                </li>
                {/* list post item end */}
                {/* list post item */}
                <li>
                  <a href>
                    <img src={imgBlog1} className="entry-img" alt="" />
                  </a>
                  <div className="entry-content">
                    <h3 className="entry-title"> Bí quyết học tập </h3>
                    <h4 className="entry-time"> 15/10/2020 </h4>
                  </div>
                </li>
                {/* list post item end */}
              </ul>
            </div>
            {/* blog-box end*/}
            {/* blog-box */}
            <div className="blog-box">
              <h4 className="blog-box--title">
                Theo dõi chúng tôi
              </h4>
              <li className="post-social">
                <a href> <img src={icon1} alt="" /> </a>
                <a href> <img src={icon2} alt="" /> </a>
                <a href> <img src={icon3} alt="" /> </a>
                <a href> <img src={icon4} alt="" /> </a>
              </li>
            </div>
            {/* blog-box end*/}
          </div>
          <div className="col-lg-9 col-md-9 col-sm-12 blog-artice">
            {/* singer-blog */}
            <div className="blog-singer">
              {/* img-blog-singer  */}
              <a href className="blog-singer-link">
                <img src={blog1} className="blog-singer-img img-fluid " alt="" srcSet />
              </a>
              {/* img-blog-singer end  */}
              {/* cate-time */}
              <div className="cate-time">
                <div className="blog-cate">
                  <a href className="blog-cate-link"> Công nghệ </a>
                </div>
                <span className="pd"> / </span>
                <div className="blog-time">
                  22/10/2020
                </div>
              </div>
              {/* cate-time end*/}
              {/* blog singer title */}
              <div className="blog-singer-title">
                <a href> Các lợi ích khi học trực tuyến </a>
              </div>
              {/* blog singer title end */}
              {/* blog singer des */}
              <p className="blog-singer-des mt-2">
                Đào tạo mọi lúc mọi nơi: Truyền đạt kiến thức nhanh chóng, thông tin theo yêu cầu của học viên.
                Người học có thể truy cập vào các khóa học trực tuyến tại bất kỳ nơi đâu: ở nhà, nơi làm việc
                hay các địa diểm mạng internet công cộng và vào bất ký thời gian nào thích hợp khi người học
                muốn.
              </p>
              {/* blog singer des end */}
              {/* tag */}
              <div className="tag mt-2">
                <p className>Tag : </p>
                <span className="tag-content">
                  <a href className="tag-link"> Công nghệ </a>
                  <a href className="tag-link"> Học tập </a>
                </span>
              </div>
              {/* tag end */}
            </div>
            {/* singer-blog end*/}
            {/* singer-blog */}
            <div className="blog-singer">
              {/* img-blog-singer  */}
              <a href className="blog-singer-link">
                <img src={blog1} className="blog-singer-img img-fluid " alt="" srcSet />
              </a>
              {/* img-blog-singer end  */}
              {/* cate-time */}
              <div className="cate-time">
                <div className="blog-cate">
                  <a href className="blog-cate-link"> Công nghệ </a>
                </div>
                <span className="pd"> / </span>
                <div className="blog-time">
                  22/10/2020
                </div>
              </div>
              {/* cate-time end*/}
              {/* blog singer title */}
              <div className="blog-singer-title">
                <a href> Các lợi ích khi học trực tuyến </a>
              </div>
              {/* blog singer title end */}
              {/* blog singer des */}
              <p className="blog-singer-des mt-2">
                Đào tạo mọi lúc mọi nơi: Truyền đạt kiến thức nhanh chóng, thông tin theo yêu cầu của học viên.
                Người học có thể truy cập vào các khóa học trực tuyến tại bất kỳ nơi đâu: ở nhà, nơi làm việc
                hay các địa diểm mạng internet công cộng và vào bất ký thời gian nào thích hợp khi người học
                muốn.
              </p>
              {/* blog singer des end */}
              {/* tag */}
              <div className="tag mt-2">
                <p className>Tag : </p>
                <span className="tag-content">
                  <a href className="tag-link"> Công nghệ </a>
                  <a href className="tag-link"> Học tập </a>
                </span>
              </div>
              {/* tag end */}
            </div>
            {/* singer-blog end*/}
            {/* singer-blog */}
            <div className="blog-singer">
              {/* img-blog-singer  */}
              <a href className="blog-singer-link">
                <img src={blog1} className="blog-singer-img img-fluid " alt="" srcSet />
              </a>
              {/* img-blog-singer end  */}
              {/* cate-time */}
              <div className="cate-time">
                <div className="blog-cate">
                  <a href className="blog-cate-link"> Công nghệ </a>
                </div>
                <span className="pd"> / </span>
                <div className="blog-time">
                  22/10/2020
                </div>
              </div>
              {/* cate-time end*/}
              {/* blog singer title */}
              <div className="blog-singer-title">
                <a href> Các lợi ích khi học trực tuyến </a>
              </div>
              {/* blog singer title end */}
              {/* blog singer des */}
              <p className="blog-singer-des mt-2">
                Đào tạo mọi lúc mọi nơi: Truyền đạt kiến thức nhanh chóng, thông tin theo yêu cầu của học viên.
                Người học có thể truy cập vào các khóa học trực tuyến tại bất kỳ nơi đâu: ở nhà, nơi làm việc
                hay các địa diểm mạng internet công cộng và vào bất ký thời gian nào thích hợp khi người học
                muốn.
              </p>
              {/* blog singer des end */}
              {/* tag */}
              <div className="tag mt-2">
                <p className>Tag : </p>
                <span className="tag-content">
                  <a href className="tag-link"> Công nghệ </a>
                  <a href className="tag-link"> Học tập </a>
                </span>
              </div>
              {/* tag end */}
            </div>
            {/* singer-blog end*/}
          </div>
        </div>
      </div>
            
        </div>
    )
}

export default Blog
