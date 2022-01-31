import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PokemonComponent } from './pokemon/pokemon.component';
import { StoreModule } from '@ngrx/store';
import { ApplicationState } from 'src/store/root.model';
import { limitReducer, offsetReducer, pokemonsReducer } from 'src/store/root.reducer';
import { EffectsModule } from '@ngrx/effects';
import {HttpClientModule} from '@angular/common/http';
import { RootEffects } from 'src/store/root.effect';

@NgModule({
  declarations: [
    AppComponent,
    PokemonComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot<ApplicationState>({limit: limitReducer,offset: offsetReducer,pokemons:pokemonsReducer}, {}),
    EffectsModule.forRoot([RootEffects])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
