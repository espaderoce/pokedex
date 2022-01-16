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
  generations: Generation[] = [];
  private pokemonList: Pokemon[] = [];
  search: string = '';
  offset: number = 0;
  limit: number = 25;
  constructor(private pokemonService: PokemonService) {}

  ngOnInit(): void {
    this.getPokemons();
    this.getGenerations();
    this.pokemons = this.pokemonList;
  }
  getPokemons(): void {
    this.pokemonService
      .getPokemonList(this.offset, this.limit)
      .subscribe(
        (data: { results: Pokemon[] }) => (this.pokemons = this.sortPokemons(data.results))
      );
  }
  getGenerations(): void {
    this.pokemonService
      .getGenerations()
      .subscribe(
        (data: { results: Generation[] }) => (this.generations = data.results)
      );
  }

  getPokemonByGeneration(index: number) {
    if(index>0){
    this.pokemonService
      .getPokemonByGeneration(index)
      .subscribe((data: { pokemon_species: Pokemon[] }) => {
        this.pokemons = this.sortPokemons(data.pokemon_species);
      });
    }else{
      this.getPokemons();
    }
  }

  sortPokemons(data:Pokemon[]){
    return data.sort((a, b) => {
      if (a.name < b.name) {
        return -1;
      }
      if (b.name > a.name) {
        return 1;
      }
      return 0;
    });
   }

  searchPokemons() {
    this.pokemons = this.pokemonList.filter(
      (item) => !item.name.indexOf(this.search)
    );
  }
}
