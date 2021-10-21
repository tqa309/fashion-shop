import Layout from '../layouts/Main';
import PageIntro from '../components/PageIntro';
import ProductsFeatured from '../components/ProductsFeatured';
import Footer from '../components/Footer';
import Subscribe from '../components/Subscribe';

const IndexPage = () => {
  return (
    <Layout>
      <PageIntro />

      <section className="featured">
        <div className="container">
          <article style={{backgroundImage: 'url(/images/featured-1.jpg)'}} className="featured-item featured-item-large">
            <div className="featured-item__content">
              <h3>Hàng mới đã về!</h3>
              <a href="#" className="btn btn--rounded">Xem bộ sưu tập</a>
            </div>
          </article>
          
          <article style={{backgroundImage: 'url(/images/featured-2.jpg)'}} className="featured-item featured-item-small-first">
            <div className="featured-item__content">
              <h3>Thun trơn basic 129,000đ</h3>
              <a href="#" className="btn btn--rounded">Xem chi tiết</a>
            </div>
          </article>
          
          <article style={{backgroundImage: 'url(/images/featured-3.jpg)'}} className="featured-item featured-item-small">
            <div className="featured-item__content">
              <h3>Khuyến mãi hè</h3>
              <a href="#" className="btn btn--rounded">XEM TẤT CẢ</a>
            </div>
          </article>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <header className="section__intro">
            <h4>Vì sao chọn chúng tôi?</h4>
          </header>

          <ul className="shop-data-items">
            <li>
              <i className="icon-shipping"></i>
              <div className="data-item__content">
                <h4>Miễn phí vận chuyển</h4>
                <p>Tất cả các đơn hàng trên 500,000đ được miễn phí vận chuyển toàn quốc.</p>
              </div>
            </li>
            
            <li>
              <i className="icon-payment"></i>
              <div className="data-item__content">
                <h4>Giao dịch nhanh chóng</h4>
                <p>Tất cả giao dịch được thực hiện ngay lập tức thông qua hệ thống bảo mật cao.</p>
              </div>
            </li>
            
            <li>
              <i className="icon-cash"></i>
              <div className="data-item__content">
                <h4>Cam kết hoàn tiền</h4>
                <p>Nếu đơn hàng đến tay bạn bị hỏng hoặc không đúng chất lượng, bạn sẽ được hoàn trả 100% tiền.</p>
              </div>
            </li>
            
            <li>
              <i className="icon-materials"></i>
              <div className="data-item__content">
                <h4>Chất lượng tốt nhất</h4>
                <p>Thiết kế để trường tồn, mỗi sản phẩm của chúng tôi đều được tạo ra bằng những vật liệu tốt nhất.</p>
              </div>
            </li>
          </ul>
        </div>
      </section>

      <ProductsFeatured />
      <Subscribe />
      <Footer />
    </Layout>
  )
}

export default IndexPage
