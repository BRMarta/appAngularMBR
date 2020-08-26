import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from './shared/material.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/header/header.component';
import { PostListComponent } from './components/post-list/post-list.component';
import { PostDetailComponent } from './components/post-detail/post-detail.component';
import { FormComponent } from './components/form/form.component';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { LoginComponent } from './components/login/login.component';
import { PostDeleteComponent } from './components/post-delete/post-delete.component';
import { PostEditComponent } from './components/post-edit/post-edit.component';
import { FooterComponent } from './components/footer/footer.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { UserDeleteComponent } from './components/user-delete/user-delete.component';
import { FilterBarComponent } from './components/filter-bar/filter-bar.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PostListComponent,
    PostDetailComponent,
    FormComponent,
    LoginComponent,
    PostDeleteComponent,
    PostEditComponent,
    FooterComponent,
    UserProfileComponent,
    UserDeleteComponent,
    FilterBarComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    NoopAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
