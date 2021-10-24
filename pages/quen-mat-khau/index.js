import Layout from "../../layouts/Main";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { forgotPassword } from "../../store/actions/auth.actions";
import { useDispatch } from "react-redux";

const ForgotPassword = () => {
    const { register, handleSubmit, errors } = useForm();

    const dispatch = useDispatch();

    const onSubmit = (data) => {
        dispatch(
            forgotPassword({
                email: data.email,
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
                            Forgot your password?
                        </h2>
                        <p className="form-block__description">
                            Enter your email or phone number and recover your
                            account
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
                                    })}
                                />
                            </div>

                            <button
                                type="submit"
                                className="btn btn--rounded btn--yellow btn-submit"
                            >
                                Lấy lại mật khẩu
                            </button>
                        </form>
                    </div>
                </div>
            </section>
        </Layout>
    );
};

export default ForgotPassword;
