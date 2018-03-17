import * as React from 'react';
import { Component } from 'react';
import Container from './Container';
import Header from './components/Header';
import Search from './Search';
interface Props {}
interface State {}

export default class App extends Component<Props, State> {
  state: State = {};

  render() {
    return (
      <Container>
        <Header>Event Journal</Header>
        <Search />
      </Container>
    );
  }
}
