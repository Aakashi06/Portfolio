"use client";

import { useEffect, useState } from "react";

const projects = [
  {
    name: "Bodh",
    description:
      "Multilingual voice AI learning companion that lets users ask questions naturally and learn through voice conversations in English, Hindi, Hinglish, and supported Indian languages.",
    image: "/projects/bodh.png",
    github: "https://github.com/Aakashi06/Bodh",
  },
  {
    name: "DocuMind",
    description:
      "AI document intelligence system that lets users upload PDFs, DOCX, or TXT files and interact with their documents using retrieval, contextual answers, and page-level citations.",
    image: "/projects/documind.png",
    github: "https://github.com/Aakashi06/DocuMind",
  },
  {
    name: "Job Search Agent",
    description:
      "AI agent that turns plain-language job preferences into a short list of matching roles by asking follow-up questions, searching the web, and extracting relevant job information.",
    image: "/projects/job-search-agent.png",
    github: "https://github.com/Aakashi06/Job-Search-Agent",
  },
  {
    name: "Aura CV",
    description:
      "A simple web app for discovering modern, minimal, and aesthetic CV templates, filtering them by style, and starting a professional resume in just a few clicks.",
    image: "/projects/aura-cv.png",
    github: "https://github.com/Aakashi06/aura-cv",
  },
  {
    name: "Nanocode",
    description:
      "A coding CLI agent that helps developers work with their codebase through natural-language commands and AI-powered coding workflows.",
    image: "/projects/nanocode.png",
    github: "https://github.com/Aakashi06/Nanocode",
  },
];

const galleryImages = Array.from({ length: 12 }, (_, index) => index + 1);

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
          <a href="#gallery">Gallery</a>

          {/* Replace this URL with your Google Drive resume link */}
          <a
            href="https://drive.google.com/file/d/11RKOJhyz0Yda4cDmEFcTluuNDhUVGYzS/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            Resume
          </a>

          <button
            type="button"
            className={`theme-toggle ${
              isDark ? "is-dark" : "is-light"
            }`}
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
          I&apos;m an AI Engineer focused on building practical AI
          systems, with a particular interest in AI agents, voice AI,
          LLMs, RAG, and model fine-tuning.
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
                  Worked across product, technology, marketing,
                  creative, and operations, turning ideas and
                  requirements into actionable execution.
                </li>

                <li>
                  Managed and maintained the company website,
                  including updates, performance, and user experience
                  improvements.
                </li>

                <li>
                  Created and edited marketing and social media
                  content across YouTube, Instagram, and other
                  platforms.
                </li>

                <li>
                  Wrote blogs and website content to support brand
                  communication and online visibility.
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
                  Built and managed the company website, including
                  product pages, updates, and website changes.
                </li>

                <li>
                  Integrated the payment gateway for online customer
                  payments.
                </li>

                <li>
                  Managed product listings, product information, and
                  website content.
                </li>

                <li>
                  Worked on SEO to improve the website&apos;s search
                  visibility.
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
              <div className="project-content">
                <div>
                  <h3>{project.name}</h3>
                  <p>{project.description}</p>
                </div>

                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-github"
                >
                  GitHub
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Gallery */}
      <section id="gallery">
        <p className="eyebrow">GALLERY</p>
        <h2>A few moments.</h2>

        <div className="gallery-wrapper">
          <div className="gallery-track">
            {galleryImages.map((imageNumber, index) => (
              <div
                className="gallery-item"
                key={`first-${imageNumber}-${index}`}
              >
                <img
                  src={`/img/${imageNumber}.png`}
                  alt={`Gallery image ${imageNumber}`}
                />
              </div>
            ))}

            {galleryImages.map((imageNumber, index) => (
              <div
                className="gallery-item"
                key={`second-${imageNumber}-${index}`}
                aria-hidden="true"
              >
                <img
                  src={`/img/${imageNumber}.png`}
                  alt=""
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="contact">
        <p className="eyebrow">CONTACT</p>

        <h2>Let&apos;s connect.</h2>

        <p className="contact-description">
          Open to AI projects, collaborations, and interesting ideas.
          Feel free to reach out if you&apos;d like to build something
          together.
        </p>

        <div className="contact-info">
          <a
            href="mailto:jaiswalaakashi123@gmail.com"
            className="contact-email"
          >
            jaiswalaakashi123@gmail.com
          </a>

          <div className="contact-socials">
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

            <a
              href="https://www.producthunt.com/@aakashi"
              target="_blank"
              rel="noopener noreferrer"
            >
              Product Hunt
            </a>
          </div>
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