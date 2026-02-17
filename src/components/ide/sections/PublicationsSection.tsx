import CodeLine from "../CodeLine";

const publications = [
  {
    title: "Improve the Sentiment of Bengali Language Texts with Stopword Removal",
    venue: "3rd International Conference on Computing Advancements (ICCA 2024)",
    publisher: "ACM",
    pages: "414-422",
    year: 2024,
    date: "October 17, 2024",
    doi: "10.1145/3723178.3723233",
    links: {
      paper: "/files/mostafa2024.pdf",
      researchgate: "https://www.researchgate.net/publication/384667789",
    },
  },
  {
    title: "Detecting Lung Cancer with Federated and Transfer Learning",
    venue: "26th International Conference on Computer and Information Technology (ICCIT 2023)",
    publisher: "IEEE",
    pages: "1-6",
    year: 2023,
    date: "February 27, 2024",
    doi: "10.1109/ICCIT60459.2023.10441256",
    links: {
      paper: "/files/mostafa2023.pdf",
      researchgate: "https://www.researchgate.net/publication/378537154",
    },
  },
  {
    title: "Investigation of Different Machine Learning Algorithms to Determine Human Sentiment Using Twitter Data",
    venue: "International Journal of Information Technology and Computer Science (IJITCS), Vol.13, No.2",
    publisher: "MECS Press",
    pages: "38-48",
    year: 2021,
    date: "April 08, 2021",
    doi: "10.5815/ijitcs.2021.02.04",
    links: {
      paper: "/files/mostafa2021.pdf",
      researchgate: "https://www.researchgate.net/publication/350725872",
    },
  },
];

const PublicationsSection = () => {
  let line = 1;
  return (
    <div className="py-2">
      <CodeLine lineNumber={line++}>
        <span className="syntax-comment">% Publications Bibliography</span>
      </CodeLine>
      <CodeLine lineNumber={line++}>
        <span className="syntax-comment">% Golam Mostafa</span>
      </CodeLine>
      <CodeLine lineNumber={line++}><span></span></CodeLine>

      {publications.map((pub, i) => (
        <div key={i}>
          <CodeLine lineNumber={line++}>
            <span className="syntax-keyword">@article</span><span className="syntax-punctuation">{"{"}</span><span className="syntax-function">mostafa{pub.year}</span><span className="syntax-punctuation">,</span>
          </CodeLine>
          <CodeLine lineNumber={line++} indent={1}>
            <span className="syntax-tag">title</span> <span className="syntax-operator">=</span>{" "}
            <span className="syntax-punctuation">{"{"}</span><span className="syntax-string">{pub.title}</span><span className="syntax-punctuation">{"}"}</span><span className="syntax-punctuation">,</span>
          </CodeLine>
          <CodeLine lineNumber={line++} indent={1}>
            <span className="syntax-tag">booktitle</span> <span className="syntax-operator">=</span>{" "}
            <span className="syntax-punctuation">{"{"}</span><span className="syntax-string">{pub.venue}</span><span className="syntax-punctuation">{"}"}</span><span className="syntax-punctuation">,</span>
          </CodeLine>
          <CodeLine lineNumber={line++} indent={1}>
            <span className="syntax-tag">publisher</span> <span className="syntax-operator">=</span>{" "}
            <span className="syntax-punctuation">{"{"}</span><span className="syntax-type">{pub.publisher}</span><span className="syntax-punctuation">{"}"}</span><span className="syntax-punctuation">,</span>
          </CodeLine>
          <CodeLine lineNumber={line++} indent={1}>
            <span className="syntax-tag">pages</span> <span className="syntax-operator">=</span>{" "}
            <span className="syntax-punctuation">{"{"}</span><span className="syntax-number">{pub.pages}</span><span className="syntax-punctuation">{"}"}</span><span className="syntax-punctuation">,</span>
          </CodeLine>
          <CodeLine lineNumber={line++} indent={1}>
            <span className="syntax-tag">year</span> <span className="syntax-operator">=</span>{" "}
            <span className="syntax-punctuation">{"{"}</span><span className="syntax-number">{pub.date}</span><span className="syntax-punctuation">{"}"}</span><span className="syntax-punctuation">,</span>
          </CodeLine>
          <CodeLine lineNumber={line++} indent={1}>
            <span className="syntax-tag">doi</span> <span className="syntax-operator">=</span>{" "}
            <span className="syntax-punctuation">{"{"}</span>
            <a href={`https://doi.org/${pub.doi}`} target="_blank" rel="noopener noreferrer" className="syntax-string hover:underline">{pub.doi}</a>
            <span className="syntax-punctuation">{"}"}</span>
          </CodeLine>
          <CodeLine lineNumber={line++} indent={1}>
            <span className="syntax-comment">% </span>
            <a href={pub.links.paper} target="_blank" rel="noopener noreferrer" className="syntax-keyword hover:underline mr-4">[Read Paper]</a>
            <a href={pub.links.researchgate} target="_blank" rel="noopener noreferrer" className="syntax-keyword hover:underline">[ResearchGate]</a>
          </CodeLine>
          <CodeLine lineNumber={line++}>
            <span className="syntax-punctuation">{"}"}</span>
          </CodeLine>
          <CodeLine lineNumber={line++}><span></span></CodeLine>
        </div>
      ))}
    </div>
  );
};

export const PUBLICATIONS_LINE_COUNT = 38;
export default PublicationsSection;
