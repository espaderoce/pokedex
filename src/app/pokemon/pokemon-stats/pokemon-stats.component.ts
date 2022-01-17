import { Component, Input, OnInit } from "@angular/core";
import { PokemonDetail } from "../../utils/types";
import { ActivatedRoute } from "@angular/router";

@Component({
    selector: 'pokemon-stats',
    templateUrl: './pokemon-stats.component.html',
    styleUrls: ['./pokemon-stats.component.less']
})

export class PokemonStatsComponent implements OnInit {
    pokemonDetail?: PokemonDetail;

    constructor(private route: ActivatedRoute) {}

    ngOnInit(): void {
        const details = this.route.snapshot.data['details'];
        this.pokemonDetail = details[0] || {};
        console.log(this.pokemonDetail);
    }
}