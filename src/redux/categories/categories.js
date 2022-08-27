const CHECK = 'bookstore/categories/CHECK';

// Reducer
export default function categoriesReducer(state = [], action = {}) {
  switch (action.type) {
    // do reducer stuff
    case CHECK:
      return 'Under Constuction';
    default:
      return state;
  }
}

// Action Creators
/* eslint-disable */
export function checkCategories() {
  return { type: CHECK };
}
