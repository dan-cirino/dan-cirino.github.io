import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState, useEffect, useMemo } from "react";
import { Link } from "react-scroll";
import { FaBars, FaTimes } from "react-icons/fa";
import { MdLightMode, MdDarkMode } from "react-icons/md";
import NavbarMenuLink from "./NavbarMenuLink";
import NavbarMobileMenuLink from "./NavbarMobileMenuLink";
export default function Navbar({ theme, setTheme, navbarMargin, logoPath, logoTitle, menu, }) {
    const [hamburger, setHamburger] = useState(false);
    const [scrollY, setScrollY] = useState(window.scrollY);
    useEffect(() => {
        window.addEventListener("scroll", handleScrollY);
        return () => {
            window.removeEventListener("scroll", handleScrollY);
        };
    }, []);
    function handleScrollY() {
        setScrollY(window.scrollY);
    }
    const memoizedNavbar = useMemo(() => (_jsxs(_Fragment, { children: [logoPath && (_jsxs(Link, { to: "home", offset: -60, smooth: true, duration: 400, className: `z-10 flex cursor-pointer justify-self-start ${navbarMargin.marginLeft}`, onClick: () => hamburger && setHamburger(false), children: [_jsx("img", { className: "h-[40px] w-[40px]", src: logoPath, alt: "Logo" }), logoTitle && (_jsx("h1", { className: "ml-2 hidden self-center text-2xl font-bold text-text sm:flex lg:text-3xl", children: logoTitle }))] })), menu && (_jsx("nav", { className: "hidden justify-self-center text-lg font-semibold md:flex", children: menu.map((menuLink) => (_jsx(NavbarMenuLink, { children: menuLink }, menuLink))) })), menu && (_jsx("div", { className: "z-10 cursor-pointer justify-self-center md:hidden", onClick: () => setHamburger(!hamburger), children: hamburger ? _jsx(FaTimes, { size: 30 }) : _jsx(FaBars, { size: 30 }) })), _jsx("div", { className: `z-10 cursor-pointer justify-self-end ${navbarMargin.marginRight}`, onClick: () => setTheme(localStorage.getItem("nd-theme") === "light" ? "dark" : "light"), children: theme === "dark" ? (_jsx(MdLightMode, { size: 30 })) : (_jsx(MdDarkMode, { size: 30 })) }), menu && (_jsx("nav", { className: hamburger
                    ? "absolute left-0 top-[58px] flex h-[calc(100vh-58px)] w-full flex-col items-center justify-center justify-self-center bg-primary"
                    : "hidden", children: menu.map((menuLink) => (_jsx(NavbarMobileMenuLink, { setHamburger: setHamburger, children: menuLink }, menuLink))) }))] })), [hamburger, theme]);
    return (_jsx("header", { className: `${scrollY > 600
            ? "border-b-2 border-t-2 border-b-highlight border-t-primary "
            : ""}fixed z-10 grid h-[60px] w-full grid-cols-[1fr,1fr,1fr] items-center bg-primary text-text`, children: memoizedNavbar }));
}
