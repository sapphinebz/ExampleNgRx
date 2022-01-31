import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {
  catchError,
  from,
  map,
  mergeAll,
  of,
  switchMap,
  tap,
  toArray,
  withLatestFrom,
} from 'rxjs';
import { PokemonService } from 'src/http/pokemon.service';
import { RootStoreService } from './root-store.service';
import {
  loadPokemon,
  loadPokemonError,
  loadPokemonSuccess,
} from './root.action';

@Injectable()
export class RootEffects {
  loadPokemons$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadPokemon),
      withLatestFrom(
        this.rootStoreService.offset$,
        this.rootStoreService.limit$
      ),
      switchMap(([_, offset, limit]) =>
        this.pokemonService.loadPokemonsModel(offset, limit).pipe(
          map((pokemons) => loadPokemonSuccess({ pokemons })),
          catchError((err) => {
            return of(loadPokemonError({ error: err }));
          })
        )
      )
    )
  );

  loadPokemonsError$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadPokemonError),
      tap((action) => {
        window.alert(`error load pokemon ${action.error.message}`)
      })
    ),
    {dispatch:false}
  );

  constructor(
    private actions$: Actions,
    private rootStoreService: RootStoreService,
    private pokemonService: PokemonService
  ) {}
}
