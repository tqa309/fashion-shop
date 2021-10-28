import Router from "next/router";
import { useEffect, useState } from "react";
import { activateAccount } from "../store/actions/auth.actions";
import LayoutError from "../layouts/404";

const ErrorPage = () => {
    const [countdown, setCountdown] = useState(5);

    setTimeout(() => setCountdown((prev) => prev - 1), 1000);

    setTimeout(() => Router.push("/"), 5000);

    const dispatch = useDispatch();

    const { query } = useRouter();

    useEffect(() => {
        dispatch(
            activateAccount({
                token: query.token
            })
        );
    }, [])

    return (
        <LayoutError title={"Kích hoạt tài khoản"}>
            <section className="error-page">
                <div className="container">
                    <h2>Kích hoạt hành công!</h2>
                    <p>
                        Bạn sẽ được điều hướng trở về trang chủ sau {countdown}{" "}
                        giây
                    </p>
                    <a href="/" className="btn btn--rounded btn--yellow">
                        Trở về trang chủ
                    </a>
                </div>
            </section>
        </LayoutError>
    );
};

export default ErrorPage;
