import CodeLine from "../CodeLine";

const GamesSection = () => {
  let line = 1;
  return (
    <div className="py-2">
      <CodeLine lineNumber={line++}>
        <span className="syntax-comment">{"<!-- games.html -->"}</span>
      </CodeLine>
      <CodeLine lineNumber={line++}><span></span></CodeLine>
      <CodeLine lineNumber={line++}>
        <span className="syntax-tag">&lt;games&gt;</span>
      </CodeLine>
      <CodeLine lineNumber={line++} indent={1}>
        <span className="syntax-tag">&lt;game</span>{" "}
        <span className="syntax-variable">name</span>
        <span className="syntax-operator">=</span>
        <span className="syntax-string">"NumDuel"</span>
        <span className="syntax-tag">&gt;</span>
      </CodeLine>
      <CodeLine lineNumber={line++} indent={2}>
        <span className="syntax-variable">description</span>
        <span className="syntax-punctuation">:</span>{" "}
        <span className="text-secondary-foreground">A number guessing duel game.</span>
      </CodeLine>
      <CodeLine lineNumber={line++} indent={2}>
        <span className="syntax-variable">url</span>
        <span className="syntax-punctuation">:</span>{" "}
        <a
          href="/game/NumDuel/numduel.html"
          target="_blank"
          rel="noopener noreferrer"
          className="syntax-string hover:underline"
        >
          "/game/NumDuel/numduel.html"
        </a>
      </CodeLine>
      <CodeLine lineNumber={line++} indent={1}>
        <span className="syntax-tag">&lt;/game&gt;</span>
      </CodeLine>
      <CodeLine lineNumber={line++}>
        <span className="syntax-tag">&lt;/games&gt;</span>
      </CodeLine>
      <CodeLine lineNumber={line++}><span></span></CodeLine>
      <CodeLine lineNumber={line++}>
        <a
          href="/game/NumDuel/numduel.html"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block border border-primary text-primary px-4 py-2 text-[13px] hover:bg-primary hover:text-primary-foreground transition-colors"
        >
          Play_NumDuel()
        </a>
      </CodeLine>
    </div>
  );
};

export const GAMES_LINE_COUNT = 10;
export default GamesSection;
