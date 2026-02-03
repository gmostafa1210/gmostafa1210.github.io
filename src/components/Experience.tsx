import { ExternalLink } from "lucide-react";

const experiences = [
  {
    title: "Software Developer (Odoo)",
    company: "Bista Solutions Inc.",
    companyUrl: "https://www.bistasolutions.com/",
    period: "January 2023 - Present",
    description: "Odoo module development, customization, migration based on requirement.",
  },
  {
    title: "Junior Software Developer (Odoo)",
    company: "Bista Solutions Inc.",
    companyUrl: "https://www.bistasolutions.com/",
    period: "June 2021 - December 2022",
    description: "Odoo module development, customization, migration based on requirement.",
  },
  {
    title: "Trainee Python Developer",
    company: "Bista Solutions Inc.",
    companyUrl: "https://www.bistasolutions.com/",
    period: "February 2021 - June 2021",
    description: "Learn Odoo development.",
  },
  {
    title: "Full Time Internship",
    company: "Expert Consortium Ltd.",
    companyUrl: "http://experts.com.bd/",
    period: "March 2020 - August 2020",
    description: "Learn python and machine learning.",
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-20">
      <div className="container max-w-4xl">
        <h2 className="section-heading">Experience</h2>

        <div className="space-y-0">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="timeline-item animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="timeline-dot" />
              <div className="card-gradient rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-3">
                  <h3 className="text-xl font-semibold text-foreground">
                    {exp.title}
                  </h3>
                  <span className="text-sm text-primary font-mono">
                    {exp.period}
                  </span>
                </div>
                <a
                  href={exp.companyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-muted-foreground hover:text-primary transition-colors mb-3"
                >
                  {exp.company}
                  <ExternalLink size={14} />
                </a>
                <p className="text-muted-foreground">{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
