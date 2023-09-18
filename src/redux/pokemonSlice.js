import { createSlice } from "@reduxjs/toolkit";

// initial state
const initialState = {
  list: [],
  details: null,
};

const pokemonSlice = createSlice({
  name: "pokemon",
  initialState,
  reducers: {
    // takes the initial state and the action handlers ()
    setPokemonList: (state, action) => {
      state.list = action.payload; // updates the list property with actionpayload
      // this is called when action with setPokemonList is dispatched
    },
    setPokemonDetails: (state, action) => {
      state.details = action.payload;
      //called when action setPokemonDeatils is dispatched
    },
  },
});

//creating action creators and exporting them
export const { setPokemonList, setPokemonDetails } = pokemonSlice.actions;
export default pokemonSlice.reducer;
