import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProductsComponent} from "./products/products.component";
import {TestComponent} from "./test/test.component";
import {NotFoundComponent} from "./notfound/not-found.component";
import {LoginComponent} from "./login/login.component";
import {CommonModule} from "@angular/common";
const routes: Routes = [
  {path:'',redirectTo:'login',pathMatch:'full'},
  {path:'product',component:ProductsComponent},
  {path:'test',component:TestComponent},
  {path:'login',component:LoginComponent },
  {path:'**',component:NotFoundComponent }

];

@NgModule({
  imports: [CommonModule,

    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
