import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { GridComponent } from './dashboard/grid/grid.component';
import { AddProduct } from './dashboard/addProduct/addProduct.component';
import { ModifyProduct } from './dashboard/modifyProduct/modifyProduct.component';
import { AuthGuard } from './services/auth-guard.service';

export const routes: Routes = [
    {
        path: '',
        component : LoginComponent
    },
    {
        path: 'register',
        component : RegisterComponent
    },
    {
        path: 'dashboard',
        canActivate: [AuthGuard],
        component : DashboardComponent,
        children: [{
            path: '',
            component : GridComponent
        },
        {
            path: 'addProduct',
            component : AddProduct
        },
        {
            path: 'modifyProduct/:id',
            component : ModifyProduct
        }]
    },
    {
        path: '**',
        redirectTo: '404'
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
