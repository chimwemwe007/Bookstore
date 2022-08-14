import React from 'react';
import AddBook from './AddBook';
import Book from './Book';

class Books extends React.Component {
  constructor() {
    super();
    this.state = {
      Books: [
        { id: 1, name: 'In Search of Lost Time', author: 'Marcel Proust' },
        { id: 2, name: 'One Hundred Years of Solitude', author: ' Gabriel Garcia Marquez' }],
    };
  }

  render() {
    const { Books } = this.state;
    return (
      <>
        {Books.map((m) => <Book key={m.id} name={m.name} author={m.author} />)}
        <AddBook />
      </>

    );
  }
}

export default Books;
