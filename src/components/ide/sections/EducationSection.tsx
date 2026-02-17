import CodeLine from "../CodeLine";

const education = [
  { degree: "Master of Science (MSc)", period: "2022 - Present", field: "Computer Science and Engineering", school: "United International University", url: "https://cse.uiu.ac.bd/", gpa: "Current CGPA: 3.61 out of 4.00" },
  { degree: "Bachelor of Science (BSc)", period: "2015 - 2019", field: "Computer Science and Engineering", school: "East West University", url: "https://www.ewubd.edu/", gpa: "CGPA: 2.54 out of 4.00" },
  { degree: "Higher Secondary Certificate (HSC)", period: "Passing Year: 2013", field: "Science", school: "Govt. Science College", url: "http://gsctd.edu.bd/", gpa: "GPA: 4.40 out of 5.00" },
  { degree: "Secondary School Certificate (SSC)", period: "Passing Year: 2011", field: "Science", school: "Dhanmondi Govt. Boys' High School", url: "https://www.dgbhs.edu.bd/", gpa: "GPA: 5.00 out of 5.00" },
];

const EducationSection = () => {
  let line = 1;
  return (
    <div className="py-2">
      <CodeLine lineNumber={line++}>
        <span className="syntax-comment"># Education</span>
      </CodeLine>
      <CodeLine lineNumber={line++}><span></span></CodeLine>

      {education.map((edu, i) => (
        <div key={i}>
          <CodeLine lineNumber={line++}>
            <span className="syntax-tag">## </span>
            <span className="syntax-function">{edu.degree}</span>
          </CodeLine>
          <CodeLine lineNumber={line++}><span></span></CodeLine>
          <CodeLine lineNumber={line++}>
            <span className="syntax-comment">*{edu.period}*</span>
          </CodeLine>
          <CodeLine lineNumber={line++}><span></span></CodeLine>
          <CodeLine lineNumber={line++}>
            <span className="syntax-variable">{edu.field}</span>
          </CodeLine>
          <CodeLine lineNumber={line++}>
            <a href={edu.url} target="_blank" rel="noopener noreferrer" className="syntax-string hover:underline">
              [{edu.school}]({edu.url})
            </a>
          </CodeLine>
          <CodeLine lineNumber={line++}><span></span></CodeLine>
          <CodeLine lineNumber={line++}>
            <span className="syntax-type">{edu.gpa}</span>
          </CodeLine>
          <CodeLine lineNumber={line++}><span></span></CodeLine>
          <CodeLine lineNumber={line++}>
            <span className="syntax-punctuation">---</span>
          </CodeLine>
          <CodeLine lineNumber={line++}><span></span></CodeLine>
        </div>
      ))}
    </div>
  );
};

export const EDUCATION_LINE_COUNT = 50;
export default EducationSection;
