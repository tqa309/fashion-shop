import Layout from "../../layouts/Main";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { resetPassword } from "../../store/actions/auth.actions";
import { useDispatch } from "react-redux";
import { useRouter } from "next/router";

const ForgotPassword = () => {
    const { register, handleSubmit, errors } = useForm();

    const dispatch = useDispatch();

    const { query } = useRouter();

    const onSubmit = (data) => {
        dispatch(
            resetPassword({
                password: data.password,
                token: query.token
            })
        );
    };

    return (
        <Layout>
            <section className="form-page">
                <div className="container">
                    <div className="back-button-section">
                        <Link href="/tat-cat-san-pham">
                            <a>
                                <i className="icon-left"></i> Back to shop
                            </a>
                        </Link>
                    </div>

                    <div className="form-block">
                        <h2 className="form-block__title">
                            Lấy lại mật khẩu
                        </h2>
                        <p className="form-block__description">
                            Nhập mật khẩu mới của bạn vào đây
                        </p>

                        <form
                            className="form"
                            onSubmit={handleSubmit(onSubmit)}
                        >
                            <div>
                                <input
                                    className="form__input"
                                    type="password"
                                    placeholder="Mật khẩu"
                                    {...register("password")}
                                />
                            </div>

                            <button
                                type="submit"
                                className="btn btn--rounded btn--yellow btn-submit"
                            >
                                Đổi mật khẩu
                            </button>
                        </form>
                    </div>
                </div>
            </section>
        </Layout>
    );
};

export default ForgotPassword;
