import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './shared/login/login.component';
import { NotfoundComponent } from './shared/notfound/notfound.component';

const appRoute: Routes = [
    { path: 'login', component: LoginComponent },
    { path: '**', component: NotfoundComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(appRoute)],
    exports: [RouterModule]
})
export class AppRoutingModule { }