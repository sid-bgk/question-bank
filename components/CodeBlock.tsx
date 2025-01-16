import React, { useEffect, useRef } from 'react';
import hljs from 'highlight.js';
import 'highlight.js/styles/atom-one-dark.css'; // Import the dark theme

interface CodeBlockProps {
  code: string; // The code to display
  language?: string; // Programming language (optional, defaults to "plaintext")
}

export const CodeBlock: React.FC<CodeBlockProps> = ({ code, language = 'plaintext' }) => {
  const codeRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (codeRef.current) {
      hljs.highlightElement(codeRef.current); // Highlight the specific code block
    }
  }, [code, language]); // Re-run if code or language changes

  return (
    <pre>
      <code ref={codeRef} className={`language-${language}`}>
        {code}
      </code>
    </pre>
  );
};
