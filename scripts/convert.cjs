const fs = require('fs');
const path = require('path');

function htmlToJsx(html) {
  let content = html;
  const bodyMatch = content.match(/<body[^>]*>([\s\S]*)<\/body>/i);
  if (bodyMatch) {
    content = bodyMatch[1];
  }

  // Remove scripts from body
  content = content.replace(/<script[\s\S]*?<\/script>/gi, '');

  // Convert HTML comments to JSX comments
  content = content.replace(/<!--([\s\S]*?)-->/g, '{/* $1 */}');

  // Convert class to className
  content = content.replace(/(\s)class=/g, '$1className=');

  // Convert for to htmlFor
  content = content.replace(/(\s)for=/g, '$1htmlFor=');

  // Convert tabindex to tabIndex
  content = content.replace(/(\s)tabindex=/g, '$1tabIndex=');

  // Convert autocomplete to autoComplete
  content = content.replace(/(\s)autocomplete=/g, '$1autoComplete=');

  // Convert autofocus to autoFocus
  content = content.replace(/(\s)autofocus=/g, '$1autoFocus=');

  // Convert readonly to readOnly
  content = content.replace(/(\s)readonly=/g, '$1readOnly=');

  // Convert SVG attributes
  content = content.replace(/(\s)stroke-width=/g, '$1strokeWidth=');
  content = content.replace(/(\s)stroke-linecap=/g, '$1strokeLinecap=');
  content = content.replace(/(\s)stroke-linejoin=/g, '$1strokeLinejoin=');
  content = content.replace(/(\s)fill-rule=/g, '$1fillRule=');
  content = content.replace(/(\s)clip-rule=/g, '$1clipRule=');
  content = content.replace(/(\s)clip-path=/g, '$1clipPath=');

  // Convert style strings to JSX style objects
  content = content.replace(/style="([^"]*)"/g, (match, styleStr) => {
    const rules = styleStr.split(';').map(r => r.trim()).filter(Boolean);
    const styleObj = rules.map(rule => {
      const idx = rule.indexOf(':');
      if (idx === -1) return '';
      const key = rule.slice(0, idx).trim();
      const val = rule.slice(idx + 1).trim();
      const camelKey = key.replace(/-([a-z])/g, (g) => g[1].toUpperCase());
      return `${camelKey}: '${val.replace(/'/g, "\\'")}'`;
    }).filter(Boolean).join(', ');
    return `style={{ ${styleObj} }}`;
  });

  // Self-closing tags: img, input, hr, br
  content = content.replace(/<(img|input|hr|br)([^>]*[^\/])>/gi, '<$1$2 />');
  content = content.replace(/<(img|input|hr|br)>/gi, '<$1 />');

  return content.trim();
}

module.exports = { htmlToJsx };
