import * as React from 'react';
import glamorous from 'glamorous';

const inputPadding = 10;
const inputMargin = 10;

const Input = glamorous.input({
  fontSize: '2em',
  width: `calc(100% - ${(inputPadding + inputMargin) * 2}px)`,
  textAlign: 'center',
  padding: `${inputPadding}px`,
  margin: `${inputMargin}px`
});

interface Props {
  search: Function;
}

export default class SearchInput extends React.Component<Props> {
  handleChange = (event: any) => {
    this.props.search(event.target.value);
  };

  render() {
    return <Input placeholder="Add Item" onChange={this.handleChange} />;
  }
}
