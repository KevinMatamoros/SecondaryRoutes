import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './routable-components/home/home.component';
import { StoreModule } from '@ngrx/store';
import { reducer } from './state/app-reducer';
import { EffectsModule } from '@ngrx/effects';
import { EffectsEmployee } from './state/store/employee/effects';
import { HttpClientModule } from '@angular/common/http';

import * as sharedComponents from './shared-components/';
import { TableInfoComponent } from './shared-components/table-info/table-info.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    sharedComponents.ConfigComponentPage,
    sharedComponents.ConfigComponent,
    TableInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot(reducer),
    EffectsModule.forRoot([
      EffectsEmployee
    ]),
    StoreDevtoolsModule.instrument({
      maxAge: 10
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
