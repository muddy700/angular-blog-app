import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './authentication/shared/auth.guard';

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
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
