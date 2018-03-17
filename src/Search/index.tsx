import * as React from 'react';
import SearchInput from './SearchInput';

interface Props {}

interface State {
  displaySearch: boolean;
  eventNameSearch: string;
}

export default class Search extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      displaySearch: false,
      eventNameSearch: ''
    };
  }

  search = (eventNameSearch: string) => {
    let displaySearch = eventNameSearch ? true : false;
    this.setState({
      eventNameSearch,
      displaySearch
    });
  };

  render() {
    const searchBox = this.state.displaySearch
      ? 'this is where the searchbox would go'
      : null;
    return (
      <div>
        <SearchInput search={this.search} />
        {searchBox}
      </div>
    );
  }
}
