import LayoutError from "../layouts/404";

const ErrorPage = () => (
    <LayoutError>
        <section className="error-page">
            <div className="container">
                <h1>Lỗi 404</h1>
                <p>Âyyy, trang bạn yêu cầu không tồn tại :(</p>
                <a href="/" className="btn btn--rounded btn--yellow">
                    Trở về trang chủ
                </a>
            </div>
        </section>
    </LayoutError>
);

export default ErrorPage;
