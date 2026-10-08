import { Github, Linkedin, Mail, Heart } from "lucide-react";

const socialLinks = [
  { icon: Github, href: "https://github.com/Algaray02", label: "GitHub" },
  {
    icon: Linkedin,
    href: "https://linkedin.com/in/alfin-rozzaq-nirwana-00176a329",
    label: "LinkedIn",
  },
  { icon: Mail, href: "mailto:alfin.rozzaq.270206@gmail.com", label: "Email" },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-card/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Copyright */}
          <div className="text-center md:text-left">
            <p className="text-sm text-muted-foreground">
              © {currentYear} Alfin Rozzaq Nirwana. All rights reserved.
            </p>
          </div>

          {/* Tech Tagline */}
          <div className="hidden md:block">
            <p className="font-mono text-xs text-primary/60">
              &lt;code&gt; with passion &lt;/code&gt;
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
                className="w-10 h-10 rounded-lg bg-secondary/50 flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 hover:neon-glow transition-all duration-300"
              >
                <link.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
