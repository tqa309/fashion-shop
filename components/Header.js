import { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import useOnClickOutside from "use-onclickoutside";
import Logo from "../assets/icons/logo";
import Link from "next/link";
import { useRouter } from "next/router";
import { logout } from "../store/actions/auth.actions";

const Header = ({ isErrorPage }) => {
    const router = useRouter();
    const { cartItems } = useSelector((state) => state.cart);
    const arrayPaths = ["/"];

    const [onTop, setOnTop] = useState(
        !arrayPaths.includes(router.pathname) || isErrorPage ? false : true
    );
    const [menuOpen, setMenuOpen] = useState(false);
    const [searchOpen, setSearchOpen] = useState(false);
    const navRef = useRef(null);
    const searchRef = useRef(null);

    const headerClass = () => {
        if (window.pageYOffset === 0) {
            setOnTop(true);
        } else {
            setOnTop(false);
        }
    };

    useEffect(() => {
        if (!arrayPaths.includes(router.pathname) || isErrorPage) {
            return;
        }

        headerClass();
        window.onscroll = function () {
            headerClass();
        };

        return 
    }, []);

    const closeMenu = () => {
        setMenuOpen(false);
    };

    const closeSearch = () => {
        setSearchOpen(false);
    };

    // on click outside
    useOnClickOutside(navRef, closeMenu);
    useOnClickOutside(searchRef, closeSearch);

    // Logout
    const auth = useSelector(state => state.auth)
    
    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch(logout({
            token: auth.token
        }))
    }

    return (
        <header className={`site-header ${!onTop ? "site-header--fixed" : ""}`}>
            <div className="container">
                <Link href="/">
                    <a>
                        <h1 className="site-logo">
                            <Logo />
                            Digiviet
                        </h1>
                    </a>
                </Link>
                <nav
                    ref={navRef}
                    className={`site-nav ${menuOpen ? "site-nav--open" : ""}`}
                >
                    <Link href="/tat-ca-san-pham">
                        <a>Tất cả sản phẩm</a>
                    </Link>
                    <a href="#">Áo</a>
                    <a href="#">Quần</a>
                    <a href="#">Phụ kiện</a>
                    <a href="#">Blog</a>
                    <a href="/dang-nhap">Tài khoản</a>
                    {
                        auth?.token &&
                        <a href="#" onClick={handleLogout}>Đăng xuất</a>
                    }
                </nav>

                <div className="site-header__actions">
                    <button
                        ref={searchRef}
                        className={`search-form-wrapper ${
                            searchOpen ? "search-form--active" : ""
                        }`}
                    >
                        <form className={`search-form`}>
                            <i
                                className="icon-cancel"
                                onClick={() => setSearchOpen(!searchOpen)}
                            ></i>
                            <input
                                type="text"
                                name="search"
                                placeholder="Bạn muốn tìm gì..."
                            />
                        </form>
                    </button>
                    <Link href="/gio-hang">
                        <button className="btn-cart">
                            <i className="icon-cart"></i>
                            {cartItems.length > 0 && (
                                <span className="btn-cart__count">
                                    {cartItems.length}
                                </span>
                            )}
                        </button>
                    </Link>
                    <Link href="/dang-nhap">
                        <button className="site-header__btn-avatar">
                            <i className="icon-avatar"></i>
                        </button>
                    </Link>
                    <button
                        onClick={() => setMenuOpen(true)}
                        className="site-header__btn-menu"
                    >
                        <i className="btn-hamburger">
                            <span></span>
                        </i>
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Header;
