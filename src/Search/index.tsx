import * as React from 'react';
import SearchInput from './SearchInput';
import SearchResults from './SearchResults';

interface Props {}

interface State {
  displaySearch: boolean;
  eventNameSearch: string;
  results: Array<string>;
}

export default class Search extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      displaySearch: false,
      eventNameSearch: '',
      results: []
    };
  }

  search = (eventNameSearch: string) => {
    let displaySearch = eventNameSearch ? true : false;
    this.setState({
      eventNameSearch,
      displaySearch,
      results: ['result 1', 'result 2', 'result 3']
    });
  };

  render() {
    const searchBox = this.state.displaySearch ? (
      <SearchResults results={this.state.results} />
    ) : null;
    return (
      <div>
        <SearchInput search={this.search} />
        {searchBox}
      </div>
    );
  }
}
