// import { createSelector } from "@ngrx/store";
import { ApplicationState } from "./root.model";


export const limitSelector = (state: ApplicationState) => state.limit;
export const offsetSelector = (state: ApplicationState) => state.offset;
export const pokemonsSelector = (state: ApplicationState)=>state.pokemons;