import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BoatDetailComponent } from './boat-detail/boat-detail.component';
import { BoatResolver } from './boat-resolver.service';
import { BoatsComponent } from './boats/boats.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


const routes: Routes = [
  { path: 'boats', component: BoatsComponent },
  { path: 'boats/:name', component: BoatDetailComponent, resolve: {boat: BoatResolver} },
  { path: '', redirectTo: '/boats', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
