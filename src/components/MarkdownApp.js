import React, { useState, useEffect } from 'react';
import { marked } from 'marked';
import './MarkdownApp.css'; // Import the CSS file for styling

const MarkdownApp = () => {
  const [markdown, setMarkdown] = useState('');
  const [html, setHtml] = useState('');

  useEffect(() => {
    const renderMarkdown = () => {
      setHtml(marked(markdown));
    };
    renderMarkdown();
  }, [markdown]);

  return (
    <div className="app">
      <div className="textarea-container">
        <textarea
          className="textarea"
          value={markdown}
          onChange={(e) => setMarkdown(e.target.value)}
          placeholder="Write your markdown here..."
        />
      </div>
      <div className="preview-container">
        {markdown ? (
          <div
            className="preview"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        ) : (
          <div className="loading">Loading...</div>
        )}
      </div>
    </div>
  );
};

export default MarkdownApp;
