import { createAction, props } from '@ngrx/store';
import { Pokemon, PokemonResponse } from 'src/models/pokemon';

export const increaseLimit = createAction(
  '[Root Module] increase limit',
  props<{ limit:number }>()
);

export const increaseOffset = createAction(
    '[Root Module] increase Offset',
    props<{ offset:number }>()
  );

export const loadPokemon = createAction(
    '[Root Module] load Pokemon'
  );

export const loadPokemonSuccess = createAction(
    '[Root Module] load Pokemon Success',
    props<{ pokemons:Pokemon[] }>()
  );

  export const loadPokemonError = createAction(
    '[Root Module] load Pokemon Error',
    props<{ error:any }>()

  );