import axios from 'axios';
import { useState } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import { CollectionInterface } from '../../../../types/CollectionInterface';
import { LinkInterface } from '../../../../types/LinkInterface';
import { SuggestionInterface } from '../../../../types/SuggestionInterface';
import { AutoComplete } from '../Autocomplete';
import { Input, StyledSearchBar, SearchBarWrapper } from './style';
import { createSuggestions } from '../../../../utils/createSuggestions';

export const SearchBar = () => {
  const [input, setInput] = useState<string>('');
  const [suggestions, setSuggestions] = useState<SuggestionInterface[]>([]);

  const handleChange = (e: { target: HTMLInputElement }) => {
    setInput(e.target.value);
    handleSearch(e.target.value);
  };

  const handleSearch = (toSearch: string) => {
    setSuggestions([]);
    axios
      .get('/api/find', {
        params: {
          search: toSearch,
        },
      })
      .then((res) => {
        const links: LinkInterface[] = res.data.links;
        const collections: CollectionInterface[] = res.data.collections;
        setSuggestions(createSuggestions(links, collections));
      });
  };

  return (
    <SearchBarWrapper>
      <StyledSearchBar whileTap={{ scale: 0.98 }}>
        <AiOutlineSearch />
        <Input
          placeholder="search by name or keyword"
          onChange={handleChange}
          value={input}
        />
        <AutoComplete
          input={input}
          setInput={setInput}
          suggestions={suggestions}
        />
      </StyledSearchBar>
    </SearchBarWrapper>
  );
};
