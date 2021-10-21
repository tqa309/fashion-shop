import Layout from "../layouts/Main";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { server } from "../utils/server";
import { postData } from "../utils/services";

const LoginPage = () => {
    const { register, handleSubmit, errors } = useForm();

    const onSubmit = async (data) => {
        const res = await postData(`${server}/api/dang-nhap`, {
            email: data.email,
            password: data.password,
        });
    };

    return (
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
                        <h2 className="form-block__title">Đăng nhập</h2>
                        <p className="form-block__description">
                            Nếu đã từng mua hàng trên Website trước đây, bạn có
                            thể dùng tính năng{" "}
                            <a
                                href="/quen-mat-khau"
                                className="form__info__forgot-password"
                            >
                                "Quên mật khẩu?"
                            </a>{" "}
                            để có thể truy cập vào tài khoản bằng email nhé.
                        </p>

                        <form
                            className="form"
                            onSubmit={handleSubmit(onSubmit)}
                        >
                            <div className="form__input-row">
                                <input
                                    className="form__input"
                                    placeholder="Địa chỉ email"
                                    type="text"
                                    {...register("email", {
                                        required: true,
                                        pattern:
                                            /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                                    })}
                                />

                                {errors?.email &&
                                    errors.email.type === "required" && (
                                        <p className="message message--error">
                                            This field is required
                                        </p>
                                    )}

                                {errors?.email &&
                                    errors.email.type === "pattern" && (
                                        <p className="message message--error">
                                            Please write a valid email
                                        </p>
                                    )}
                            </div>

                            <div className="form__input-row">
                                <input
                                    className="form__input"
                                    type="password"
                                    placeholder="Mật khẩu"
                                    name="password"
                                    {...register("password", {
                                        required: true,
                                    })}
                                />
                                {errors?.password &&
                                    errors.password.type === "required" && (
                                        <p className="message message--error">
                                            This field is required
                                        </p>
                                    )}
                            </div>

                            <div className="form__info">
                                <div className="checkbox-wrapper">
                                    <label
                                        htmlFor="check-signed-in"
                                        className={`checkbox checkbox--sm`}
                                    >
                                        <input
                                            type="checkbox"
                                            id="check-signed-in"
                                            {...register("keepSigned", {
                                                required: true,
                                            })}
                                        />
                                        <span className="checkbox__check"></span>
                                        <p>Ghi nhớ đăng nhập</p>
                                    </label>
                                </div>
                                <a
                                    href="/quen-mat-khau"
                                    className="form__info__forgot-password"
                                >
                                    Quên mật khẩu?
                                </a>
                            </div>

                            <div className="form__btns">
                                <button
                                    type="button"
                                    className="btn-social fb-btn"
                                >
                                    <i className="icon-facebook"></i>Facebook
                                </button>
                                <button
                                    type="button"
                                    className="btn-social google-btn"
                                >
                                    <img
                                        src="/images/icons/gmail.svg"
                                        alt="gmail"
                                    />{" "}
                                    Gmail
                                </button>
                            </div>

                            <button
                                type="submit"
                                className="btn btn--rounded btn--yellow btn-submit"
                            >
                                Đăng nhập
                            </button>

                            <p className="form__signup-link">
                                Chưa đăng ký thành viên?{" "}
                                <a href="/dang-ky">Đăng ký</a>
                            </p>
                        </form>
                    </div>
                </div>
            </section>
        </Layout>
    );
};

export default LoginPage;
