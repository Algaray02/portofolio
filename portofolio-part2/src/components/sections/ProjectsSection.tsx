import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { ExternalLink, Github, X, ChevronRight } from "lucide-react";

// Import project images
import projectSemnas from "@/assets/project-semnas.png";
import projectLims from "@/assets/project-lims.png";
import projectPcc from "@/assets/project-profilepcc.png";
import projectHelmdect from "@/assets/project-helmdect.png";

interface Project {
  id: number;
  title: string;
  shortDescription: string;
  fullDescription: string;
  techStack: string[];
  features: string[];
  challenges: string;
  solution: string;
  image: string;
  github?: string;
  demo?: string;
}

const projectsData: Project[] = [
  {
    id: 1,
    title: "Semnas Techcomfest 2026",
    shortDescription:
      "Official event platform for National Seminar with seamless registration.",
    fullDescription:
      "The official landing page and registration system for Techcomfest 2026. Designed to handle participant data securely and provide essential event information with a high-performance frontend.",
    techStack: ["Next.js", "MySQL", "Tailwind CSS"],
    features: [
      "Event Information",
      "Participant Registration",
      "Responsive Design",
      "SEO Optimized",
    ],
    challenges:
      "Ensuring high availability and fast load times for a national-scale event website.",
    solution:
      "Leveraged Next.js server-side rendering (SSR) for optimal performance and SEO ranking.",
    image: projectSemnas,
    demo: "https://semnas.techcomfest.com",
  },
  {
    id: 2,
    title: "LIMS LABOO (Laboratory Assistant Based Online Operation)",
    shortDescription:
      "Comprehensive lab management system using Modern Monolith architecture.",
    fullDescription:
      "A robust Laboratory Assistant Based Online Operation (LABOO) built to digitize lab operations. As the Project Coordinator, I led the development using the Inertia.js stack to bridge Laravel and React seamlessly.",
    techStack: ["Laravel", "React.js", "Inertia.js", "Tanstack Query", "MySQL"],
    features: [
      "Inventory Management",
      "Equipment Scheduling",
      "User Role Management",
      "Real-time Data Sync",
    ],
    challenges:
      "Managing complex state and data fetching for laboratory inventory without API overhead.",
    solution:
      "Utilized Inertia.js for a monolithic feel with SPA experience and Tanstack Query for efficient server state management.",
    image: projectLims,
    github: "https://github.com/tiatiwaw/PBL_LIMS_TI-2A/",
    demo: "https://pbl250101.informatikapolines.id",
  },
  {
    id: 3,
    title: "Official Profile UKM PCC 2025/2026",
    shortDescription:
      "Modern organizational profile website with dynamic content management.",
    fullDescription:
      "The official digital presence for Polytechnic Computer Club (PCC). Serves as a central hub for member showcasing, event galleries, and organizational updates, built with modern web standards.",
    techStack: ["Next.js", "PostgreSQL", "Framer Motion", "Tailwind CSS"],
    features: [
      "Member Showcase",
      "Event Gallery",
      "Blog/News Section",
      "Interactive UI",
    ],
    challenges:
      "Creating a dynamic yet fast-loading profile that represents the tech community's identity.",
    solution:
      "Implemented Next.js App Router for efficient routing and PostgreSQL for structured data storage.",
    image: projectPcc,
    github: "https://github.com/Algaray02/pcc25-nextjs",
    demo: "https://ukmpcc.org",
  },
  {
    id: 4,
    title: "Helmdect (AI Safety System)",
    shortDescription:
      "Computer Vision integration for real-time helmet detection.",
    fullDescription:
      "An innovative safety application combining web technologies with Artificial Intelligence. The system detects whether a person is wearing a helmet in real-time, bridging Python's CV capabilities with a Next.js interface.",
    techStack: ["Next.js", "Python", "OpenCV", "PyTorch"],
    features: [
      "Real-time Detection",
      "Image Processing",
      "Safety Dashboard",
      "Python-Node Integration",
    ],
    challenges:
      "Integrating a heavy Python AI model with a web-based frontend interface.",
    solution:
      "Built a Python backend service to handle image processing requests sent from the Next.js client.",
    image: projectHelmdect,
    github:
      "https://github.com/Algaray02/Visi_Komputer_TI-2A_05/tree/main/Tugas%20Besar/app-website",
    demo: "https://helmdect.algaray.biz.id/",
  },
];

const ProjectsSection = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="section-container" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="section-title">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="section-subtitle mx-auto">
            A showcase of my work and the problems I've solved
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {projectsData.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="project-card cursor-pointer"
              onClick={() => setSelectedProject(project)}
            >
              {/* Project Image */}
              <div className="relative h-48 bg-navy-medium overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
              </div>

              {/* Project Content */}
              <div className="p-6 space-y-4">
                <h3 className="font-heading font-bold text-xl group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-muted-foreground line-clamp-2">
                  {project.shortDescription}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {project.techStack.slice(0, 4).map((tech) => (
                    <span key={tech} className="tech-badge text-xs">
                      {tech}
                    </span>
                  ))}
                  {project.techStack.length > 4 && (
                    <span className="tech-badge text-xs">
                      +{project.techStack.length - 4}
                    </span>
                  )}
                </div>

                {/* View Details */}
                <div className="flex items-center justify-between pt-2">
                  <button className="flex items-center gap-1 text-primary text-sm font-medium group-hover:gap-2 transition-all">
                    View Details <ChevronRight className="w-4 h-4" />
                  </button>
                  <div className="flex items-center gap-3">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        <Github className="w-5 h-5" />
                      </a>
                    )}
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        <ExternalLink className="w-5 h-5" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Project Detail Modal */}
      {selectedProject && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-sm"
          onClick={() => setSelectedProject(null)}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto glass-card rounded-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-card hover:bg-secondary transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Image */}
            <div className="relative h-64 bg-navy-medium">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-full object-contain bg-gray-900"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />
            </div>

            {/* Modal Content */}
            <div className="p-8 space-y-6">
              <div>
                <h3 className="font-heading font-bold text-2xl mb-2">
                  {selectedProject.title}
                </h3>
                <p className="text-muted-foreground">
                  {selectedProject.fullDescription}
                </p>
              </div>

              {/* Tech Stack */}
              <div>
                <h4 className="font-heading font-semibold mb-3">Tech Stack</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.techStack.map((tech) => (
                    <span key={tech} className="tech-badge">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Features */}
              <div>
                <h4 className="font-heading font-semibold mb-3">
                  Key Features
                </h4>
                <ul className="grid sm:grid-cols-2 gap-2">
                  {selectedProject.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-2 text-sm text-muted-foreground"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Challenges & Solution */}
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="p-4 rounded-lg bg-secondary/30">
                  <h4 className="font-heading font-semibold text-sm text-primary mb-2">
                    Challenge
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {selectedProject.challenges}
                  </p>
                </div>
                <div className="p-4 rounded-lg bg-secondary/30">
                  <h4 className="font-heading font-semibold text-sm text-primary mb-2">
                    Solution
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {selectedProject.solution}
                  </p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-4 pt-4">
                {selectedProject.github && (
                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary"
                  >
                    <Github className="w-5 h-5" />
                    View on GitHub
                  </a>
                )}
                {selectedProject.demo && (
                  <a
                    href={selectedProject.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary"
                  >
                    <ExternalLink className="w-5 h-5" />
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
};

export default ProjectsSection;
