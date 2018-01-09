import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Component
import { GameListComponent } from './games/game-list/game-list.component';
import { DownloadsComponent } from './downloads/downloads.component';
import { HowToRegisterComponent } from './how-to-register/how-to-register.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { InstallationComponent } from './installation/installation.component';
 
const routes: Routes = [

  // {
  //   path: '',
  //   redirectTo: '/home',
  //   pathMatch: 'full' 
  // },

  {
    path: '',
    component: HomeComponent 
  },

  {
    path: 'download',
    component: DownloadsComponent
  },

  {
    path: 'installation',
    component: InstallationComponent
  },

  {
    path: 'register',
    component: HowToRegisterComponent
  },

  {
    path: 'contact',
    component: ContactComponent
  },

  // otherwise redirect to home
  { path: '**', redirectTo: '' }
];
 
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}