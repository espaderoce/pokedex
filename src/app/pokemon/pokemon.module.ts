import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { PokemonListComponent } from './pokemon-list.component';
import { MatMenuModule } from '@angular/material/menu';
import { ScrollingModule } from "@angular/cdk/scrolling";
import { PokemonCardComponent } from './pokemon-card/pokemon-card.component';

@NgModule({ 
  declarations: [
    PokemonListComponent,
    PokemonCardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    MatMenuModule,
    ScrollingModule
  ],
  exports:[
  PokemonListComponent
  ],
  providers: [],
  bootstrap: []
})
export class PokemonModule { }
