import { useSelector } from "react-redux";
import CheckoutStatus from "../../components/Checkout/CheckoutStatus";
import Item from "./CartItems";

const ShoppingCart = () => {
    const { cartItems } = useSelector((state) => state.cart);

    const priceTotal = useSelector((state) => {
        const cartItems = state.cart.cartItems;
        let totalPrice = 0;
        if (cartItems.length > 0) {
            cartItems.map((item) => (totalPrice += item.price * item.count));
        }

        return totalPrice;
    });

    return (
        <section className="cart">
            <div className="container">
                <div className="cart__intro">
                    <h3 className="cart__title">Giỏ hàng</h3>
                    <CheckoutStatus step="cart" />
                </div>

                <div className="cart-list">
                    {cartItems.length > 0 && (
                        <table>
                            <tbody>
                                <tr>
                                    <th style={{ textAlign: "left" }}>
                                        Sản phẩm
                                    </th>
                                    <th>Màu sắc</th>
                                    <th>Kích cỡ</th>
                                    <th>Số lượng</th>
                                    <th>Giá</th>
                                    <th></th>
                                </tr>

                                {cartItems.map((item) => (
                                    <Item
                                        key={item.id}
                                        id={item.id}
                                        thumb={item.thumb}
                                        name={item.name}
                                        color={item.color}
                                        price={item.price}
                                        size={item.size}
                                        count={item.count}
                                    />
                                ))}
                            </tbody>
                        </table>
                    )}

                    {cartItems.length === 0 && <p>Không có gì trong giỏ hàng.</p>}
                </div>

                <div className="cart-actions">
                    <a href="/tat-ca-san-pham" className="cart__btn-back">
                        <i className="icon-left"></i> Tiếp tục mua hàng
                    </a>
                    <input
                        type="text"
                        placeholder="Mã giảm giá"
                        className="cart__promo-code"
                    />

                    <div className="cart-actions__items-wrapper">
                        <p className="cart-actions__total">
                            Tổng tiền <strong>{priceTotal.toFixed(0)}đ</strong>
                        </p>
                        <a
                            href="/gio-hang/thanh-toan"
                            className="btn btn--rounded btn--yellow"
                        >
                            Thanh toán
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ShoppingCart;
