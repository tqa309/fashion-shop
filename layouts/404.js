import Head from "next/head";
import Header from "../components/Header";
import { useRouter } from "next/router";

export default ({ children, title = "Next.js Ecommerce" }) => {
    const router = useRouter();
    const pathname = router.pathname;

    return (
        <div className="app-main">
            <Head>
                <title>Không tìm thấy trang &mdash; {title}</title>
            </Head>

            <Header isErrorPage />

            <main className={pathname !== "/" ? "main-page" : ""}>
                {children}
            </main>
        </div>
    );
};
