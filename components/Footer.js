import Logo from "../assets/icons/logo";

const Footer = () => {
    return (
        <footer className="site-footer">
            <div className="container">
                <div className="site-footer__top">
                    <div className="site-footer__description">
                        <h6>
                            <Logo /> <span>QA</span>-Shop
                        </h6>
                        <p>
                            House My Brand thiết kế quần áo cho người trẻ, người
                            già và tất cả mọi người - nhưng quan trọng nhất là
                            thời trang
                        </p>
                        <ul className="site-footer__social-networks">
                            <li>
                                <a href="#">
                                    <i className="icon-facebook"></i>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <i className="icon-twitter"></i>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <i className="icon-linkedin"></i>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <i className="icon-instagram"></i>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <i className="icon-youtube-play"></i>
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div className="site-footer__links">
                        <ul>
                            <li>Mua hàng online</li>
                            <li>
                                <a href="#">Trạng thái đơn hàng</a>
                            </li>
                            <li>
                                <a href="#">Vận chuyển và giao hàng</a>
                            </li>
                            <li>
                                <a href="#">Chính sách hoàn trả</a>
                            </li>
                            <li>
                                <a href="#">Các lựa chọn thanh toán</a>
                            </li>
                            <li>
                                <a href="#">Liên hệ với chúng tôi</a>
                            </li>
                        </ul>
                        <ul>
                            <li>Thông tin</li>
                            <li>
                                <a href="#">Thẻ quà tặng</a>
                            </li>
                            <li>
                                <a href="#">Tìm một cửa hàng</a>
                            </li>
                            <li>
                                <a href="#">Bản tin</a>
                            </li>
                            <li>
                                <a href="#">Đăng ký thành viên</a>
                            </li>
                            <li>
                                <a href="#">Phản hồi trang web</a>
                            </li>
                        </ul>
                        <ul>
                            <li>Contact</li>
                            <li>
                                <a href="#">quanhdev@gmail.com</a>
                            </li>
                            <li>
                                <a href="#">Hotline: 0865 680 680</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="site-footer__bottom">
                <div className="container">
                    <p>TRANQUOCANH.COM - © 2021. ALL RIGHTS RESERVED.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
