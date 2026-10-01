"use client";

import { useEffect, useState } from "react";

const projects = [
  {
    name: "DocuMind",
    description:
      "AI document intelligence system that lets users interact with documents using retrieval, contextual answers, and page-level citations.",
    github: "https://github.com/Aakashi06/DocuMind",
  },
  {
    name: "PaperScout",
    description:
      "Research assistant that discovers relevant academic papers and turns scattered research into structured insights.",
    github: "https://github.com/Aakashi06",
  },
  {
    name: "Voice AI Agent",
    description:
      "AI voice agent focused on real-time speech interaction, agentic workflows, and tool calling.",
    github: "https://github.com/Aakashi06",
  },
];

const blogs = [
  {
    title: "How I Think About Building AI Agents",
    image: "/blogs/ai-agents.jpg",
    link: "#",
  },
  {
    title: "Building My First Voice AI Agent",
    image: "/blogs/voice-ai.jpg",
    link: "#",
  },
  {
    title: "Understanding RAG Beyond the Basics",
    image: "/blogs/rag.jpg",
    link: "#",
  },
];

export default function Home() {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const savedTheme = localStorage.getItem("portfolio-theme");

    const dark = savedTheme !== "light";

    setIsDark(dark);

    document.documentElement.classList.toggle("dark", dark);
    document.documentElement.setAttribute(
      "data-theme",
      dark ? "dark" : "light"
    );
  }, []);

  function handleThemeToggle() {
    const newIsDark = !isDark;

    setIsDark(newIsDark);

    document.documentElement.classList.toggle("dark", newIsDark);
    document.documentElement.setAttribute(
      "data-theme",
      newIsDark ? "dark" : "light"
    );

    localStorage.setItem(
      "portfolio-theme",
      newIsDark ? "dark" : "light"
    );
  }

  return (
    <main>
      {/* Navbar */}
      <nav>
        <a href="#about" className="logo">
          AAKASHI
        </a>

        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#work">Work</a>
          <a href="#projects">Projects</a>
          <a href="#blogs">Blog</a>
          <a href="/resume.pdf">Resume</a>

          <button
            type="button"
            className={`theme-toggle ${isDark ? "is-dark" : "is-light"}`}
            onClick={handleThemeToggle}
            aria-label={
              isDark
                ? "Switch website to light theme"
                : "Switch website to dark theme"
            }
          >
            <span className="theme-toggle-track">
              <span className="theme-toggle-thumb" />
            </span>
          </button>
        </div>
      </nav>

      {/* Hero */}
      <section id="about" className="hero">
        <p className="eyebrow">AI ENGINEER</p>

        <h1>
          Hi, I&apos;m Aakashi.
          <br />
          I build intelligent systems.
        </h1>

        <p className="hero-description">
          I&apos;m an AI Engineer focused on building practical AI systems,
          with a particular interest in AI agents, voice AI, LLMs, RAG, and
          model fine-tuning.
        </p>

        <div className="hero-links">
          <a
            href="https://github.com/Aakashi06"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/aakashi-jaiswal-6b448524b/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>

          <a
            href="https://x.com/Aakashi_123"
            target="_blank"
            rel="noopener noreferrer"
          >
            X
          </a>
        </div>
      </section>

      {/* Experience */}
      <section id="work">
        <p className="eyebrow">WORK</p>
        <h2>Experience.</h2>

        <div className="experience">
          <article className="experience-item">
            <div className="experience-meta">
              <span>Mar 2025 — Dec 2025</span>
              <span>Remote · Surat</span>
            </div>

            <div className="experience-content">
              <h3>Founder&apos;s Office Intern</h3>
              <p className="company">AdroPardi</p>

              <ul>
                <li>
                  Worked across product, technology, marketing, creative, and
                  operations, turning ideas and requirements into actionable
                  execution.
                </li>

                <li>
                  Managed and maintained the company website, including
                  updates, performance, and user experience improvements.
                </li>

                <li>
                  Created and edited marketing and social media content across
                  YouTube, Instagram, and other platforms.
                </li>

                <li>
                  Wrote blogs and website content to support brand communication
                  and online visibility.
                </li>

                <li>
                  Supported day-to-day startup operations, logistics,
                  coordination, and technical execution.
                </li>
              </ul>
            </div>
          </article>

          <article className="experience-item">
            <div className="experience-meta">
              <span>Sept 2024 — Dec 2024</span>
              <span>Remote</span>
            </div>

            <div className="experience-content">
              <h3>Front-end Engineer</h3>
              <p className="company">Teelure</p>

              <ul>
                <li>
                  Built and managed the company website, including product
                  pages, updates, and website changes.
                </li>

                <li>
                  Integrated the payment gateway for online customer payments.
                </li>

                <li>
                  Managed product listings, product information, and website
                  content.
                </li>

                <li>
                  Worked on SEO to improve the website&apos;s search visibility.
                </li>
              </ul>
            </div>
          </article>
        </div>
      </section>

      {/* Projects */}
      <section id="projects">
        <p className="eyebrow">PROJECTS</p>
        <h2>Selected work.</h2>

        <div className="projects">
          {projects.map((project) => (
            <article className="project-item" key={project.name}>
              <div>
                <h3>{project.name}</h3>
                <p>{project.description}</p>
              </div>

              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </article>
          ))}
        </div>
      </section>

      {/* Blog */}
      <section id="blogs">
        <p className="eyebrow">BLOG</p>
        <h2>Things I&apos;ve written.</h2>

        <div className="blogs">
          {blogs.map((blog) => (
            <article className="blog-card" key={blog.title}>
              <a
                href={blog.link}
                target="_blank"
                rel="noopener noreferrer"
                className="blog-image-link"
              >
                <img src={blog.image} alt={blog.title} />
              </a>

              <div className="blog-info">
                <h3>{blog.title}</h3>

                <a
                  href={blog.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="read-link"
                >
                  Read
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer>
        <span>AAKASHI JAISWAL</span>
        <span>© 2026</span>
      </footer>
    </main>
  );
}