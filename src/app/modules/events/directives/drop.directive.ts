import { Directive, Input, HostListener} from '@angular/core';
import { ListsService } from '../services/lists.service'

@Directive({
  selector: '[appDrop]'
})
export class DropDirective {

  @Input() no_list;
  


  constructor(private service: ListsService) {

   }

   @HostListener('dragover', ['$event'])
   public dragOver(event: any){
     event.preventDefault();
   }



   @HostListener('drop')
   public drop(){

    this.service.remove();
    this.service.add(this.no_list);

   }

}
