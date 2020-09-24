import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { CardWeatherComponent} from './card-weather/card-weather.component';
import { PanelWeatherComponent} from './panel-weather/panel-weather.component';
import { TitleCityComponent} from './title-city/title-city.component';
import { MatToolbarModule} from '@angular/material/toolbar';
import { MatGridListModule} from '@angular/material/grid-list';
import { MatListModule} from '@angular/material/list';
import { SidebarCountriesComponent } from './sidebar-countries/sidebar-countries.component';
import { MatFormFieldModule} from '@angular/material/form-field';
import { MatIconModule} from '@angular/material/icon';
import { MatInputModule} from '@angular/material/input'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarCountriesComponent,
    CardWeatherComponent,
    PanelWeatherComponent,
    TitleCityComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatGridListModule,
    MatListModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
