// This will enable storyshots in our jest tests.
// There's also a way to do snapshots to look into, but it will take some additional work:
// https://github.com/storybooks/storybook/tree/master/addons/storyshots#configure-storyshots-for-image-snapshots--alpha-

import initStoryshots, { imageSnapshot } from '@storybook/addon-storyshots';

initStoryshots({
  configPath: '.storybook',
  suite: 'Serialized storyshots',
  framework: 'react',
});

// const getMatchOptions = ({context : {kind, story}, url}) => {
//   return {
//     failureThreshold: 0.2,
//     failureThresholdType: 'percent',
//   }
// }
// const beforeScreenshot = (page, {context : {kind, story}, url}) => {
//   return new Promise(resolve =>
//       setTimeout(() => {
//           resolve();
//       }, 600)
//   )
// }
// initStoryshots({
//   configPath: '.storybook',
//   suite: 'Image storyshots',
//   framework: 'react',
//   test: imageSnapshot({ storybookUrl: 'http://localhost:9009' }),
//   // getMatchOptions,
//   // beforeScreenshot,
// });
