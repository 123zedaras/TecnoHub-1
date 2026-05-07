import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { MiDocumentacionComponent } from './mi-documentacion.component';

const routes: Routes = [
  { path: '', component: MiDocumentacionComponent },
];

@NgModule({
  declarations: [MiDocumentacionComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
  ],
})
export class MiDocumentacionModule {}
