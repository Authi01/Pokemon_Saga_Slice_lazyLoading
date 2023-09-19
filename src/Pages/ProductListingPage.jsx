import React, { useEffect } from "react";
import PokemonCard from "../components/PokemonCard";
import getImageUrl from "../Utils/ImageUrl";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentPage } from "../redux/pokemonSlice";

const ProductListingPage = () => {
  const dispatch = useDispatch();
  const pokemonList = useSelector((state) => state.pokemon.list);
  const currentPage = useSelector((state) => state.pokemon.currentPage);

  const loadMorePokemon = () => {
    dispatch(setCurrentPage(currentPage + 1));
    dispatch({
      type: "FETCH_POKEMON_LIST",
      payload: { page: currentPage + 1 },
    });
  };

  useEffect(() => {
    if (currentPage === 0) {
      dispatch(setCurrentPage(1));
      dispatch({ type: "FETCH_POKEMON_LIST", payload: { page: 1 } });
    }
  }, []);

  return (
    <div className="product-listing1">
      <h1 className="centered1">Pokemon List</h1>
      <div className="pokemon-grid1">
        {pokemonList.map((pokemon, index) => {
          const imageUrl = getImageUrl(index + 1);
          return (
            <PokemonCard key={index} pokemon={pokemon} imageUrl={imageUrl} />
          );
        })}
      </div>
      <button onClick={loadMorePokemon} className="back-button">
        Load More
      </button>
    </div>
  );
};

export default ProductListingPage;
