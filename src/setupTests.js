// https://github.com/facebook/create-react-app/blob/master/packages/react-scripts/template/README.md#srcsetuptestsjs

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
// import 'jest-enzyme';

console.debug = function(args) {
  // console.log(args);
};

configure({ adapter: new Adapter() });
