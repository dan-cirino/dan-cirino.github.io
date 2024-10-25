import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
const Homepage = lazy(() => import("./pages/Homepage.tsx"));
const Colorpal = lazy(() => import("./pages/Colorpal.tsx"));
const ColorpalOnboarding = lazy(() => import("./pages/ColorpalOnboarding"));
export default function App() {
    const [theme, setTheme] = useState(localStorage.getItem("nd-theme") ?? "light");
    function handleTheme(theme) {
        setTheme(theme);
        localStorage.setItem("nd-theme", theme);
        document.getElementsByTagName("html")[0]?.setAttribute("theme", theme);
    }
    return (_jsx(BrowserRouter, { children: _jsxs(Routes, { children: [_jsx(Route, { index: true, element: _jsx(Homepage, { theme: theme, setTheme: handleTheme }) }), _jsxs(Route, { path: "colorpal", children: [_jsx(Route, { index: true, element: _jsx(Colorpal, { theme: theme, setTheme: handleTheme }) }), _jsx(Route, { path: "onboarding", element: _jsx(ColorpalOnboarding, {}) }), _jsx(Route, { path: "*", element: _jsx(Colorpal, { theme: theme, setTheme: handleTheme }) })] }), _jsx(Route, { path: "*", element: _jsx(Homepage, { theme: theme, setTheme: handleTheme }) })] }) }));
}
