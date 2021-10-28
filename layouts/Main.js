import Head from "next/head";
import Header from "../components/Header";
import { useRouter } from "next/router";

const MainLayout = ({ children, title = "Digiviet | Giải pháp mua sắm cả tủ đồ cho nam giới" }) => {
    const router = useRouter();
    const pathname = router.pathname;

    return (
        <div className="app-main">
            <Head>
                <title>{title}</title>
            </Head>

            <Header />

            <main className={pathname !== "/" ? "main-page" : ""}>
                {children}
            </main>
        </div>
    );
};

export default MainLayout
