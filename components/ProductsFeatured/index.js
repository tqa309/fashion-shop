import ProductsCarousel from "./Carousel";
import useSwr from "swr";
import { server } from "../../utils/server";

const ProductsFeatured = () => {
    const fetcher = (url) => fetch(url).then((res) => res.json());
    const { data } = useSwr(`${server}/api/products`, fetcher);

    return (
        <section className="section section-products-featured">
            <div className="container">
                <header className="section-products-featured__header">
                    <h3>Dành riêng cho bạn</h3>
                    <a
                        href="/tat-ca-san-pham"
                        className="btn btn--rounded btn--border"
                    >
                        Xem tất cả
                    </a>
                </header>

                <ProductsCarousel products={data} />
            </div>
        </section>
    );
};

export default ProductsFeatured;
