import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Pokemon, PokemonDetail, PokemonSpecies } from "../utils/types";
import { Observable } from "rxjs";

@Injectable({
    providedIn:'root'
})

export class PokemonService{

constructor(private http:HttpClient){

}

getPokemonList(offset: number = 0, limit: number = 25){
 return this.http.get(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`) as Observable<{results:Pokemon[]}>;
}
getGenerations(){
  return this.http.get(`https://pokeapi.co/api/v2/generation/`) as Observable<{results: []}>;
 }
 getPokemonByGeneration(index:number){
  return this.http.get(`https://pokeapi.co/api/v2/generation/${index}`) as Observable<{pokemon_species:Pokemon[]}>;
 }

 getPokemonImageUri (id: number) {
    const imageId = ('00' + id).slice(-3); // para 1 => 001
    return `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${imageId}.png`;
  }

  getPokemon(id: string) {
    return this.http.get(`https://pokeapi.co/api/v2/pokemon/${id}`) as Observable<PokemonDetail>;
}

getPokemonSpecies(id: string) {
  return this.http.get(`https://pokeapi.co/api/v2/pokemon-species/${id}`) as Observable<PokemonSpecies>;
}
}