import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { EffectFade, Navigation } from "swiper";

SwiperCore.use([EffectFade, Navigation]);

const PageIntro = () => {
    return (
        <section className="page-intro">
            <Swiper navigation effect="fade" className="swiper-wrapper">
                <SwiperSlide>
                    <div
                        className="page-intro__slide"
                        style={{
                            backgroundImage: "url('/images/slide-1.jpg')",
                        }}
                    >
                        <div className="container">
                            <div className="page-intro__slide__content">
                                <h2>KHUYẾN MÃI BST HÈ 2021</h2>
                                <a href="#" className="btn-shop">
                                    <i className="icon-right"></i>Mua ngay
                                </a>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div
                        className="page-intro__slide"
                        style={{
                            backgroundImage: "url('/images/slide-2.jpg')",
                        }}
                    >
                        <div className="container">
                            <div className="page-intro__slide__content">
                                <h2>Năng động thời trang xuống phố</h2>
                                <a href="#" className="btn-shop">
                                    <i className="icon-right"></i>Mua ngay
                                </a>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>

            <div className="shop-data">
                <div className="container">
                    <ul className="shop-data__items">
                        <li>
                            <i className="icon-shipping"></i>
                            <div className="data-item__content">
                                <h4>Miễn phí ship</h4>
                                <p>Đơn hàng trên 500,000đ</p>
                            </div>
                        </li>

                        <li>
                            <i className="icon-shipping"></i>
                            <div className="data-item__content">
                                <h4>99% khách hàng hài lòng</h4>
                                <p>
                                    Chất lượng hoàn mỹ, dịch vụ tận tình
                                </p>
                            </div>
                        </li>

                        <li>
                            <i className="icon-cash"></i>
                            <div className="data-item__content">
                                <h4>Cam kết chính hãng</h4>
                                <p>
                                    Hoàn tiền 500% nếu phát hiện hàng nhái
                                </p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default PageIntro;
