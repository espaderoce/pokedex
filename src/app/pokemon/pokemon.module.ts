import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { PokemonListComponent } from './pokemon-list.component';
import {MatMenuModule} from '@angular/material/menu';
@NgModule({
  declarations: [
    PokemonListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    MatMenuModule
  ],
  exports:[
  PokemonListComponent
  ],
  providers: [],
  bootstrap: []
})
export class PokemonModule { }
