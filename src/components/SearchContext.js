// SearchContext.js
import { createContext } from 'react';

const SearchContext = createContext({
  setSearchResults: () => {},
});

export default SearchContext;
