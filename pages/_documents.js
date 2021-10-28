import { Fragment } from "react";
import Document, { Head, Main, NextScript } from "next/document";

export default class CustomDocument extends Document {
    static async getInitialProps(ctx) {
        const originalRenderPage = ctx.renderPage;
        const initialProps = await Document.getInitialProps(ctx);

        // Check if in production
        const isProduction = process.env.NODE_ENV === "production";

        return {
            ...initialProps,
            isProduction,
        };
    }

    render() {
        const { isProduction } = this.props;

        return (
            <html lang="en">
                <Head>
                    {/* We only want to add the scripts if in production */}
                    {true && (
                        <Fragment>
                            {/* Global Site Tag (gtag.js) - Google Analytics */}
                            <script
                                dangerouslySetInnerHTML={{
                                    __html: `
                                    <!-- Google Analytics -->
                                    <script>
                                    (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
                                    (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
                                    m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
                                    })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');
                                    
                                    ga('create', 'G-FSN48PK9YK', 'auto');
                                    ga('send', 'pageview');
                                    </script>
                                    <!-- End Google Analytics -->
                  `,
                                }}
                            />
                        </Fragment>
                    )}
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </html>
        );
    }
}
