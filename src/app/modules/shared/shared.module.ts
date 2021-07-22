import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotesComponent } from './notes/notes.component';
import { DashboardComponent } from './dashboard/dashboard.component';



@NgModule({
  declarations: [NotesComponent, DashboardComponent],
  exports: [NotesComponent, DashboardComponent],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
