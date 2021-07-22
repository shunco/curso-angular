import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EventsRoutingModule } from './events-routing.module';
import { EventsComponent } from './events.component';
import { ListsService} from './services/lists.service';
import { DragDirective } from './directives/drag.directive';
import { DropDirective } from './directives/drop.directive';
import { SortPipe } from './pipes/sort.pipe';


@NgModule({
  declarations: [EventsComponent, DragDirective, DropDirective, SortPipe],
  imports: [
    CommonModule,
    EventsRoutingModule
  ], providers: [ListsService]
})
export class EventsModule { }
