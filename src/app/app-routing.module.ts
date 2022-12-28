import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'estilo-de-vida', 
    loadChildren: () => import('src/app/style-life/style-life.module').then((m) => m.StyleLifeModule) , 
  },
  {  path: '**', 
    redirectTo: 'estilo-de-vida' 
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
