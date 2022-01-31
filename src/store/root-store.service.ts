import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { increaseLimit, increaseOffset, loadPokemon } from './root.action';
import { ApplicationState } from './root.model';
import { limitSelector, offsetSelector, pokemonsSelector } from './root.selector';

//Facade Store
@Injectable({
  providedIn: 'root'
})
export class RootStoreService {

  limit$ = this.store.select(limitSelector);
  offset$ = this.store.select(offsetSelector);
  pokemons$ = this.store.select(pokemonsSelector);

  constructor(private store: Store<ApplicationState>) { }

  increaseLimit(limit: number){
    this.store.dispatch(increaseLimit({limit}))
  }

  increaseOffset(offset: number){
    this.store.dispatch(increaseOffset({offset:offset}))
  }

  loadPokemon(){
    this.store.dispatch(loadPokemon())
  }
}
