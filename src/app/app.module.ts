import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {AppComponent} from './app.component';
import {UserListComponent} from "./components/user-list/user-list.component";
import {UserProfileComponent} from "./components/user-profile/user-profile.component";
import {GithubApiService} from "./services/github-api.service";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {RouterLink, RouterOutlet} from "@angular/router";
import {AppRoutingModule} from "./app-routing.module";
import {CdkDrag, CdkDropList, CdkDropListGroup} from "@angular/cdk/drag-drop";



@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    UserProfileComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterOutlet,
    RouterLink,
    AppRoutingModule,
    CdkDropListGroup,
    CdkDropList,
    CdkDrag,
  ],
  providers: [
    GithubApiService

  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
