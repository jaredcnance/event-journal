import * as React from 'react';
import { Component } from 'react';
import Container from './Container';
import ItemInput from './ItemInput';

interface Props {}
interface State {}

export default class App extends Component<Props, State> {
  state: State = {};

  render() {
    return (
      <Container>
        <h1>Grocery List</h1>
        <ItemInput />
      </Container>
    );
  }
}
