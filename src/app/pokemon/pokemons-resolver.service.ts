import { Injectable } from "@angular/core";
import { Resolve } from "@angular/router";
import { forkJoin } from "rxjs";
import { Pokemon } from "../utils/types";
import { PokemonService } from "./pokemon.service";

@Injectable({
    providedIn: "root"
})

export class PokemonsResolverService implements Resolve<[{results: Pokemon[]}, {results: []}]> {
    constructor(private pokemonService: PokemonService){}

    resolve() {
        return forkJoin([
            this.pokemonService.getPokemonList(),
            this.pokemonService.getGenerations()
        ]);
    }
}