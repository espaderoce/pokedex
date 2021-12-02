import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Generation, Pokemon } from "../utils/types";
import { Observable } from "rxjs";

@Injectable({
    providedIn:'root'
})

export class PokemonService{

constructor(private http:HttpClient){

}

getPokemonList(offset:number, limit:number){
 return this.http.get(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`) as Observable<{results:Pokemon[]}>;
}
getGenerations(){
  return this.http.get(`https://pokeapi.co/api/v2/generation/`) as Observable<{results:Generation[]}>;
 }
 getPokemonByGeneration(index:number){
  return this.http.get(`https://pokeapi.co/api/v2/generation/${index}`) as Observable<{pokemon_species:Pokemon[]}>;
 }

 getPokemonImageUri (id: number) {
    const imageId = ('00' + id).slice(-3); // para 1 => 001
    return `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${imageId}.png`;
  }
}