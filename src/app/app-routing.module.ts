import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormProductoComponent } from './componentes/producto/form-producto/form-producto.component';

const routes: Routes = [
  { path: '', redirectTo: 'formularioproducto', pathMatch: 'full' },
  { path: 'formularioproducto', component: FormProductoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
