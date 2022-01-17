import { HttpClientModule } from '@angular/common/http';
import { PokemonRoutingModule } from './pokemon-routing.module';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatSliderModule } from '@angular/material/slider';
import { ScrollingModule } from "@angular/cdk/scrolling";

//componentes
import { PokemonListComponent } from './pokemon-list.component';
import { PokemonCardComponent } from './pokemon-card/pokemon-card.component';
import { PokemonDetailComponent } from './pokemon-detail/pokemon-detail.component';
import { PokemonStatsComponent } from './pokemon-stats/pokemon-stats.component';
import { StyleManagerService } from '../common/header/style-manager.service';
import { HeaderComponent } from '../common/header/header.component';
import { MenuComponent } from '../common/menu/menu.component';


@NgModule({ 
  declarations: [
    PokemonListComponent,
    PokemonCardComponent,
    PokemonDetailComponent,
    PokemonStatsComponent,
    HeaderComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    MatMenuModule,
    ScrollingModule,
    MatSliderModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule 
  ],
  exports:[
  HeaderComponent,
  MenuComponent,
  PokemonRoutingModule,
  ],
  providers: [StyleManagerService],
  bootstrap: []
})
export class PokemonModule { }
