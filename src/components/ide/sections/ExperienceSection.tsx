import CodeLine from "../CodeLine";

const experiences = [
  {
    title: "Software Developer (Odoo)",
    period: "January 2023 - Present",
    company: "Bista Solutions Inc.",
    url: "https://www.bistasolutions.com/",
    desc: "Odoo module development, customization, migration based on requirement.",
  },
  {
    title: "Junior Software Developer (Odoo)",
    period: "June 2021 - December 2022",
    company: "Bista Solutions Inc.",
    url: "https://www.bistasolutions.com/",
    desc: "Odoo module development, customization, migration based on requirement.",
  },
  {
    title: "Trainee Python Developer",
    period: "February 2021 - June 2021",
    company: "Bista Solutions Inc.",
    url: "https://www.bistasolutions.com/",
    desc: "Learn Odoo development.",
  },
  {
    title: "Full Time Internship",
    period: "March 2020 - August 2020",
    company: "Expert Consortium Ltd.",
    url: "http://experts.com.bd/",
    desc: "Learn python and machine learning.",
  },
];

const ExperienceSection = () => {
  let line = 1;
  return (
    <div className="py-2">
      <CodeLine lineNumber={line++}>
        <span className="syntax-punctuation">{"{"}</span>
      </CodeLine>
      <CodeLine lineNumber={line++} indent={1}>
        <span className="syntax-tag">"experience"</span><span className="syntax-punctuation">:</span> <span className="syntax-punctuation">[</span>
      </CodeLine>

      {experiences.map((exp, i) => (
        <div key={i}>
          <CodeLine lineNumber={line++} indent={2}>
            <span className="syntax-punctuation">{"{"}</span>
          </CodeLine>
          <CodeLine lineNumber={line++} indent={3}>
            <span className="syntax-tag">"title"</span><span className="syntax-punctuation">:</span>{" "}
            <span className="syntax-string">"{exp.title}"</span><span className="syntax-punctuation">,</span>
          </CodeLine>
          <CodeLine lineNumber={line++} indent={3}>
            <span className="syntax-tag">"period"</span><span className="syntax-punctuation">:</span>{" "}
            <span className="syntax-string">"{exp.period}"</span><span className="syntax-punctuation">,</span>
          </CodeLine>
          <CodeLine lineNumber={line++} indent={3}>
            <span className="syntax-tag">"company"</span><span className="syntax-punctuation">:</span>{" "}
            <a href={exp.url} target="_blank" rel="noopener noreferrer" className="syntax-string hover:underline">
              "{exp.company}"
            </a><span className="syntax-punctuation">,</span>
          </CodeLine>
          <CodeLine lineNumber={line++} indent={3}>
            <span className="syntax-tag">"description"</span><span className="syntax-punctuation">:</span>{" "}
            <span className="syntax-string">"{exp.desc}"</span>
          </CodeLine>
          <CodeLine lineNumber={line++} indent={2}>
            <span className="syntax-punctuation">{"}"}{i < experiences.length - 1 ? "," : ""}</span>
          </CodeLine>
        </div>
      ))}

      <CodeLine lineNumber={line++} indent={1}>
        <span className="syntax-punctuation">]</span>
      </CodeLine>
      <CodeLine lineNumber={line++}>
        <span className="syntax-punctuation">{"}"}</span>
      </CodeLine>
    </div>
  );
};

export const EXPERIENCE_LINE_COUNT = 30;
export default ExperienceSection;
