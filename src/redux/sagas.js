import { takeLatest, call, put, select } from "redux-saga/effects";
import axios from "axios";
import { setPokemonList, setPokemonDetails } from "./pokemonSlice";

//worker
function* fetchPokemonListSaga(action) {
  try {
    const { page } = action.payload;
    const limit = 20;
    const offset = (page - 1) * limit;
    const response = yield call(() =>
      axios.get(
        `https://pokeapi.co/api/v2/pokemon/?limit=${limit}&offset=${offset}`
      )
    );
    const currentList = yield select((state) => state.pokemon.list);
    yield put(setPokemonList([...currentList, ...response.data.results]));
  } catch (error) {
    console.error("An error occurred:", error);
  }
}

//worker
function* fetchPokemonDetailsSaga(action) {
  try {
    const response = yield call(() =>
      axios.get(`https://pokeapi.co/api/v2/pokemon/${action.payload}`)
    );
    yield put(setPokemonDetails(response.data));
  } catch (error) {
    console.error("An error occurred:", error);
  }
}

export function* watchPokemon() {
  yield takeLatest("FETCH_POKEMON_LIST", fetchPokemonListSaga);
  yield takeLatest("FETCH_POKEMON_DETAILS", fetchPokemonDetailsSaga);
}

// yeield - pauses the generator until the call is done
// here the call - calls the axios.get to make the api call
// take latest - listens for specific actions  and then dispatches
// put - to dispatch actions
