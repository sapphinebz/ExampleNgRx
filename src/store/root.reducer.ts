import { createReducer, on } from "@ngrx/store";
import { Pokemon, PokemonUrl } from "src/models/pokemon";
import { increaseLimit, increaseOffset, loadPokemonSuccess } from "./root.action";

export const limitReducer = createReducer(
    10,
    on(increaseLimit,(state,action)=>{
        state += action.limit;
        return state;
    })
  );
export const offsetReducer = createReducer(
    0,
    on(increaseOffset,(state,action)=>{
        state += action.offset;
        return state;
    })
  );

  export const pokemonsReducer = createReducer<Pokemon[]>(
    [],
    on(loadPokemonSuccess,(state,action)=>{
        return action.pokemons;
    })
  );

 