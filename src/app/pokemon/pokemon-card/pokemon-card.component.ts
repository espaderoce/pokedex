import { Component, Input, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Pokemon } from "src/app/utils/types";
import { PokemonService } from "../pokemon.service";
import { pokemonColorMap } from "../pokemonColorHash";

@Component({
    selector: 'pokemon-card',
    templateUrl: './pokemon-card.component.html',
    styleUrls: ['./pokemon-card.component.less']
})

export class PokemonCardComponent implements OnInit {
    @Input() pokemon!: Pokemon;

    constructor(private pokemonService: PokemonService, private router: Router) {}

    ngOnInit(): void {
    }

    getImageUri() {
        return this.pokemonService.getPokemonImageUri(
            this.getPokemonIdFromUrl(this.pokemon.url)
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

      goToPokemonDetails(pokemon: Pokemon) {
        const id =  this.getPokemonIdFromUrl(pokemon.url);
        this.router.navigate([`/pokedex/${id}`]);
    }
}