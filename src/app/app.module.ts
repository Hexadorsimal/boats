import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BoatDetailComponent } from './boat-detail/boat-detail.component';
import { BoatResolver } from './boat-resolver.service';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { BoatsComponent } from './boats/boats.component';

@NgModule({
  declarations: [
    AppComponent,
    BoatDetailComponent,
    PageNotFoundComponent,
    BoatsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [BoatResolver],
  bootstrap: [AppComponent]
})
export class AppModule { }
