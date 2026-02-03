import { GraduationCap, ExternalLink } from "lucide-react";

const education = [
  {
    degree: "Master of Science (MSc)",
    field: "Computer Science and Engineering",
    institution: "United International University",
    institutionUrl: "https://cse.uiu.ac.bd/",
    period: "2022 - Present",
    grade: "Current CGPA: 3.61 out of 4.00 (18 out of 36 credits earned)",
  },
  {
    degree: "Bachelor of Science (BSc)",
    field: "Computer Science and Engineering",
    institution: "East West University",
    institutionUrl: "https://www.ewubd.edu/",
    period: "2015 - 2019",
    grade: "CGPA: 2.54 out of 4.00",
  },
  {
    degree: "Higher Secondary Certificate (HSC)",
    field: "Science",
    institution: "Govt. Science College",
    institutionUrl: "http://gsctd.edu.bd/",
    period: "Passing Year: 2013",
    grade: "GPA: 4.40 out of 5.00",
  },
  {
    degree: "Secondary School Certificate (SSC)",
    field: "Science",
    institution: "Dhanmondi Govt. Boys' High School",
    institutionUrl: "https://www.dgbhs.edu.bd/",
    period: "Passing Year: 2011",
    grade: "GPA: 5.00 out of 5.00",
  },
];

const Education = () => {
  return (
    <section id="education" className="py-20">
      <div className="container max-w-4xl">
        <h2 className="section-heading">Education</h2>

        <div className="grid gap-6">
          {education.map((edu, index) => (
            <div
              key={index}
              className="card-gradient rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-primary/10 text-primary">
                  <GraduationCap size={24} />
                </div>
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                    <h3 className="text-xl font-semibold text-foreground">
                      {edu.degree}
                    </h3>
                    <span className="text-sm text-primary font-mono">
                      {edu.period}
                    </span>
                  </div>
                  <p className="text-muted-foreground mt-1">{edu.field}</p>
                  <a
                    href={edu.institutionUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-muted-foreground hover:text-primary transition-colors mt-2"
                  >
                    {edu.institution}
                    <ExternalLink size={14} />
                  </a>
                  <p className="text-sm text-primary/80 mt-2">{edu.grade}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
