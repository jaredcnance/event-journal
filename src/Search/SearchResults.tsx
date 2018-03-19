import * as React from 'react';
import SearchResult from './SearchResult';

interface Props {
  results: Array<string>;
}

const SearchResults = ({ results }: Props) => {
  const resultsRows = results.map((r, i) => (
    <SearchResult key={i} result={r} id={i} />
  ));

  return <div>{resultsRows}</div>;
};

export default SearchResults;
