import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { StarshipsListComponent } from './components/starships-list/starships-list.component';
import { StarshipCardComponent } from './components/starship-card/starship-card.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';

export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'starshipsList', component: StarshipsListComponent },
    {path: 'starshipCard', component: StarshipCardComponent },
    {path: 'login', component: LoginComponent },
    {path: 'register', component: RegisterComponent },
    

    //redirection
    {path: '***', redirectTo: '', pathMatch:'full'}
];
