import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { pathToFileURL } from 'url';
import { CakesComponent } from './cakes/cakes.component';
import { ContactusComponent } from './contactus/contactus.component';
import { FlowersComponent } from './flowers/flowers.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { PersonalisedgiftsComponent } from './personalisedgifts/personalisedgifts.component';
import { PlantsComponent } from './plants/plants.component';
import { ProductsComponent } from './products/products.component';
import { RegisterComponent } from './register/register.component';
import { UserdetailsComponent } from './userdetails/userdetails.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [{path:'home',component:HomeComponent},
{path:'register',component:RegisterComponent},
{path:'login',component:LoginComponent},
{path:'contactus',component:ContactusComponent},
{path:'products',component:ProductsComponent,children:[{path:'personalisedgifts',component:PersonalisedgiftsComponent},
{path:'plants',component:PlantsComponent},
{path:'cakes',component:CakesComponent},
{path:'flowers',component:FlowersComponent},
{path:'',redirectTo:'/products/personalisedgifts',pathMatch:'full'}]},
{path:'user',component:UsersComponent},
{path:'user/:id',component:UserdetailsComponent},
{path:'',redirectTo:'/home',pathMatch:'full'},
{path:'**',component:PagenotfoundComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
