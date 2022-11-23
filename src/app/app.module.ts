import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import {FormsModule} from "@angular/forms";
import { ProductsComponent } from './products/products.component';
import { OffresEmploiComponentComponent } from './offres-emploi-component/offres-emploi-component.component';
import { ArticleComponent } from './article/article.component';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { NotFoundComponent } from './notfound/not-found.component';
import { LoginComponent } from './login/login.component';
import { AddProductComponent } from './add-product/add-product.component';
import { HomeComponent } from './home/home.component';
import { DetailProductComponent } from './detail-product/detail-product.component';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    ProductsComponent,
    OffresEmploiComponentComponent,
    ArticleComponent,
    NavComponent,
    FooterComponent,
    NotFoundComponent,
    LoginComponent,
    AddProductComponent,
    HomeComponent,
    DetailProductComponent,



  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
