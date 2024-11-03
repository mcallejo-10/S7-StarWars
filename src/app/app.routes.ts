import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { StarshipsListComponent } from './components/starships-list/starships-list.component';
import { StarshipCardComponent } from './components/starship-card/starship-card.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { activateRouteGuard } from './guards/activate-route.guard';

export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'starshipsList', component: StarshipsListComponent, canActivate:[activateRouteGuard] },
    {path: 'starshipCard', component: StarshipCardComponent,canActivate:[activateRouteGuard] },
    {path: 'login', component: LoginComponent },
    {path: 'register', component: RegisterComponent  },
    {path: '***', redirectTo: '', pathMatch:'full'}
];
