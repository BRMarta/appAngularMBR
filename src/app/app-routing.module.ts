import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostListComponent } from './components/post-list/post-list.component';
import { PostDetailComponent } from './components/post-detail/post-detail.component';
import { FormComponent } from './components/form/form.component';
import { LoginComponent } from './components/login/login.component';
import { PostDeleteComponent } from './components/post-delete/post-delete.component';
import { PostEditComponent } from './components/post-edit/post-edit.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { UserGuard } from './guards/user.guard';

const routes: Routes = [
  {
    path: '',
    component: PostListComponent,
  },
  {
    path: 'post/:id',
    component: PostDetailComponent
  },
  {
    path: 'form',
    component: FormComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'post/delete/:id',
    component: PostDeleteComponent
  },
  {
    path: 'post/edit/:id',
    component: PostEditComponent
  },
  {
    path: 'user-profile',
    component: UserProfileComponent,
    canActivate: [UserGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
