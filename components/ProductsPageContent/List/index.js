import useSwr from "swr";
import { server } from "../../../utils/server";
import ProductItem from "./../../ProductItem";
import ProductsLoading from "./Loading";

const ProductsContent = () => {
    const fetcher = (url) => fetch(url).then((res) => res.json());
    const { data, error } = useSwr(`${server}/api/products`, fetcher);

    if (error) return <div>Không thể tải thông tin người dùng</div>;
    return (
        <>
            {!data && <ProductsLoading />}

            {data && (
                <section className="products-list">
                    {data.map((item) => (
                        <ProductItem
                            discount={item.discount}
                            key={item.id}
                            id={item.id}
                            price={item.price}
                            currentPrice={item.currentPrice}
                            productImage={item.images[0]}
                            name={item.name}
                        />
                    ))}
                </section>
            )}
        </>
    );
};

export default ProductsContent;
