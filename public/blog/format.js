class Token {
  constructor(name, action, regex) {
    this.regex = new RegExp('^' + regex);
    this.name = name;
    this.action = action;
  }
};

const nothing = (text) => '<span class="code-normal">' + text + '</span>';
const bolded = (text) => '<span class="code-bolded">' + text + '</span>';
const italics = (text) => '<span class="code-italics">' + text + '</span>';

c = [
  // Whitespace
  new Token('ws',  nothing, '\\s+'),
  // Browser-converted characters
  new Token('bcc', nothing, '&.*?;'),
  // Single/multi -line comments
  new Token('slc', italics, '//.*?(?=(\\n|\\r\\n))'),
  new Token('mlc', italics, '/\\*.*?\\*/'),
  // Flow-control
  new Token('fc',  nothing, 'for|while|if|else'),
  // Basic types
  new Token('bt',  nothing, 'int|long|float|double|char|void'),
  // Keywords
  new Token('kw',  nothing, 'struct|enum|const'),
  // Numbers, operators, identifiers
  new Token('num', nothing, '\\d+(\\.\\d+)?'),
  new Token('id',  bolded,  '\\w[\\w\\d]*'),
  new Token('op',  nothing, '[^\\w\\d\\s]+')
];

py = [
  // Whitespace
  new Token('ws',  nothing, '\\s+'),
  // Browser-converted characters
  new Token('bcc', nothing, '&.*?;'),
  // Single-line comments
  new Token('slc', italics, '#.*?(?=(\\n|\\r\\n))'),
  // Flow-control
  new Token('fc',  nothing, 'for|while|if|elif|else'),
  // Keywords
  new Token('kw',  nothing, 'def|in|as|is|and|not|or'),
  // Numbers, operators, identifiers
  new Token('num', nothing, '\\d+(\\.\\d+)?'),
  new Token('id',  bolded,  '\\w[\\w\\d]*'),
  new Token('op',  nothing, '[^\\w\\d\\s]+')
]

function markup(text, tokens) {
  var marked = [];
  while (text.length > 0) {
    var matched = false;
    // Check each token type for a match
    for (const token of tokens) {
      const { regex, name, action } = token;
  
      // Returns the first match we find, so the token order matters
      const match = text.match(regex);
      if (match) {
        const str = match[0];
        console.log(str);
  
        marked.push(action(str));
        text = text.substring(str.length);
  
        matched = true;
        break;
      }
    }
  
    if (!matched) {
      break;
    }
  }
  
  return marked.join('');
}

function doAllMarkup() {
  const allCode = document.getElementsByTagName('code');
  const length = allCode.length;
  for (var i = 0; i < length; ++i) {
    const code = allCode.item(i);
    code.innerHTML = markup(code.innerHTML, c);
  }
}

doAllMarkup();