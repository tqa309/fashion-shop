const Subscribe = () => {
    return (
        <section className="subscribe">
            <div className="container">
                <div
                    style={{ backgroundImage: "url(/images/subscribe.jpg)" }}
                    className="subscribe__content"
                >
                    <h4>
                        Đăng ký nhận bản tin của chúng tôi và nhận các ưu đãi
                        độc quyền hàng tuần
                    </h4>
                    <form className="subscribe__form">
                        <input type="email" placeholder="Email của bạn" />
                        <button
                            type="submit"
                            className="btn btn--rounded btn--yellow"
                        >
                            Đăng ký
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Subscribe;
