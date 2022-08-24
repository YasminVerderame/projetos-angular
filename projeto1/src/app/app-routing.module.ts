import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { PlansComponent } from './pages/plans/plans.component';
import { PurchaseComponent } from './pages/purchase/purchase.component';

const routes: Routes = [
  { path: "", component: HomeComponent},
  { path: 'login', component: LoginComponent },
  { path: 'plans', component: PlansComponent },
  { path: 'pagamento', component: PurchaseComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled', anchorScrolling: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
