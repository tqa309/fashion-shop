import { useState } from 'react';
import Footer from '../../components/Footer';
import Layout from '../../layouts/Main';
import Breadcrumb from '../../components/Breadcrumb';
import ProductsFeatured from '../../components/ProductsFeatured';
import Gallery from '../../components/ProductSingle/Gallery';
import Content from '../../components/ProductSingle/Content';
import Description from '../../components/ProductSingle/Description';
import Reviews from '../../components/ProductSingle/Reviews';
import { server } from '../../utils/server'; 

export async function getServerSideProps({ query }) {

  const pid = query.pid;
  const res = await fetch(`${server}/api/product/${pid}`);
  const product = await res.json();

  return {
    props: {
      product,
    },
  }
}

const Product = ({ product }) => {
  const [showBlock, setShowBlock] = useState('description');

  return (
    <Layout>
      <Breadcrumb currentPage={product.name} />

      <section className="product-single">
        <div className="container">
          <div className="product-single__content">
            <Gallery images={product.images} />
            <Content product={product} />
          </div>

          <div className="product-single__info">
            <div className="product-single__info-btns">
              <button type="button" onClick={() => setShowBlock('description')} className={`btn btn--rounded ${showBlock === 'description' ? 'btn--active' : ''}`}>Mô tả chi tiết</button>
              <button type="button" onClick={() => setShowBlock('reviews')} className={`btn btn--rounded ${showBlock === 'reviews' ? 'btn--active' : ''}`}>Đánh giá (2)</button>
            </div>

            <Description product={product} show={showBlock === 'description'} />
            <Reviews product={product} show={showBlock === 'reviews'} />
          </div>
        </div>
      </section>

      <div className="product-single-page">
        <ProductsFeatured />
      </div>
      <Footer />
    </Layout>
  );
}

export default Product
