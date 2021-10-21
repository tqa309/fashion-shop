import Layout from "../layouts/Main";
import Link from "next/link";

const RegisterPage = () => (
    <Layout>
        <section className="form-page">
            <div className="container">
                <div className="back-button-section">
                    <Link href="/">
                        <a>
                            <i className="icon-left"></i> Trở về cửa hàng
                        </a>
                    </Link>
                </div>

                <div className="form-block">
                    <h2 className="form-block__title">
                        Tạo tài khoản và trải nghiệm những lợi ích
                    </h2>
                    <p className="form-block__description">
                        Nếu đã từng mua hàng trên Website trước đây, bạn có thể
                        dùng tính năng{" "}
                        <a
                            href="/quen-mat-khau"
                            className="form__info__forgot-password"
                        >
                            "Quên mật khẩu?"
                        </a>{" "}
                        để có thể truy cập vào tài khoản bằng email nhé.
                    </p>

                    <form className="form">
                        <div className="form__input-row">
                            <input
                                className="form__input"
                                placeholder="Họ và tên"
                                type="text"
                            />
                        </div>

                        <div className="form__input-row">
                            <input
                                className="form__input"
                                placeholder="Địa chỉ email"
                                type="text"
                            />
                        </div>

                        <div className="form__input-row">
                            <input
                                className="form__input"
                                type="Password"
                                placeholder="Mật khẩu"
                            />
                        </div>

                        <div className="form__info">
                            <div className="checkbox-wrapper">
                                <label
                                    htmlFor="check-signed-in"
                                    className={`checkbox checkbox--sm`}
                                >
                                    <input
                                        name="signed-in"
                                        type="checkbox"
                                        id="check-signed-in"
                                    />
                                    <span className="checkbox__check"></span>
                                    <p>
                                        Tôi đồng ý với chính sách và điều khoản
                                        bảo mật
                                    </p>
                                </label>
                            </div>
                        </div>

                        <button
                            type="button"
                            className="btn btn--rounded btn--yellow btn-submit"
                        >
                            Đăng ký
                        </button>

                        <p className="form__signup-link">
                            <Link href="/dang-nhap">
                                <a href="#">Bạn đã là thành viên? Đăng nhập</a>
                            </Link>
                        </p>
                    </form>
                </div>
            </div>
        </section>
    </Layout>
);

export default RegisterPage;
