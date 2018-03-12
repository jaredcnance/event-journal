import * as React from 'react';

import glamorous from 'glamorous';

const Centered = glamorous.div({
  margin: '0 auto',
  width: '75%'
});

const Container = (props: any) => <Centered>{props.children}</Centered>;

export default Container;
