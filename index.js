'use strict';

const HTML = `
  <div>
    <h1>This is a title</h1>

    <style>

    <h2>This is a subtitle</h2>
  </div>
`;

function Content() {
  return React.createElement('div', {
    dangerouslySetInnerHTML: {
      __html: HTML,
    },
  });
}

const content = document.querySelector('#content');

ReactDOM.render(React.createElement(Content), content);
