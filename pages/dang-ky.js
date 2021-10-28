import Layout from "../layouts/Main";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { register as signup } from "../store/actions/auth.actions";
import { useState } from "react";

const RegisterPage = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();

    const [successMessage, setSuccessMessage] = useState(null);

    const dispatch = useDispatch();

    const onSubmit = (data) => {
        if (Object.keys(errors).length === 0) setSuccessMessage(true);

        reset({});

        dispatch(
            signup({
                name: data.name,
                email: data.email,
                password: data.password,
            })
        );
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
                        <h2 className="form-block__title">
                            Tạo tài khoản và trải nghiệm những lợi ích
                        </h2>
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
                                    placeholder="Họ và tên"
                                    type="text"
                                    {...register("name", { required: true})}
                                />
                                {errors.name && (
                                            <p className="message message--error">
                                                Vui lòng nhập tên
                                            </p>
                                        )}
                            </div>

                            <div className="form__input-row">
                                <input
                                    className="form__input"
                                    placeholder="Địa chỉ email"
                                    type="text"
                                    {...register("email", {
                                        required: true,
                                    })}
                                />
                                {errors.email && (
                                            <p className="message message--error">
                                                Vui lòng nhập email
                                            </p>
                                        )}
                            </div>

                            <div className="form__input-row">
                                <input
                                    className="form__input"
                                    type="Password"
                                    placeholder="Mật khẩu"
                                    {...register("password",{
                                        required: true,
                                    })}
                                />
                                {errors.password && (
                                            <p className="message message--error">
                                                Vui lòng nhập mật khẩu
                                            </p>
                                        )}
                            </div>

                            <div className="form__info">
                                <div className="checkbox-wrapper">
                                    <label
                                        htmlFor="checkAgree"
                                        className={`checkbox checkbox--sm`}
                                    >
                                        <input
                                            type="checkbox"
                                            id="checkAgree"
                                            {...register("checkAgree", {
                                                required: true,
                                            })}
                                        />
                                        <span className="checkbox__check"></span>
                                        <p>Tôi đồng ý với chính sách và điều
                                            khoản bảo mật</p>
                                    </label>
                                    {errors.checkAgree && (
                                            <p className="message message--error">
                                                Vui lòng đồng ý để thực hiện
                                                đăng ký
                                            </p>
                                        )}
                                </div>
                            </div>

                            {successMessage && (
                                <p className="message message--success">
                                    ✓ Đăng ký thành công. Vui lòng mở email để
                                    kích hoạt!
                                </p>
                            )}

                            <button
                                type="submit"
                                className="btn btn--rounded btn--yellow btn-submit"
                            >
                                Đăng ký
                            </button>

                            <p className="form__signup-link">
                                <Link href="/dang-nhap">
                                    <a href="#">
                                        Bạn đã là thành viên? Đăng nhập
                                    </a>
                                </Link>
                            </p>
                        </form>
                    </div>
                </div>
            </section>
        </Layout>
    );
};

export default RegisterPage;
