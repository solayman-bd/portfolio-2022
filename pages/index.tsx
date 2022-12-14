import type { NextPage } from "next";
import Head from "next/head";
import About from "../components/About";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import WorkExperience from "../components/WorkExperience";

const Home: NextPage = () => {
  return (
    <div className=" overflow-x-hidden font-mono bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-scroll z-0 main">
      <Head>
        <title>SOLAYMAN&#39;S PORTFOLIO</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <section id="hero" className="snap-center">
        <Hero />
      </section>

      <section id="about" className="snap-center">
        <About />
      </section>

      <section id="experience" className="snap-center">
        <WorkExperience />
      </section>
      {/* Skills */}
      <section id="skills" className="snap-center">
        <Skills />
      </section>
      <section
        id="demo"
        className="snap-center flex items-center justify-center h-full"
      >
        <h1>Rest of the part is coming soon....</h1>
      </section>

      {/* Projects */}
      {/* <section id="projects" className="snap-center">
        <Projects />
      </section> */}
      {/* Contact Me */}
    </div>
  );
};

export default Home;
