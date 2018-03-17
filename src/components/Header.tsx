import * as React from 'react';
import glamorous from 'glamorous';

const HeaderIcon = glamorous.img({
  marginRight: '10px',
  verticalAlign: 'middle',
  marginBottom: '10px'
});

const Span = glamorous.span({
  float: 'left',
  whiteSpace: 'nowrap'
});

const Header = (props: any) => (
  <div>
    <h1>
      <Span>
        <HeaderIcon src={require('./images/header-icon.svg')} />
        {props.children}
      </Span>
    </h1>
  </div>
);

export default Header;
