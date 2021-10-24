import Head from "next/head";
import Header from "../components/Header";
import { useRouter } from "next/router";

const Layout404 = ({ children, title = "" }) => {
    const router = useRouter();
    const pathname = router.pathname;

    const pageTitle = title ? title : 'Không tìm thấy trang bạn yêu cầu'

    return (
        <div className="app-main">
            <Head>
                <title>{pageTitle}</title>
            </Head>

            <Header isErrorPage />

            <main className={pathname !== "/" ? "main-page" : ""}>
                {children}
            </main>
        </div>
    );
};

export default Layout404;
