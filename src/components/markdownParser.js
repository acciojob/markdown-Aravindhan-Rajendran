
export const parseMarkdown = (markdown) => {
  const lines = markdown.split('\n');
  let html = '';

  lines.forEach(line => {
    if (line.startsWith('# ')) {
      html += `<h1>${line.substring(2)}</h1>`;
    } else if (line.startsWith('## ')) {
      html += `<h2>${line.substring(3)}</h2>`;
    } else if (line.startsWith('### ')) {
      html += `<h3>${line.substring(4)}</h3>`;
    } else if (line.startsWith('- ')) {
      if (!html.endsWith('<ul>')) html += '<ul>';
      html += `<li>${line.substring(2)}</li>`;
    } else if (line.trim() === '') {
      if (html.endsWith('<ul>')) html += '</ul>';
      html += '<br/>';
    } else {
      html += `<p>${line.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
                         .replace(/\*(.*?)\*/g, '<em>$1</em>')}</p>`;
    }
  });

  if (html.endsWith('<ul>')) html += '</ul>';

  return html;
};
