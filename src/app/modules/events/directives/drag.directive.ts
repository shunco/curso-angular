import { Directive, HostBinding, HostListener, Input} from '@angular/core';
import { ListsService} from '../services/lists.service';

@Directive({
  selector: '[appDrag]'
})
export class DragDirective {

  @Input() no_list;
  @Input() item;
  @Input() selected:boolean;

  @HostBinding('style.backgroundColor') backgroudColor;

  constructor(private service: ListsService) {

   }





   @HostListener('mouseover')
   public mouseOver(){
     this.backgroudColor= 'green';
   }

   /*@HostListener('click')
   public click(){

     this.selected= !this.selected

     if(this.selected){
      this.backgroudColor= 'green';
     }else {
      this.backgroudColor= 'transparent';
     }


   }*/

   @HostListener('mouseout')
   public mouseOut(){
     this.backgroudColor= 'transparent';
   }

   @HostListener('dragstart', ['$event'])
   public drag(event: any){

    this.service.dragging= {
      no: this.no_list,
      item: this.item
    }
     

   }



}
