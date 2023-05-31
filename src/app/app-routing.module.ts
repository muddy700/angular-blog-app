import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './shared/configurations';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./home/home.module').then((_) => _.HomeModule),
  },
  {
    path: 'auth',
    loadChildren: () =>
      import('./authentication/authentication.module').then(
        (_) => _.AuthenticationModule
      ),
  },
  {
    path: 'user-profile',
    loadChildren: () =>
      import('./profile/profile.module').then((_) => _.ProfileModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'categories',
    loadChildren: () =>
      import('./categories/categories.module').then((_) => _.CategoriesModule),
  },
  {
    path: 'posts',
    loadChildren: () =>
      import('./posts/posts.module').then((_) => _.PostsModule),
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
