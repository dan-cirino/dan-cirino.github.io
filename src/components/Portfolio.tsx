import Project from "./Project";
import { FaGithub } from "react-icons/fa";

export default function Portfolio() {
    return (
        <section
            id="projects"
            className="flex h-max min-h-screen w-full items-center justify-center bg-primary text-text"
        >
            {/* Container */}
            <div className="mx-auto flex h-full w-full max-w-fit flex-col justify-center text-center">
                <h2 className="mt-4 inline pb-8 text-4xl font-bold text-text lg:text-6xl">
                    Projects
                </h2>

                <div className="mx-14 grid grid-cols-1 gap-16 py-8 text-center md:grid-cols-2 lg:mx-0 xl:grid-cols-3">
                    <Project
                        image="images.png"
                        description="Project 1"
                        techStack="Java, Spring, Spring Boot, Kafka"
                        buttons={[
                            {
                                name: "GitHub",
                                image: FaGithub,
                                link: "",
                            },
                        ]}
                    >
                        Kafka
                    </Project>
                </div>
            </div>
        </section>
    );
}