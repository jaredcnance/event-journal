import * as React from 'react';
import glamorous from 'glamorous';

const Input = glamorous.input({
  fontSize: '2em',
  width: '100%',
  textAlign: 'center',
  padding: '10px'
});

const ItemInput = () => <Input placeholder="Add Item" />;

export default ItemInput;
