import { AfterViewInit, Component, OnInit, NgZone, ViewChild  } from '@angular/core';
import { Generation, Pokemon } from '../utils/types';
import { PokemonService } from './pokemon.service';
import { CdkVirtualScrollViewport } from "@angular/cdk/scrolling";
import { pokemonColorMap } from './pokemonColorHash';
import { filter, map, pairwise, throttleTime } from "rxjs";
import { ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.less'],
})
export class PokemonListComponent implements OnInit, AfterViewInit {
  pokemons: Pokemon[] = [];
  generations: Generation[] = [];
  private pokemonList: Pokemon[] = [];
  search: string = '';
  offset: number = 0;
  limit: number = 20;
  @ViewChild('scroller') scroller?: CdkVirtualScrollViewport
  constructor(private pokemonService: PokemonService, private ngZone: NgZone, private route: ActivatedRoute,  private router: Router ) {}

  ngOnInit(): void {
     this.getPokemons();
     this.getGenerations();
     this.pokemons = this.pokemonList;
  }

  ngAfterViewInit() : void {
    this.scroller?.elementScrolled()
    .pipe(
        map(() => this.scroller?.measureScrollOffset('bottom')),
        pairwise(),
        filter(([y1, y2]) => {
            return (y2! < y1! && y2! < 200)
        }),
        throttleTime(200)
    ).subscribe(() => {
        this.ngZone.run(() => {
            this.getPokemons();
        })
    })
}
  
  getPokemons(): void {
    this.offset += this.limit;
    this.pokemonService
      .getPokemonList(this.offset, this.limit)
      .subscribe(
        (data: { results: Pokemon[] }) => (this.pokemons = this.sortPokemons([...this.pokemons, ...data.results]))
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

  addPokemon() {
    this.router.navigate(['add-pokemon']);
}
}
