import { Component, VERSION } from '@angular/core';
import { SabrinaListService } from './sabrina-list.service';


@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'SabrinaTaskApp ';

  //constructor(public sabrinaListService: SabrinaListService){}

 // ngOnInit(){
   // this.sabrinaListService.update();
 // }
}
