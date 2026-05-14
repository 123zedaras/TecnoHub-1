import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { SoftwareListComponent } from './software-list.component';
import { SoftwareCardComponent } from './software-card/software-card.component';

const routes: Routes = [
  { path: '', component: SoftwareListComponent },
];

@NgModule({
  declarations: [SoftwareListComponent, SoftwareCardComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
  ],
})
export class SoftwareModule {}
