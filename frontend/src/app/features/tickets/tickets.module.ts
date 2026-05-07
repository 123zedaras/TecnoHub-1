import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { TicketListComponent }   from './ticket-list/ticket-list.component';
import { TicketCreateComponent } from './ticket-create/ticket-create.component';
import { TicketDetailComponent } from './ticket-detail/ticket-detail.component';

const routes: Routes = [
  { path: '',       component: TicketListComponent },
  { path: 'nueva',  component: TicketCreateComponent },
  { path: ':id',    component: TicketDetailComponent },
];

@NgModule({
  declarations: [
    TicketListComponent,
    TicketCreateComponent,
    TicketDetailComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
  ],
})
export class TicketsModule {}
