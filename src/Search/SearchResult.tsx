import * as React from 'react';
import glamorous from 'glamorous';

interface Props {
  result: string;
  id: number;
}

const ResultBox = glamorous.div({
  lineHeight: '3em'
});

const SearchResult = ({ result, id }: Props) => <ResultBox>{result}</ResultBox>;

export default SearchResult;
