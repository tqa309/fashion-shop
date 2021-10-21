import Layout from "../layouts/Main";
import Footer from "../components/Footer";
import Breadcrumb from "../components/Breadcrumb";
import ProductsFilter from "../components/ProductsFilter";
import ProductsContent from "../components/ProductsPageContent";

const Products = () => (
    <Layout>
        <Breadcrumb />
        <section className="products-page">
            <div className="container">
                <ProductsFilter />
                <ProductsContent />
            </div>
        </section>
        <Footer />
    </Layout>
);

export default Products;
