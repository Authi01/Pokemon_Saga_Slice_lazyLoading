import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  list: [],
  details: null,
  currentPage: 0,
};

const pokemonSlice = createSlice({
  name: "pokemon",
  initialState,
  reducers: {
    setPokemonList: (state, action) => {
      state.list = action.payload;
    },
    setPokemonDetails: (state, action) => {
      state.details = action.payload;
    },
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload;
    },
  },
});

export const { setPokemonList, setPokemonDetails, setCurrentPage } =
  pokemonSlice.actions;
export default pokemonSlice.reducer;
