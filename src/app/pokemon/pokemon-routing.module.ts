import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
// import { PokemonAddComponent } from "./add/pokemon-add.component";
import { PokemonListComponent } from "./pokemon-list.component";
import { PokemonResolverService } from "./pokemon-resolver.service";
import { PokemonDetailComponent } from "./pokemon-detail/pokemon-detail.component";
import { PokemonsResolverService } from "./pokemons-resolver.service";

const routes: Routes = [
    {
        path: 'pokedex/:id', 
        component: PokemonDetailComponent,
        resolve: {
            details: PokemonResolverService
        }
    },
    {
        path: 'pokedex', 
        component: PokemonListComponent,
        resolve: {
            pokemons: PokemonsResolverService
        }
    },
    // {
    //     path: 'add-pokemon', 
    //     component: PokemonAddComponent
    // }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class PokemonRoutingModule {}