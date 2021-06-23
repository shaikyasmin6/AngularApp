import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {ProductdetailComponent} from  './productdetail/productdetail.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { ProductsComponent } from './products/products.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ContactusComponent } from './contactus/contactus.component';
import { PersonalisedgiftsComponent } from './personalisedgifts/personalisedgifts.component';
import { CakesComponent } from './cakes/cakes.component';
import { PlantsComponent } from './plants/plants.component';
import { FlowersComponent } from './flowers/flowers.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { UsersComponent } from './users/users.component';
import { UserdetailsComponent } from './userdetails/userdetails.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    ProductsComponent,
    HomeComponent,
    RegisterComponent,
    LoginComponent,
    ContactusComponent,
    PersonalisedgiftsComponent,
    CakesComponent,
    PlantsComponent,
    FlowersComponent,
    PagenotfoundComponent,
    ProductdetailComponent,
    UsersComponent,
    UserdetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  
}
