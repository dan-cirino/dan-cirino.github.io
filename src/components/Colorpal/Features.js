import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Feature from "./Feature";
export default function Features({ title, showButton = true, }) {
    return (_jsx("section", { id: "features", className: "flex h-max min-h-screen w-full items-center justify-center bg-primary text-text", children: _jsxs("div", { className: "mx-auto flex h-full w-full max-w-fit flex-col justify-center text-center", children: [title && (_jsx("h2", { className: "mt-4 inline pb-8 text-4xl font-bold text-text lg:text-6xl", children: title })), _jsxs("div", { className: "mx-10 mt-12 grid gap-[6rem] xl:mx-0", children: [_jsx(Feature, { infoOrder: "first", image: "EyeDropper.gif", description: "The EyeDropper tool lets users select colors directly from their screen with pixel-level precision. It simplifies color matching and replication in various developing, design and editing tasks.", button: showButton && {
                                link: "https://chromewebstore.google.com/detail/colorpal-color-picker-eye/mbnpegpimodgjmlbfhkkdgbcfjmgpoad",
                                text: "Add Now",
                            }, children: "EyeDropper" }), _jsx(Feature, { infoOrder: "last", image: "ColorPicker.gif", description: "The Color Picker tool is a user-friendly utility to select specific colors from a palette. It streamlines the process of choosing colors, offering efficiency and precision in color selection.", button: showButton && {
                                link: "https://chromewebstore.google.com/detail/colorpal-color-picker-eye/mbnpegpimodgjmlbfhkkdgbcfjmgpoad",
                                text: "Try it Now",
                            }, children: "Color Picker" }), _jsx(Feature, { infoOrder: "first", image: "TintsandShades.gif", description: "The Tints and Shades tool is a handy resource for adjusting colors by adding white (tints) or black (shades). It helps create variations of a base color, achieving a range of lighter and darker tones with ease.", button: showButton && {
                                link: "https://chromewebstore.google.com/detail/colorpal-color-picker-eye/mbnpegpimodgjmlbfhkkdgbcfjmgpoad",
                                text: "Add Now",
                            }, children: "Tints and Shades" }), _jsx(Feature, { infoOrder: "last", image: "MoveandDelete.gif", description: "The Move tool allows users to change colors position, facilitating organization and arrangement. The Delete tool removes unwanted colors, streamlining the color selection process and enhancing overall efficiency.", button: showButton && {
                                link: "https://chromewebstore.google.com/detail/colorpal-color-picker-eye/mbnpegpimodgjmlbfhkkdgbcfjmgpoad",
                                text: "Try it Now",
                            }, children: "Move and Delete" }), _jsx(Feature, { infoOrder: "first", image: "DownloadPNGandCSV.gif", description: "The Download Image tool enables users to save their color palette as an image file, making it easy to share and reference. The Download CSV tool allows users to export their colors codes to a CSV file, which can be useful for managing and cataloging color information in a structured format.", button: showButton && {
                                link: "https://chromewebstore.google.com/detail/colorpal-color-picker-eye/mbnpegpimodgjmlbfhkkdgbcfjmgpoad",
                                text: "Add Now",
                            }, children: "Download Image and CSV" })] })] }) }));
}
