import React from 'react';
import TextField from '@mui/material/TextField';

interface SearchBarProps {
  onSearch: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  return (
    <TextField
      label="Search Books"
      variant="outlined"
      fullWidth
      onChange={(e) => onSearch(e.target.value)}
    />
  );
};

export default SearchBar;
