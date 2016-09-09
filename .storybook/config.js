import { configure } from '@kadira/storybook';

function loadStories() {
  const storyContenxt = require.context('../test/stories', true, /\.story\.js$/);
  storyContenxt.keys().forEach(storyContenxt);
}

configure(loadStories, module);
