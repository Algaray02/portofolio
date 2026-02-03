import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Building2, Calendar, Users, Award } from "lucide-react";

const experienceData = [
  {
    organization: "Polytechnic Computer Club (PCC)",
    position: "Staff of Software Department",
    period: "2025 - Present",
    description:
      "Collaborating with the software division to explore and implement modern web technologies. Actively participating in internal sharing sessions to upgrade technical skills.",
    responsibilities: [
      "Collaborated on internal software projects",
      "Participated in tech workshops and study groups",
      "Contributed to the community's technical growth",
    ],
    skills: ["Teamwork", "Web Development", "Continuous Learning"],
  },
  {
    organization: "Polytechnic English Conversation Club (PECC)",
    position: "Vice Chief of Household Department",
    period: "2025 - Present",
    description:
      "Managing internal department logistics and fostering a supportive English-speaking environment. Responsible for maintaining organizational assets and supporting event operations.",
    responsibilities: [
      "Managed organizational inventory and logistics",
      "Coordinated team members for internal affairs",
      "Facilitated support systems for club activities",
    ],
    skills: ["Operational Management", "Logistics", "Leadership"],
  },
  {
    organization: "Academic Project (Polines)",
    position: "Project Coordinator (LIMS LABOO)",
    period: "2025",
    description:
      "Selected as Project Coordinator for a major course project. Led a technical team to develop a Laboratory Assistant Based Online Operation (LABOO) from concept to delivery.",
    responsibilities: [
      "Led the development team and managed project timeline",
      "Bridged communication between lecturers and developers",
      "Ensured the successful delivery of the LIMS system",
    ],
    skills: ["Project Management", "Technical Leadership", "System Analysis"],
  },
];

const ExperienceSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="experience"
      className="section-container bg-navy-medium/30"
      ref={ref}
    >
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="section-title">
            Organization & <span className="gradient-text">Leadership</span>
          </h2>
          <p className="section-subtitle mx-auto">
            My journey in building soft skills through organizational
            experiences
          </p>
        </motion.div>

        <div className="space-y-8">
          {experienceData.map((exp, index) => (
            <motion.div
              key={exp.organization}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="glass-card rounded-2xl p-6 md:p-8 hover:neon-glow transition-all duration-500"
            >
              <div className="flex flex-col md:flex-row md:items-start gap-6">
                {/* Icon */}
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Building2 className="w-7 h-7 text-primary" />
                </div>

                {/* Content */}
                <div className="flex-1 space-y-4">
                  {/* Header */}
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                    <div>
                      <h3 className="font-heading font-bold text-xl">
                        {exp.organization}
                      </h3>
                      <p className="text-primary font-semibold">
                        {exp.position}
                      </p>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Calendar className="w-4 h-4" />
                      <span className="text-sm font-medium">{exp.period}</span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-muted-foreground">{exp.description}</p>

                  {/* Responsibilities */}
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm font-medium text-foreground">
                      <Users className="w-4 h-4 text-primary" />
                      <span>Key Responsibilities:</span>
                    </div>
                    <ul className="grid sm:grid-cols-1 gap-2">
                      {exp.responsibilities.map((resp) => (
                        <li
                          key={resp}
                          className="flex items-start gap-2 text-sm text-muted-foreground"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                          {resp}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Skills Developed */}
                  <div className="flex flex-wrap items-center gap-2 pt-2">
                    <Award className="w-4 h-4 text-primary" />
                    {exp.skills.map((skill) => (
                      <span key={skill} className="tech-badge text-xs">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
