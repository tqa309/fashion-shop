import React, { Fragment } from "react";
import Router from "next/router";
import { wrapper } from "../store";

// global styles
import "swiper/scss";
import "rc-slider/assets/index.css";
import "react-rater/lib/react-rater.css";
import "../assets/css/styles.scss";

const MyApp = ({ Component, pageProps }) => (
    <Fragment>
        <Component {...pageProps} />
    </Fragment>
);


export default wrapper.withRedux(MyApp);
