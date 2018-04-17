import styled from 'react-emotion';

export const Test = styled('div')({ color: 'green' });
export const Test2 = styled('div')({ color: 'yellow' });

const Fail = styled('div')({
  [Test]: {
    color: 'red',
  },
  [Test2]: {
    color: 'blue',
  },
});

export default Fail;
