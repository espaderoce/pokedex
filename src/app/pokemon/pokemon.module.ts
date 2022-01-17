import { HttpClientModule } from '@angular/common/http';
import { PokemonRoutingModule } from './pokemon-routing.module';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { PokemonListComponent } from './pokemon-list.component';
import { MatMenuModule } from '@angular/material/menu';
import { MatSliderModule } from '@angular/material/slider';
import { ScrollingModule } from "@angular/cdk/scrolling";
import { PokemonCardComponent } from './pokemon-card/pokemon-card.component';
import { PokemonDetailComponent } from './pokemon-detail/pokemon-detail.component';
import { PokemonStatsComponent } from './pokemon-stats/pokemon-stats.component';


@NgModule({ 
  declarations: [
    PokemonListComponent,
    PokemonCardComponent,
    PokemonDetailComponent,
    PokemonStatsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    MatMenuModule,
    ScrollingModule,
    MatSliderModule
  ],
  exports:[
  PokemonListComponent,
  PokemonRoutingModule
  ],
  providers: [],
  bootstrap: []
})
export class PokemonModule { }
