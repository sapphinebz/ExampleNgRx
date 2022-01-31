import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { from, map, mergeAll, switchMap, toArray } from 'rxjs';
import { Pokemon, PokemonResponse } from 'src/models/pokemon';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  constructor(private http: HttpClient) {}

  loadPokemons(offset: number, limit: number) {
    return this.http.get<PokemonResponse>(
      `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`
    );
  }

  loadPokemonByUrl(url: string) {
    return this.http.get<Pokemon>(url);
  }

  loadPokemonsModel(offset: number, limit: number) {
    return this.loadPokemons(offset, limit).pipe(
      switchMap((response) =>
        from(response.results).pipe(
          map((result) => this.loadPokemonByUrl(result.url)),
          mergeAll(),
          toArray()
        )
      )
    );
  }
}
