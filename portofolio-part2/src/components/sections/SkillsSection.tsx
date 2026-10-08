import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code, Layout, Database, Terminal, Wrench, Cloud } from "lucide-react";

const skillCategories = [
  {
    title: "Programming Languages",
    icon: Code,
    skills: ["Python", "JavaScript", "TypeScript", "Pascal", "C", "C++", "PHP"],
  },
  {
    title: "Frontend Development",
    icon: Layout,
    skills: ["React.js", "Next.js", "Tailwind CSS"],
  },
  {
    title: "Backend Development",
    icon: Database,
    skills: ["Node.js", "Express.js", "Laravel", "RESTful API"],
  },
  {
    title: "Database & Storage",
    icon: Cloud,
    skills: ["PostgreSQL", "MySQL", "MongoDB", "Supabase"],
  },
  {
    title: "DevOps & Tools",
    icon: Terminal,
    skills: ["Git", "GitHub", "Vercel"],
  },
  {
    title: "Other Tools",
    icon: Wrench,
    skills: ["VS Code", "Postman", "Arduino", "Thonny", "Figma"],
  },
];

const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="skills"
      className="section-container bg-navy-medium/30"
      ref={ref}
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="section-title">
            Skills & <span className="gradient-text">Tech Stack</span>
          </h2>
          <p className="section-subtitle mx-auto">
            Technologies and tools I work with to bring ideas to life
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="skill-card"
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <category.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-heading font-semibold">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span key={skill} className="tech-badge">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
