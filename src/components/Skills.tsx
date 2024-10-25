import Skill from "./Skill";

export default function Skills() {
    return (
        <section
            id="skills"
            className="flex h-max min-h-screen w-full items-center justify-center bg-primary text-text"
        >
            {/* Container */}
            <div className="mx-auto flex h-full w-full max-w-fit flex-col justify-center text-center">
                <h2 className="mt-4 inline pb-8 text-4xl font-bold text-text lg:text-6xl">
                    Skills
                </h2>

                {/* Skills Grid */}
                <div className="grid grid-cols-1 gap-8 py-8 text-center 2sm:grid-cols-2 sm:gap-12 md:grid-cols-3 xl:grid-cols-4">
                    <Skill image="icons8-java-48.png">Java</Skill>
                    <Skill image="icons8-spring-boot-48.png">Spring</Skill>
                    <Skill image="icons8-react-80.png">React</Skill>
                    <Skill image="icons8-sql-50.png">SQL</Skill>
                    <Skill image="icons8-aws-48.png">AWS</Skill>
                    <Skill image="icons8-docker-48.png">Docker</Skill>
                    <Skill image="icons8-kubernetes-48.png">Kubernetes</Skill>
                    <Skill image="Cassandra_logo.svg.png">Cassandra</Skill>
                    <Skill image="icons8-redis-48.png">Redis</Skill>
                    <Skill image="icons8-mariadb-48.png">MariaDB</Skill>
                </div>
            </div>
        </section>
    );
}