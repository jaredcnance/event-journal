import * as React from 'react';
import glamorous from 'glamorous';

const Input = glamorous.input({
  fontSize: '2em',
  width: '100%',
  textAlign: 'center',
  padding: '10px',
  margin: '10px'
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
