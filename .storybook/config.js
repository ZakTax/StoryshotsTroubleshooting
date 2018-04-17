import { configure, addDecorator } from '@storybook/react';
import StoryRouter from 'storybook-react-router';

// THIS HAS TO BE BEFORE REQUIRE CONTEXT!!!
addDecorator(StoryRouter());

const req = require.context('../src', true, /.stories.jsx?$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

// addDecorator(story => (
//   <BrowserRouter>
//     <ThemeProvider theme={theme}>{story()}</ThemeProvider>
//   </BrowserRouter>
// ))

configure(loadStories, module);
