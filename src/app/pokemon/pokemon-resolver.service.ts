import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve } from "@angular/router";
import { forkJoin } from "rxjs";
import { PokemonDetail, PokemonSpecies } from "../utils/types";
import { PokemonService } from "./pokemon.service";

@Injectable({
    providedIn: "root"
})

export class PokemonResolverService implements Resolve<[PokemonDetail, PokemonSpecies]> {
    constructor(private pokemonService: PokemonService){}

    resolve(route: ActivatedRouteSnapshot) {
        const id = route.paramMap.get('id') || '1';
        return forkJoin([
            this.pokemonService.getPokemon(id),
            this.pokemonService.getPokemonSpecies(id)
        ]);
    }
}