import { useTypingEffect } from "@/hooks/use-typing-effect";
import CodeLine from "../CodeLine";

const TypingText = ({ text, speed = 25, delay = 0, className = "", keepCursor = false }: { text: string; speed?: number; delay?: number; className?: string; keepCursor?: boolean }) => {
  const { displayed, done } = useTypingEffect(text, speed, delay);
  return (
    <span className={className}>
      {displayed}
      {(!done || keepCursor) && <span className="cursor-blink text-primary">|</span>}
    </span>
  );
};

const AboutSection = () => {
  let line = 1;
  return (
    <div className="py-2">
      <CodeLine lineNumber={line++}>
        <span className="syntax-keyword">import</span> <span className="syntax-type">React</span> <span className="syntax-keyword">from</span> <span className="syntax-string">"react"</span><span className="syntax-punctuation">;</span>
      </CodeLine>
      <CodeLine lineNumber={line++}>
        <span className="syntax-keyword">import</span> <span className="syntax-punctuation">{"{"}</span> <span className="syntax-type">Developer</span><span className="syntax-punctuation">,</span> <span className="syntax-type">Researcher</span> <span className="syntax-punctuation">{"}"}</span> <span className="syntax-keyword">from</span> <span className="syntax-string">"@mostafa/core"</span><span className="syntax-punctuation">;</span>
      </CodeLine>
      <CodeLine lineNumber={line++}><span></span></CodeLine>
      <CodeLine lineNumber={line++}>
        <span className="syntax-keyword">const</span> <span className="syntax-function">GolamMostafa</span> <span className="syntax-operator">=</span> <span className="syntax-punctuation">()</span> <span className="syntax-operator">=&gt;</span> <span className="syntax-punctuation">{"{"}</span>
      </CodeLine>
      <CodeLine lineNumber={line++} indent={1}>
        <span className="syntax-keyword">const</span> <span className="syntax-variable">role</span> <span className="syntax-operator">=</span> <span className="syntax-string">"Software Developer (Odoo)"</span><span className="syntax-punctuation">;</span>
      </CodeLine>
      <CodeLine lineNumber={line++} indent={1}>
        <span className="syntax-keyword">const</span> <span className="syntax-variable">location</span> <span className="syntax-operator">=</span> <span className="syntax-string">"Dhaka, Bangladesh"</span><span className="syntax-punctuation">;</span>
      </CodeLine>
      <CodeLine lineNumber={line++}><span></span></CodeLine>
      <CodeLine lineNumber={line++} indent={1}>
        <span className="syntax-keyword">return</span> <span className="syntax-punctuation">(</span>
      </CodeLine>
      <CodeLine lineNumber={line++} indent={2}>
        <span className="syntax-tag">&lt;Intro&gt;</span>
      </CodeLine>
      <CodeLine lineNumber={line++}><span></span></CodeLine>

      <CodeLine lineNumber={line++} indent={2}>
        <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
          <TypingText text="Hello, I'm Mostafa." speed={50} />
        </h1>
      </CodeLine>
      <CodeLine lineNumber={line++}><span></span></CodeLine>
      <CodeLine lineNumber={line++} indent={2}>
        <p className="text-secondary-foreground leading-relaxed max-w-2xl">
          <TypingText
            text="A passionate tech enthusiast and Odoo Developer based in Dhaka, Bangladesh. I enjoy solving real-world problems with clean, efficient code and continuously learning new technologies. Alongside my professional work, I'm deeply interested in Machine Learning and AI, exploring how intelligent systems can build smarter solutions. Always open to collaboration and new challenges."
            speed={25}
            delay={1200}
            keepCursor
          />
        </p>
      </CodeLine>
      <CodeLine lineNumber={line++}><span></span></CodeLine>
      <CodeLine lineNumber={line++} indent={3}>
        <span className="syntax-comment">{"// "}<span className="syntax-tag">Interests:</span></span>
      </CodeLine>
      <CodeLine lineNumber={line++} indent={3}>
        <ul className="list-disc list-inside text-secondary-foreground space-y-1">
          <li>Machine Learning and AI</li>
        </ul>
      </CodeLine>
      <CodeLine lineNumber={line++} indent={3}>
        <ul className="list-disc list-inside text-secondary-foreground space-y-1">
          <li>Programming</li>
        </ul>
      </CodeLine>
      <CodeLine lineNumber={line++} indent={3}>
        <ul className="list-disc list-inside text-secondary-foreground space-y-1">
          <li>New Technology</li>
        </ul>
      </CodeLine>
      <CodeLine lineNumber={line++} indent={3}>
        <ul className="list-disc list-inside text-secondary-foreground space-y-1">
          <li>Exploring and Adventure</li>
        </ul>
      </CodeLine>
      <CodeLine lineNumber={line++} indent={3}>
        <ul className="list-disc list-inside text-secondary-foreground space-y-1">
          <li>Reading Story Book</li>
        </ul>
      </CodeLine>
      <CodeLine lineNumber={line++} indent={3}>
        <ul className="list-disc list-inside text-secondary-foreground space-y-1">
          <li>Indoor and Outdoor Games</li>
        </ul>
      </CodeLine>
      <CodeLine lineNumber={line++}><span></span></CodeLine>
      <CodeLine lineNumber={line++} indent={2}>
        <span className="syntax-tag">&lt;/Intro&gt;</span>
      </CodeLine>
      <CodeLine lineNumber={line++} indent={1}>
        <span className="syntax-punctuation">);</span>
      </CodeLine>
      <CodeLine lineNumber={line++}>
        <span className="syntax-punctuation">{"}"};</span>
      </CodeLine>
      <CodeLine lineNumber={line++}><span></span></CodeLine>
      <CodeLine lineNumber={line++}>
        <span className="syntax-comment">// Status: Ready to collaborate on innovative solutions.</span>
      </CodeLine>
      <CodeLine lineNumber={line++}><span></span></CodeLine>
      <CodeLine lineNumber={line++}>
        <div className="flex gap-3">
          <a
            href="mailto:gmostafa1210@gmail.com"
            className="inline-block border border-primary text-primary px-4 py-2 text-[13px] hover:bg-primary hover:text-primary-foreground transition-colors"
          >
            Execute_Email()
          </a>
          <a
            href="/files/GolamMostafa.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block border border-primary text-primary px-4 py-2 text-[13px] hover:bg-primary hover:text-primary-foreground transition-colors"
          >
            View_Resume()
          </a>
        </div>
      </CodeLine>
    </div>
  );
};

export const ABOUT_LINE_COUNT = 25;
export default AboutSection;
