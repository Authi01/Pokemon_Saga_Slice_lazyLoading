import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import pokemonReducer from "./pokemonSlice";
import { watchPokemon } from "./sagas";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    pokemon: pokemonReducer,
  },
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(watchPokemon);

export default store;
