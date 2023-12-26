import React from 'react';
import { Grid, FormControl, TextField,Box } from '@mui/material';


const SearchBar = ({ setSearch, search }) => {
  return (
      <Box display="flex" justifyContent="center" my={1}>
        <FormControl fullWidth style={{ width: '50%' }}>
          <TextField
            variant="outlined"
            label="Filtrar por Nombre"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
          />
        </FormControl>
      </Box>
  );
};

export default SearchBar;