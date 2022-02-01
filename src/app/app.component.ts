import { Component } from '@angular/core';
import { RootStoreService } from 'src/store/root-store.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'myAngular';
  
  limit$ = this.rootStoreService.limit$;
  offset$ = this.rootStoreService.offset$;
  pokemons$ = this.rootStoreService.pokemons$;

  constructor(private rootStoreService: RootStoreService) {
   
  }

  insLimit(limit:number){
    this.rootStoreService.increaseLimit(limit);
  }

  insOffset(offset:number){
    this.rootStoreService.increaseOffset(offset);
  }

  loadPokemon(){
    this.rootStoreService.loadPokemon();
  }
}
