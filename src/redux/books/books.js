import { v4 as rid } from 'uuid';
// Actions
const LOAD = 'bookstore/books/LOAD_BOOK';
const ADD = 'bookstore/books/ADD_BOOK';
const REMOVE = 'bookstore/books/REMOVE_BOOK';

const books = [
  { id: rid(), name: 'In Search of Lost Time', author: 'Marcel Proust' },
  { id: rid(), name: 'One Hundred Years of Solitude', author: ' Gabriel Garcia Marquez' }];
// Reducer
export default function booksReducer(state = books, action = {}) {
  function remove(sourceList, value) {
    const index = sourceList.indexOf(value);
    if (index >= 0 && index < sourceList.length) {
      return [
        ...sourceList.slice(0, index),
        ...sourceList.slice(index + 1),
      ];
    }
    return sourceList;
  }
  const { value } = action;
  switch (action.type) {
    case LOAD:
      return [...state];
    case ADD:
      return [...state, value];
    case REMOVE:
      return remove(state, state.filter((i) => i.id === value)[0]);
    default:
      return state;
  }
}

// Action Creators
export function loadBooks() {
  return { type: LOAD };
}

export function addBook(title, author) {
  return { type: ADD, value: { id: rid(), name: title, author } };
}

export function removeBook(book) {
  return { type: REMOVE, value: book };
}
