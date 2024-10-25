import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Navbar from "../components/Navbar";
import Home from "../components/Home";
import Skills from "../components/Skills";
import Portfolio from "../components/Portfolio";

export default function Homepage({
                                     theme,
                                     setTheme,
                                 }: {
    theme: string;
    setTheme: Function;
}) {
    useEffect(() => {
        const storedTheme = localStorage.getItem("nd-theme");
        const defaultTheme = window.matchMedia("(prefers-color-scheme: dark)")
            .matches
            ? "dark"
            : "light";

        setTheme(
            storedTheme === "dark" || storedTheme === "light"
                ? storedTheme
                : defaultTheme,
        );
    }, []);

    return (
        <>
            <Helmet>
                <title>Daniel Cirino\</title>
                <meta
                    name="description"
                    content="I am a Backend software engineer. This is my portfolio website."
                />
            </Helmet>

            <Navbar
                theme={theme}
                setTheme={setTheme}
                navbarMargin={{
                    marginLeft:
                        "ml-[1rem] 2sm:ml-[4rem] sm:ml-[6rem] md:ml-[4rem] lg:ml-[8rem] xl:ml-[14rem] 2xl:ml-[20rem]",
                    marginRight:
                        "mr-[1rem] 2sm:mr-[4rem] sm:mr-[6rem] md:mr-[4rem] lg:mr-[8rem] xl:mr-[14rem] 2xl:mr-[20rem]",
                }}
                logoPath="public/Logos/reshot-icon-computer-case-VUF6S2RYHK.svg"
                menu={["Home", "Skills", "Projects"]}
            />
            <Home
                h2Title="Hello, I'm"
                h1Title="Daniel Cirino"
                typedInfo={{
                    textBefore: "A",
                    strings: ["Backend Software Engineer"],
                    typeSpeed: 80,
                    backSpeed: 50,
                    backDelay: 2000,
                }}
                internalLink={{
                    to: "projects",
                    text: "View Projects",
                }}
                externalLinks={[
                    {
                        link: "https://github.com/dan-cirino",
                        image: FaGithub,
                        text: "",
                    },
                    {
                        link: "https://www.linkedin.com/in/daniel-cirino-/",
                        image: FaLinkedin,
                        text: "",
                    },
                ]}
            />
            <Skills />
            <Portfolio />
        </>
    );
}