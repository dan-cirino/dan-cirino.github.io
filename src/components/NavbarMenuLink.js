import { jsx as _jsx } from "react/jsx-runtime";
import { Link } from "react-scroll";
export default function NavbarMenuLink({ children }) {
    return (_jsx(Link, { to: children.toLowerCase(), offset: -60, className: "mx-4 cursor-pointer transition duration-300 ease-in-out hover:text-highlight", activeClass: "text-highlight", spy: true, smooth: true, duration: 400, children: children }));
}
