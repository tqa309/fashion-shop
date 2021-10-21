import Layout from "../../layouts/Main";
import { useSelector } from "react-redux";
import CheckoutStatus from "../../components/Checkout/CheckoutStatus";
import CheckoutItems from "../../components/Checkout/CheckoutItems";

const CheckoutPage = () => {
    const priceTotal = useSelector((state) => {
        const cartItems = state.cart.cartItems;
        let totalPrice = 0;
        if (cartItems.length > 0) {
            cartItems.map((item) => (totalPrice += item.price * item.count));
        }

        return totalPrice;
    });

    return (
        <Layout>
            <section className="cart">
                <div className="container">
                    <div className="cart__intro">
                        <h3 className="cart__title">Vận chuyển và thanh toán</h3>
                        <CheckoutStatus step="checkout" />
                    </div>

                    <div className="checkout-content">
                        <div className="checkout__col-6">
                            <div className="checkout__btns">
                                <button className="btn btn--rounded btn--yellow">
                                    Đăng nhập
                                </button>
                                <button className="btn btn--rounded btn--border">
                                    Đăng ký
                                </button>
                            </div>

                            <div className="block">
                                <h3 className="block__title">
                                    Thông tin nhận hàng
                                </h3>
                                <form className="form">
                                    <div className="form__input-row form__input-row--two">
                                        <div className="form__col">
                                            <input
                                                className="form__input form__input--sm"
                                                type="text"
                                                placeholder="Email"
                                            />
                                        </div>

                                        <div className="form__col">
                                            <input
                                                className="form__input form__input--sm"
                                                type="text"
                                                placeholder="Địa chỉ"
                                            />
                                        </div>
                                    </div>

                                    <div className="form__input-row form__input-row--two">
                                        <div className="form__col">
                                            <input
                                                className="form__input form__input--sm"
                                                type="text"
                                                placeholder="Tên"
                                            />
                                        </div>

                                        <div className="form__col">
                                            <input
                                                className="form__input form__input--sm"
                                                type="text"
                                                placeholder="Thành phố"
                                            />
                                        </div>
                                    </div>

                                    <div className="form__input-row form__input-row--two">
                                        <div className="form__col">
                                            <input
                                                className="form__input form__input--sm"
                                                type="text"
                                                placeholder="Họ"
                                            />
                                        </div>

                                        <div className="form__col">
                                            <input
                                                className="form__input form__input--sm"
                                                type="text"
                                                placeholder="Mã bưu điện"
                                            />
                                        </div>
                                    </div>

                                    <div className="form__input-row form__input-row--two">
                                        <div className="form__col">
                                            <input
                                                className="form__input form__input--sm"
                                                type="text"
                                                placeholder="Số điện thoại"
                                            />
                                        </div>

                                        <div className="form__col">
                                            <div className="select-wrapper select-form">
                                                <select>
                                                    <option>Quốc gia</option>
                                                    <option value="Vietnam">
                                                        Vietnam
                                                    </option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>

                        <div className="checkout__col-4">
                            <div className="block">
                                <h3 className="block__title">Phương thức thanh toán</h3>
                                <ul className="round-options round-options--three">
                                    <li className="round-item">
                                        <img
                                            src="/images/logos/paypal.png"
                                            alt="Paypal"
                                        />
                                    </li>
                                    <li className="round-item">
                                        <img
                                            src="/images/logos/visa.png"
                                            alt="Paypal"
                                        />
                                    </li>
                                    <li className="round-item">
                                        <img
                                            src="/images/logos/mastercard.png"
                                            alt="Paypal"
                                        />
                                    </li>
                                    <li className="round-item">
                                        <img
                                            src="/images/logos/maestro.png"
                                            alt="Paypal"
                                        />
                                    </li>
                                    <li className="round-item">
                                        <img
                                            src="/images/logos/discover.png"
                                            alt="Paypal"
                                        />
                                    </li>
                                    <li className="round-item">
                                        <img
                                            src="/images/logos/ideal-logo.svg"
                                            alt="Paypal"
                                        />
                                    </li>
                                </ul>
                            </div>

                            <div className="block">
                                <h3 className="block__title">
                                    Delivery method
                                </h3>
                                <ul className="round-options round-options--two">
                                    <li className="round-item round-item--bg">
                                        <img
                                            src="/images/logos/inpost.svg"
                                            alt="Paypal"
                                        />
                                        <p>$20.00</p>
                                    </li>
                                    <li className="round-item round-item--bg">
                                        <img
                                            src="/images/logos/dpd.svg"
                                            alt="Paypal"
                                        />
                                        <p>$12.00</p>
                                    </li>
                                    <li className="round-item round-item--bg">
                                        <img
                                            src="/images/logos/dhl.svg"
                                            alt="Paypal"
                                        />
                                        <p>$15.00</p>
                                    </li>
                                    <li className="round-item round-item--bg">
                                        <img
                                            src="/images/logos/maestro.png"
                                            alt="Paypal"
                                        />
                                        <p>$10.00</p>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="checkout__col-2">
                            <div className="block">
                                <h3 className="block__title">Your cart</h3>
                                <CheckoutItems />

                                <div className="checkout-total">
                                    <p>Total cost</p>
                                    <h3>${priceTotal}</h3>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="cart-actions cart-actions--checkout">
                        <a href="/gio-hang" className="cart__btn-back">
                            <i className="icon-left"></i> Back
                        </a>
                        <div className="cart-actions__items-wrapper">
                            <button
                                type="button"
                                className="btn btn--rounded btn--border"
                            >
                                Continue shopping
                            </button>
                            <button
                                type="button"
                                className="btn btn--rounded btn--yellow"
                            >
                                Proceed to payment
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    );
};

export default CheckoutPage;
