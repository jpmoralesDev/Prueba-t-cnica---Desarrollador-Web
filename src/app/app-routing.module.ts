// app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {UserProfileComponent} from "./components/user-profile/user-profile.component";
import {AppComponent} from "./app.component";
import {UserListComponent} from "./components/user-list/user-list.component";

const routes: Routes = [
  { path: '', component: UserListComponent },
  { path: 'user/:login', component: UserProfileComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
