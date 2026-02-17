import CodeLine from "../CodeLine";

const skills = [
  { category: "odoo_development", items: ["Custom Module Development", "Module Migration (v11-v18)", "Community & Enterprise", "Sales", "Purchase", "Inventory", "Manufacturing", "CRM"] },
  { category: "programming_languages", items: ["Python", "C", "C++", "JavaScript", "OOP Concepts"] },
  { category: "web_technologies", items: ["XML", "HTML", "CSS", "Bootstrap", "RESTful API"] },
  { category: "database", items: ["PostgreSQL", "MySQL", "SQL"] },
  { category: "machine_learning", items: ["Basic Statistics", "ML Tools & Algorithms"] },
  { category: "tools_and_systems", items: ["Git", "GitHub", "GitLab", "VS Code", "PyCharm", "Postman", "Ubuntu", "Linux Mint"] },
];

const SkillsSection = () => {
  let line = 1;
  return (
    <div className="py-2">
      <CodeLine lineNumber={line++}>
        <span className="syntax-comment"># Skills & Technologies</span>
      </CodeLine>
      <CodeLine lineNumber={line++}>
        <span className="syntax-comment"># ---</span>
      </CodeLine>
      <CodeLine lineNumber={line++}><span></span></CodeLine>

      {skills.map((group, i) => (
        <div key={i}>
          <CodeLine lineNumber={line++}>
            <span className="syntax-tag">{group.category}</span><span className="syntax-punctuation">:</span>
          </CodeLine>
          {group.items.map((item, j) => (
            <CodeLine key={j} lineNumber={line++} indent={1}>
              <span className="syntax-punctuation">- </span>
              <span className="syntax-string">{item}</span>
            </CodeLine>
          ))}
          <CodeLine lineNumber={line++}><span></span></CodeLine>
        </div>
      ))}
    </div>
  );
};

export const SKILLS_LINE_COUNT = 40;
export default SkillsSection;
