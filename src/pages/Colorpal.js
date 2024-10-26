import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { FaChrome } from "react-icons/fa";
import Navbar from "../components/Navbar";
import Home from "../components/Home";
import Features from "../components/Colorpal/Features";
export default function Colorpal({ theme, setTheme, }) {
    useEffect(() => {
        const storedTheme = localStorage.getItem("nd-theme");
        const defaultTheme = window.matchMedia("(prefers-color-scheme: dark)")
            .matches
            ? "dark"
            : "light";
        setTheme(storedTheme === "dark" || storedTheme === "light"
            ? storedTheme
            : defaultTheme);
    }, []);
    return (_jsxs(_Fragment, { children: [_jsxs(Helmet, { children: [_jsx("title", { children: "ColorPal - Advanced color tools" }), _jsx("meta", { name: "description", content: "Browser extension to pick colors from the screen, make tints and shades and download your palette!" }), _jsx("link", { rel: "icon", href: "/ColorpalLogo.png" }), _jsx("link", { rel: "canonical", href: "https://daridis.com/colorpal" })] }), _jsx(Navbar, { theme: theme, setTheme: setTheme, navbarMargin: {
                    marginLeft: "ml-[1rem] 2sm:ml-[4rem] md:ml-[2rem] lg:ml-[6rem] xl:ml-[14rem] 2xl:ml-[20rem]",
                    marginRight: "mr-[1rem] 2sm:mr-[4rem] md:mr-[2rem] lg:mr-[6rem] xl:mr-[14rem] 2xl:mr-[20rem]",
                }, logoPath: "/ColorpalLogo.png", logoTitle: "ColorPal", menu: ["Home", "Features"] }), _jsx(Home, { h2Title: "Advanced color tools", description: _jsxs(_Fragment, { children: [_jsx("span", { className: "text-highlight", children: "Free" }), " and powerful browser extension that helps you", " ", _jsx("span", { className: "text-highlight", children: "pick colors" }), " from the screen, make ", _jsx("span", { className: "text-highlight", children: "tints and shades" }), " and", " ", _jsx("span", { className: "text-highlight", children: "download your palette" }), "!"] }), typedInfo: {
                    textBefore: "",
                    strings: [
                        "Color Picker",
                        "EyeDropper",
                        "Save favorite colors",
                        "Auto copy color codes",
                        "RGB, HEX, HSL, HSV formats",
                        "Tints and Shades",
                        "Download palette image",
                        "Download colors data csv",
                        "Move colors",
                        "Delete colors",
                        "30.000 color names",
                        "Light and Dark theme",
                    ],
                    typeSpeed: 50,
                    backSpeed: 40,
                    backDelay: 1500,
                }, internalLink: {
                    to: "features",
                    text: "Discover Features",
                }, externalLinks: [
                    {
                        link: "https://chromewebstore.google.com/detail/colorpal-color-picker-eye/mbnpegpimodgjmlbfhkkdgbcfjmgpoad",
                        image: FaChrome,
                        text: "Add to Chrome & Edge",
                    },
                ] }), _jsx(Features, { title: "Features" })] }));
}
