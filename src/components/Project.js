import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
export default function Project({ image, description, techStack, buttons, children, }) {
    return (
    // Project Container
    _jsxs("div", { className: "h-fit w-fit max-w-[320px] rounded-lg border-2 border-highlight duration-500 hover:scale-[1.05] hover:shadow-[0_0_10px_0_highlight] sm:h-full", children: [_jsx("img", { className: "mx-auto h-fit w-fit rounded-t-md", src: `/Projects/${image}`, alt: children }), _jsx("h3", { className: "m-4 text-xl font-bold text-highlight sm:text-2xl", children: children }), _jsx("p", { className: "m-4 text-sm font-medium text-text 2sm:text-base", children: description }), _jsx("p", { className: "m-4 text-sm font-semibold text-highlight 2sm:text-base", children: techStack }), buttons && (_jsx("div", { className: buttons.length === 1
                    ? "mt-4 flex justify-center"
                    : "mt-4 grid grid-cols-2 gap-2", children: buttons.map((button) => (_jsx("a", { className: "m-2 flex justify-around rounded-lg border-2 border-highlight p-3 duration-300 hover:border-highlight hover:bg-highlight 2sm:mx-4", href: button.link, target: "_blank", rel: "noreferrer", children: _jsxs("div", { className: "grid items-center whitespace-nowrap text-xs font-semibold text-text 2sm:flex 2sm:gap-2", children: [_jsx(button.image, { size: 25, className: "mx-auto mb-2 2sm:m-0" }), button.name] }) }, button.link))) }))] }));
}
