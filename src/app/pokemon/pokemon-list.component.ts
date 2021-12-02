import { Component, OnInit } from '@angular/core';
import { Generation, Pokemon } from '../utils/types';
import { PokemonService } from './pokemon.service';
import { pokemonColorMap } from './pokemonColorHash';

@Component({
  selector: 'pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.less'],
})
export class PokemonListComponent implements OnInit {
  pokemons: Pokemon[] = [];
  generations: Generation[]=[];
  private pokemonList: Pokemon[] = [];
  search: string = '';
  offset:number=0;
  limit:number = 25;
  constructor(private pokemonService: PokemonService) {}

  ngOnInit(): void {
    this.getPokemons();
    this.getGenerations();
    this.pokemons = this.pokemonList;
  }
  getPokemons():void{
  this.pokemonService.getPokemonList(this.offset,this.limit)
  .subscribe((data:{results:Pokemon[]} ) => this.pokemons=data.results);
  }
  getGenerations():void{
    this.pokemonService.getGenerations()
    .subscribe((data:{results:Generation[]} ) => this.generations=data.results);
    }
  
  getPokemonByGeneration(index:number){
    this.pokemonService.getPokemonByGeneration(index)
  .subscribe((data:{pokemon_species:Pokemon[]} ) => this.pokemons=data.pokemon_species);
    }
  getImageUri(pokemon: Pokemon) {
    return this.pokemonService.getPokemonImageUri(
      this.getPokemonIdFromUrl(pokemon.url)
    );
  }

  getPokemonIdFromUrl(url: string) {
    const parseUrl = url.split('/'),
      id = parseUrl[parseUrl.length - 2];
    return +id;
  }

  getTextColor(pokemon: Pokemon) {
    const pokemonColor = this.getPokemonColor(pokemon);

    switch(pokemonColor) {
        case '#fbf6f6':
        case '#f0f060e6':
            return 'black';
        default:
            return 'white';
    }
}

  getPokemonColor(pokemon: Pokemon) {
    const id = this.getPokemonIdFromUrl(pokemon.url);
    return pokemonColorMap[id];
  }
  searchPokemons() {
    this.pokemons = this.pokemonList.filter(item => !item.name.indexOf(this.search));
  }
}
