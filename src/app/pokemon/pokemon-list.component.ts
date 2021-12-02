import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../utils/types';
import { PokemonService } from './pokemon.service';
import { pokemonColorMap } from './pokemonColorHash';

@Component({
  selector: 'pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.less'],
})
export class PokemonListComponent implements OnInit {
  pokemons: Pokemon[] = [];
  private pokemonList: Pokemon[] = [];
  search: string = '';
  offset:number=0;
  limit:number = 25;
  constructor(private pokemonService: PokemonService) {}

  ngOnInit(): void {
    this.getPokemons();
    this.pokemons = this.pokemonList;
  }
  getPokemons():void{
  this.pokemonService.getPokemonList(this.offset,this.limit)
  .subscribe((data:{results:Pokemon[]} ) => this.pokemons=data.results);
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
