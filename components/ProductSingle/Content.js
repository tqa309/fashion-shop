import { useState } from "react";
import productsColors from "./../../utils/data/products-colors";
import productsSizes from "./../../utils/data/products-sizes";
import CheckboxColor from "./../ProductsFilter/FormBuilder/CheckboxColor";
import { useDispatch, useSelector } from "react-redux";
import { some } from "lodash";
import { addProduct } from "./../../store/actions/cart.actions";
import { toggleFavProduct } from "./../../store/actions/user.actions";

const Content = ({ product }) => {
    const dispatch = useDispatch();
    const [count, setCount] = useState(1);
    const [color, setColor] = useState("");
    const [itemSize, setItemSize] = useState("");

    const onColorSet = (e) => setColor(e);
    const onSelectChange = (e) => setItemSize(e.target.value);

    const { favProducts } = useSelector((state) => state.user);
    const isFavourite = some(
        favProducts,
        (productId) => productId === product.id
    );

    const toggleFav = () => {
        dispatch(
            toggleFavProduct({
                id: product.id,
            })
        );
    };

    const addToCart = () => {
        dispatch(
            addProduct({
                id: product.id,
                name: product.name,
                thumb: product.images[0],
                price: product.currentPrice,
                count: count,
                color: color,
                size: itemSize,
            })
        );
    };

    return (
        <section className="product-content">
            <div className="product-content__intro">
                <h5 className="product__id">
                    Product ID:<br></br>
                    {product.id}
                </h5>
                <span className="product-on-sale">Khuyến mãi</span>
                <h2 className="product__name">{product.name}</h2>

                <div className="product__prices">
                    <h4>${product.currentPrice}</h4>
                    {product.discount && <span>${product.price}</span>}
                </div>
            </div>

            <div className="product-content__filters">
                <div className="product-filter-item">
                    <h5>Màu sắc:</h5>
                    <div className="checkbox-color-wrapper">
                        {productsColors.map((type) => (
                            <CheckboxColor
                                key={type.id}
                                type={"radio"}
                                name="product-color"
                                color={type.color}
                                valueName={type.label}
                                onChange={onColorSet}
                            />
                        ))}
                    </div>
                </div>
                <div className="product-filter-item">
                    <h5>
                        Kích cỡ: <strong>Xem bảng kích cỡ</strong>
                    </h5>
                    <div className="checkbox-color-wrapper">
                        <div className="select-wrapper">
                            <select onChange={onSelectChange}>
                                <option>Chọn kích cỡ</option>
                                {productsSizes.map((type) => (
                                    <option value={type.label}>
                                        {type.label}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>
                </div>
                <div className="product-filter-item">
                    <h5>Số lượng:</h5>
                    <div className="quantity-buttons">
                        <div className="quantity-button">
                            <button
                                type="button"
                                onClick={() => setCount(count - 1)}
                                className="quantity-button__btn"
                            >
                                -
                            </button>
                            <span>{count}</span>
                            <button
                                type="button"
                                onClick={() => setCount(count + 1)}
                                className="quantity-button__btn"
                            >
                                +
                            </button>
                        </div>

                        <button
                            type="submit"
                            onClick={() => addToCart()}
                            className="btn btn--rounded btn--yellow"
                        >
                            Thêm vào giỏ hàng
                        </button>
                        <button
                            type="button"
                            onClick={toggleFav}
                            className={`btn-heart ${
                                isFavourite ? "btn-heart--active" : ""
                            }`}
                        >
                            <i className="icon-heart"></i>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Content;
