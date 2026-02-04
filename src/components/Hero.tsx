import { MapPin, Phone, Mail, Download, Linkedin, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import profileImage from "@/assets/profile.png";

const socialLinks = [
  { icon: Linkedin, href: "https://www.linkedin.com/in/gmostafa1210", label: "LinkedIn" },
  { icon: Github, href: "https://github.com/gmostafa1210", label: "GitHub" },
];

const Hero = () => {
  return (
    <section id="about" className="min-h-screen flex items-center py-20 lg:py-0">
      <div className="container max-w-4xl">
        {/* Mobile Profile Image */}
        <div className="lg:hidden flex justify-center mb-8">
          <div className="w-36 h-36 rounded-full overflow-hidden ring-4 ring-primary/30 animate-pulse-glow">
            <img
              src={profileImage}
              alt="Golam Mostafa"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="space-y-6 animate-fade-in">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold">
            <span className="text-foreground">GOLAM </span>
            <span className="text-gradient">MOSTAFA</span>
          </h1>

          <div className="flex flex-wrap items-center gap-4 text-muted-foreground">
            <span className="flex items-center gap-1">
              <MapPin size={16} className="text-primary" />
              Dhaka, Bangladesh
            </span>
            <span className="flex items-center gap-1">
              <Phone size={16} className="text-primary" />
              +880 1779 977767
            </span>
            <a
              href="mailto:gmostafa1210@gmail.com"
              className="flex items-center gap-1 hover:text-primary transition-colors"
            >
              <Mail size={16} className="text-primary" />
              gmostafa1210@gmail.com
            </a>
          </div>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed">
            Hi! I'm Mostafa, a passionate tech enthusiast and dedicated <span className="text-primary font-medium">Odoo Developer</span> based in Dhaka, Bangladesh. I love solving real-world problems through clean, efficient code and always strive to learn something new every day. Alongside my professional work, I have a strong passion for <span className="text-primary font-medium">Machine Learning and Artificial Intelligence</span>, and I enjoy exploring how intelligent systems can create smarter, more impactful solutions. Currently working full-time in Odoo development, I enjoy taking on challenges, building solutions, and collaborating with others to bring ideas to life. Feel free to reach out if you'd like to connect or work together!
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-4">
            <Button
              asChild
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold"
            >
              <a
                href="/files/GolamMostafa.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Download className="mr-2" size={18} />
                Download CV
              </a>
            </Button>

            <div className="flex items-center gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon"
                  aria-label={social.label}
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
