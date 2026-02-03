import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Lightbulb, Users, Rocket } from "lucide-react";

const interests = [
  {
    icon: Code2,
    label: "Web Development",
    description: "Building fullstack apps with Laravel & Next.js",
  },
  {
    icon: Lightbulb,
    label: "Problem Solving",
    description: "Analytical thinking and tackling complex logic",
  },
  {
    icon: Users,
    label: "Leadership",
    description: "Project Coordinator and organizational experience",
  },
  {
    icon: Rocket,
    label: "Self Growth",
    description: "Active learner in Tech (PCC) & English (PECC) communities",
  },
];

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-container" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="section-title">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="section-subtitle mx-auto">
            Get to know more about who I am and what drives me
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Profile Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="glass-card rounded-2xl p-8 space-y-4 text-justify">
              <h3 className="text-2xl font-heading font-semibold">
                Hello! I'm{" "}
                <span className="text-primary">Alfin Rozzaq Nirwana</span>
              </h3>

              <p className="text-muted-foreground leading-relaxed">
                A dedicated Computer Engineering Technology student at{" "}
                <strong>Politeknik Negeri Semarang</strong> with a strong focus
                on <strong>Fullstack Web Development</strong>. I specialize in
                crafting comprehensive, end-to-end solutions using{" "}
                <strong>Laravel and Next.js</strong>, believing in the power of
                clean code to solve complex real-world problems.
              </p>

              <p className="text-muted-foreground leading-relaxed">
                Beyond coding, I have honed my leadership skills as a{" "}
                <strong>Project Coordinator</strong>, successfully delivering
                systems like LIMS. I am actively involved in organizations like
                the <strong>Polytechnic Computer Club (PCC)</strong> and{" "}
                <strong>English Conversation Club (PECC)</strong>, where I
                sharpen both my technical expertise and communication skills.
              </p>

              <p className="text-muted-foreground leading-relaxed">
                My goal is to become a well-rounded developer who bridges the
                gap between complex logic and effective collaboration, creating
                scalable digital solutions that truly make a difference.
              </p>
            </div>
          </motion.div>

          {/* Interest Cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid sm:grid-cols-2 gap-4"
          >
            {interests.map((interest, index) => (
              <motion.div
                key={interest.label}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                className="skill-card text-center group"
              >
                <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <interest.icon className="w-7 h-7 text-primary" />
                </div>
                <h4 className="font-heading font-semibold mb-2">
                  {interest.label}
                </h4>
                <p className="text-sm text-muted-foreground">
                  {interest.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
