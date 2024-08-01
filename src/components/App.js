import React, { useState, useEffect } from 'react';
import { parseMarkdown } from './markdownParser';


const App = () => {
  const [markdown, setMarkdown] = useState('');
  const [html, setHtml] = useState('');

  useEffect(() => {
    const renderMarkdown = () => {
      setHtml(parseMarkdown(markdown));
    };
    renderMarkdown();
  }, [markdown]);

  return (
    <div className="app">
      <textarea
        className="textarea"
        value={markdown}
        onChange={(e) => setMarkdown(e.target.value)}
        placeholder="Write your markdown here..."
      />
      <div
        className="preview"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </div>
  );
};

export default App;
