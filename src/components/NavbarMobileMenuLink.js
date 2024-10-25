import { jsx as _jsx } from "react/jsx-runtime";
import { Link } from "react-scroll";
export default function NavbarMobileMenuLink({ setHamburger, children, }) {
    return (_jsx(Link, { to: children.toLowerCase(), offset: -60, className: "cursor-pointer py-4 text-4xl font-medium transition duration-300 ease-in-out hover:text-highlight", smooth: true, duration: 400, onClick: () => setHamburger(false), children: children }));
}
