import { Routes } from '@angular/router';
import { Home } from './task1/home/home.component';
import { User } from './task1/user/user.component';


export const routes: Routes = [
  { path: '', component: Home },
  { path: 'user', component: User },
];