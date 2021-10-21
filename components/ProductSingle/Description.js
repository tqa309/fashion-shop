const Description = ({ show }) => {
    const style = {
        display: show ? "flex" : "none",
    };

    return (
        <section style={style} className="product-single__description">
            <div className="product-description-block">
                <i className="icon-cart"></i>
                <h4>Mô tả chi tiết</h4>
                <p>
                    Áo phông White Summer Vibes thuộc dòng uiKit với nhiều màu
                    sắc in. <br /> Làm bằng cotton jersey. Áo phông vừa vặn
                    hoàn hảo với quần jean, quần dài hoặc quần short.
                </p>
            </div>
            <div className="product-description-block">
                <i className="icon-cart"></i>
                <h4>Mô tả chi tiết</h4>
                <p>
                    Áo phông White Summer Vibes thuộc dòng uiKit với nhiều màu
                    sắc in. <br /> Làm bằng cotton jersey. Áo phông vừa vặn
                    hoàn hảo với quần jean, quần dài hoặc quần short.
                </p>
            </div>
        </section>
    );
};

export default Description;
