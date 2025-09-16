import Image from "next/image";
import ProjectCard from "../components/ProjectCard";
import GitHubIcon from "../components/GithubIcon"; 

const projects = [
  {
    name: "Personal Portfolio",
    description: `This is the website you are on!`,
    imageUrl: "/portfolio.png",
    githubUrl: "https://github.com/WaterPheonix196/waterpheonix196.github.io",
  },
//  {
//    name: "Project 2",
//    description: "A brief description of Project 2.",
//    imageUrl: "/project2.png",
//    githubUrl: "https://github.com/waterpheonix196",
//  },
//  {
//    name: "Project 3",
//    description: "A brief description of Project 3.",
//    imageUrl: "/project3.png",
//    githubUrl: "https://github.com/waterpheonix196",
//  },
];

const skills = [
  { name: "Rust", icon: "/rust.svg" },
  { name: "C++", icon: "/cpp.svg" },
  { name: "JavaScript", icon: "/javascript.svg" },
  { name: "Python", icon: "/python.svg" },
  { name: "Kotlin", icon: "/kotlin.svg" },
  { name: "Next.js", icon: "/nextjs.svg" },
];

const gradientText =
  "bg-gradient-to-r from-cyan-400 to-green-400 text-transparent bg-clip-text";

export default function Home() {
  return (
    <main className="flex min-h-screen w-full flex-col items-center space-y-12 p-8 sm:p-12 bg-gradient-to-br from-[#0f172a] to-[#1e293b]">
      <div className="w-full max-w-4xl space-y-12">
        <header className="text-center pt-8">
          <h1 className={`text-5xl sm:text-6xl font-extrabold drop-shadow ${gradientText}`}>
            EpsilonPhoenix
          </h1>
          <p className="text-lg text-gray-400 mt-3">
            I try to code sometimes (sometimes it works)
          </p>
        </header>

        <section
          id="about"
          className="rounded-2xl bg-[#1E293B]/70 p-8 text-center"
        >
          <h2 className={`text-3xl font-bold mb-4 ${gradientText}`}>
            About Me
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            I&rsquo;m a programmer that loves to play with code and make cool things.
            My main focus is on game modding but I also enjoy webdev and machine
            learning.
          </p>
        </section>

        <section
          id="skills"
          className="rounded-2xl bg-[#1E293B]/70 p-8 text-center"
        >
          <h2 className={`text-3xl font-bold mb-8 ${gradientText}`}>Skills</h2>
          <div className="flex flex-wrap gap-4 justify-center">
            {skills.map((skill) => (
              <div
                key={skill.name}
                className="rounded-full border border-gray-700 bg-gray-800/50 px-4 py-2 flex items-center gap-3 shadow-sm"
              >
                <Image src={skill.icon} alt={skill.name} width={24} height={24} />
                <span className="text-gray-200">{skill.name}</span>
              </div>
            ))}
          </div>
        </section>

        <section
          id="projects"
          className="rounded-2xl bg-[#1E293B]/70 p-8 text-center"
        >
          <h2 className={`text-3xl font-bold mb-8 ${gradientText}`}>
            Public Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={project.name} index={index} {...project} />
            ))}
          </div>
        </section>

        <footer className="text-center pb-8">
          <a
            href="https://github.com/waterpheonix196"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-cyan-500 to-green-500 px-6 py-3 text-white font-medium shadow-lg transition-transform duration-300 hover:scale-105"
          >
            <GitHubIcon className="w-6 h-6" />
            GitHub
          </a>
        </footer>
      </div>
    </main>
  );
}
