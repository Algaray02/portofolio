import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Trophy, Award, BookOpen, Medal } from "lucide-react";

const achievementsData = [
  {
    icon: Trophy,
    title: "1st Place - National Hackathon",
    organization: "Tech Innovation Challenge 2023",
    description: "Won first place for developing an innovative solution for smart city traffic management.",
    year: "2023",
  },
  {
    icon: Award,
    title: "Best Web Developer",
    organization: "University Tech Week",
    description: "Recognized for outstanding web development skills and contributions to campus projects.",
    year: "2023",
  },
  {
    icon: BookOpen,
    title: "Google IT Support Certificate",
    organization: "Coursera x Google",
    description: "Completed professional certification covering troubleshooting, networking, and security.",
    year: "2022",
  },
  {
    icon: Medal,
    title: "Dean's List Award",
    organization: "Faculty of Computer Science",
    description: "Achieved academic excellence with GPA above 3.5 for consecutive semesters.",
    year: "2022",
  },
];

const AchievementsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="achievements" className="section-container bg-navy-medium/30" ref={ref}>
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="section-title">
            Achievements & <span className="gradient-text">Certificates</span>
          </h2>
          <p className="section-subtitle mx-auto">
            Recognition of my accomplishments and continuous learning
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6">
          {achievementsData.map((achievement, index) => (
            <motion.div
              key={achievement.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card rounded-xl p-6 hover:neon-glow transition-all duration-300 group"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                  <achievement.icon className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1 space-y-2">
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="font-heading font-bold">{achievement.title}</h3>
                    <span className="text-xs font-mono text-primary bg-primary/10 px-2 py-1 rounded">
                      {achievement.year}
                    </span>
                  </div>
                  <p className="text-sm text-primary/80 font-medium">{achievement.organization}</p>
                  <p className="text-sm text-muted-foreground">{achievement.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
