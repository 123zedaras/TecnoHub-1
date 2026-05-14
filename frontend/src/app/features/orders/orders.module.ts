import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { OrderListComponent } from './order-list/order-list.component';
import { OrderDetailComponent } from './order-detail/order-detail.component';

const routes: Routes = [
  { path: '',    component: OrderListComponent },
  { path: ':id', component: OrderDetailComponent },
];

@NgModule({
  declarations: [OrderListComponent, OrderDetailComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class OrdersModule {}
