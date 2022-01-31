import { Pokemon, PokemonUrl } from "src/models/pokemon";

export interface ApplicationState {
    limit: number;
    offset:number;
    pokemons: Pokemon[]
}