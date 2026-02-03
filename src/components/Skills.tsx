const skillCategories = [
  {
    category: "Odoo Development",
    skills: [
      "Custom Module Development",
      "Module Migration (v11-v18)",
      "Community & Enterprise",
      "Sales", "Purchase", "Inventory",
      "Manufacturing", "CRM", "Project",
      "Product Lifecycle Management",
    ],
  },
  {
    category: "Programming Languages",
    skills: ["Python", "C", "C++", "JavaScript", "OOP Concepts"],
  },
  {
    category: "Web Technologies",
    skills: ["XML", "HTML", "CSS", "Bootstrap", "RESTful API"],
  },
  {
    category: "Database",
    skills: ["PostgreSQL", "MySQL", "SQL"],
  },
  {
    category: "Machine Learning",
    skills: ["Basic Statistics", "ML Tools & Algorithms"],
  },
  {
    category: "Tools & Systems",
    skills: ["Git", "GitHub", "GitLab", "VS Code", "PyCharm", "Postman", "Ubuntu", "Linux-Mint", "Windows"],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-secondary/30">
      <div className="container max-w-4xl">
        <h2 className="section-heading">Skills</h2>

        <div className="grid gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={category.category}
              className="animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <h3 className="text-lg font-semibold text-primary mb-4">
                {category.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span key={skill} className="skill-tag">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
