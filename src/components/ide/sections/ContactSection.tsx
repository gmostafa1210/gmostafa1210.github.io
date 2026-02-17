import CodeLine from "../CodeLine";

const ContactSection = () => {
  let line = 1;
  return (
    <div className="py-2">
      <CodeLine lineNumber={line++}>
        <span className="syntax-comment">#!/bin/bash</span>
      </CodeLine>
      <CodeLine lineNumber={line++}>
        <span className="syntax-comment"># Contact Information</span>
      </CodeLine>
      <CodeLine lineNumber={line++}><span></span></CodeLine>
      <CodeLine lineNumber={line++}>
        <span className="syntax-variable">NAME</span><span className="syntax-operator">=</span><span className="syntax-string">"Golam Mostafa"</span>
      </CodeLine>
      <CodeLine lineNumber={line++}>
        <span className="syntax-variable">EMAIL</span><span className="syntax-operator">=</span>
        <a href="mailto:gmostafa1210@gmail.com" className="syntax-string hover:underline">"gmostafa1210@gmail.com"</a>
      </CodeLine>
      <CodeLine lineNumber={line++}>
        <span className="syntax-variable">PHONE</span><span className="syntax-operator">=</span><span className="syntax-string">"+880 1779 977767"</span>
      </CodeLine>
      <CodeLine lineNumber={line++}>
        <span className="syntax-variable">LOCATION</span><span className="syntax-operator">=</span><span className="syntax-string">"Dhaka, Bangladesh"</span>
      </CodeLine>
      <CodeLine lineNumber={line++}><span></span></CodeLine>
      <CodeLine lineNumber={line++}>
        <span className="syntax-comment"># Social Links</span>
      </CodeLine>
      <CodeLine lineNumber={line++}>
        <span className="syntax-variable">LINKEDIN</span><span className="syntax-operator">=</span>
        <a href="https://www.linkedin.com/in/gmostafa1210" target="_blank" rel="noopener noreferrer" className="syntax-string hover:underline">"https://linkedin.com/in/gmostafa1210"</a>
      </CodeLine>
      <CodeLine lineNumber={line++}>
        <span className="syntax-variable">GITHUB</span><span className="syntax-operator">=</span>
        <a href="https://github.com/gmostafa1210" target="_blank" rel="noopener noreferrer" className="syntax-string hover:underline">"https://github.com/gmostafa1210"</a>
      </CodeLine>
      <CodeLine lineNumber={line++}><span></span></CodeLine>
      <CodeLine lineNumber={line++}>
        <span className="syntax-comment"># Send me a message</span>
      </CodeLine>
      <CodeLine lineNumber={line++}>
        <span className="syntax-keyword">echo</span> <span className="syntax-string">"Feel free to reach out!"</span>
      </CodeLine>
      <CodeLine lineNumber={line++}>
        <span className="syntax-function">open</span> <a href="/files/GolamMostafa.pdf" target="_blank" rel="noopener noreferrer" className="syntax-string hover:underline">"view:$RESUME"</a>
      </CodeLine>
    </div>
  );
};

export const CONTACT_LINE_COUNT = 15;
export default ContactSection;
