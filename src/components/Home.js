import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useRef } from "react";
import { Link } from "react-scroll";
import { IconContext } from "react-icons";
import Typed from "typed.js";
export default function Home({ h2Title, h1Title, description, typedInfo, internalLink, externalLinks, }) {
    const typedElem = useRef(null);
    useEffect(() => {
        const typed = new Typed(typedElem.current, {
            strings: typedInfo.strings,
            typeSpeed: typedInfo.typeSpeed,
            backSpeed: typedInfo.backSpeed,
            backDelay: typedInfo.backDelay,
            loop: true,
        });
        return () => {
            typed.destroy();
        };
    }, []);
    return (_jsx("section", { id: "home", className: "h-screen min-h-[800px] w-full bg-primary", children: _jsxs("div", { className: "mx-auto flex h-full max-w-fit flex-col items-center justify-center", children: [_jsxs("div", { children: [h2Title && (_jsx("h2", { className: "m-4 text-2xl font-bold text-text 2sm:text-3xl sm:text-5xl lg:my-4 lg:text-5xl", children: h2Title })), h1Title && (_jsx("h1", { className: "m-4 text-4xl font-bold text-text 2sm:text-5xl sm:text-7xl lg:my-4 lg:text-8xl", children: h1Title })), description && (_jsx("p", { className: "m-4 max-w-[700px] text-sm font-normal text-text 2sm:text-lg sm:text-xl lg:my-8", children: description })), typedInfo && (_jsxs("h2", { className: "m-4 max-w-[700px] text-xl font-bold text-text 2sm:text-2xl sm:text-3xl lg:text-4xl", children: [typedInfo.textBefore && `${typedInfo.textBefore} `, _jsx("span", { className: "text-highlight", ref: typedElem })] }))] }), _jsxs("div", { className: `${externalLinks.length >= 2 ? "gap-x-4" : "gap-x-0"} mt-8 grid place-items-center gap-y-4 2sm:flex 2sm:gap-6 lg:gap-8`, children: [internalLink && internalLink.to && (_jsx(Link, { to: internalLink.to, offset: -60, className: "col-span-2 my-2 cursor-pointer items-center rounded-xl border-2 border-highlight p-[10px] text-sm font-semibold text-text duration-300 hover:border-highlight hover:bg-highlight sm:p-[14px] lg:text-base", smooth: true, duration: 400, children: internalLink.text })), externalLinks &&
                            externalLinks.map((link) => (_jsx("a", { className: "my-2 flex items-center rounded-full border-2 border-highlight p-2 text-text duration-300 hover:border-highlight hover:bg-highlight sm:p-[10px]", href: link.link, target: "_blank", rel: "noreferrer", children: _jsxs(IconContext.Provider, { value: {
                                        className: "text-2xl sm:text-3xl",
                                    }, children: [_jsx(link.image, {}), link.text && (_jsx("p", { className: "ml-2 text-sm font-semibold lg:text-base", children: link.text }))] }) }, link.link)))] })] }) }));
}
