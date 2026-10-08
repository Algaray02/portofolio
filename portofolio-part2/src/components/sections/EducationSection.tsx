import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Calendar, MapPin } from "lucide-react";

const educationData = [
  {
    institution: "Politeknik Negeri Semarang",
    degree: "Bachelor of Applied Science (D4)",
    field: "Computer Engineering Technology",
    period: "2024 - Present",
    location: "Semarang, Indonesia",
    description:
      "Specializing in Fullstack Web Development. Active Organization Member in Polytechnic Computer Club (PCC) and English Conversation Club (PECC).",
    gpa: "3.91/4.00",
  },
  {
    institution: "SMA Negeri 8 Semarang",
    degree: "High School",
    field: "Science Major (MIPA)",
    period: "2021 - 2024",
    location: "Semarang, Indonesia",
    description:
      "Built a strong foundation in analytical thinking and logic. Active in school academic activities.",
  },
  {
    institution: "SMP Negeri 1 Semarang",
    degree: "Junior High School",
    field: "-",
    period: "2018 - 2021", // Sesuaikan tahun
    location: "Semarang, Indonesia",
    description:
      "Graduated with strong academic performance. Developed early interest in technology and problem solving.",
  },
];

const EducationSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="education" className="section-container" ref={ref}>
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="section-title">
            <span className="gradient-text">Education</span>
          </h2>
          <p className="section-subtitle mx-auto">
            My academic journey and qualifications
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 timeline-line" />

          {educationData.map((edu, index) => (
            <motion.div
              key={edu.institution}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className={`relative flex items-center mb-12 ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              {/* Timeline Dot */}
              <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 timeline-dot z-10" />

              {/* Content Card */}
              <div
                className={`ml-8 md:ml-0 md:w-1/2 ${index % 2 === 0 ? "md:pr-12" : "md:pl-12"}`}
              >
                <div className="glass-card rounded-xl p-6 hover:neon-glow transition-all duration-300">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <GraduationCap className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-heading font-bold text-lg">
                        {edu.institution}
                      </h3>
                      <p className="text-primary font-medium">{edu.degree}</p>
                      <p className="text-sm text-muted-foreground">
                        {edu.field}
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-3">
                    <div className="flex items-center gap-1.5">
                      <Calendar className="w-4 h-4" />
                      <span>{edu.period}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <MapPin className="w-4 h-4" />
                      <span>{edu.location}</span>
                    </div>
                  </div>

                  <p className="text-sm text-muted-foreground mb-3">
                    {edu.description}
                  </p>

                  {edu.gpa && (
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
                      GPA: {edu.gpa}
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
