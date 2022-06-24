import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component,  } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [trigger('divState', [
   state('normal', style({'background-color':'red', transform: 'translateX(0)' })),
   state('highlighted', style({backgroundColor:'blue',transform:'translateX(100px)' })),
   transition('normal=>highlighted', animate(300)),
    transition('highlighted=>normal', animate(800)),
  // transition('normal<=> highlighted' , animate(1000)
   ]),

   trigger('wildState', [
    state('normal', style({'background-color':'red', transform: 'translateX(0)' })),
    state('highlighted', style({'background-color':'blue',transform:'translateX(300px)' })),
    state('shunken', style({'background-color':'green',transform:'translateX(0) scale(0.5)'  })),
    transition('normal=>highlighted', animate(300)),
     transition('highlighted=>normal', animate(800)),
     transition('shrunken <=> *', animate(500))
   // transition('normal<=> highlighted' , animate(1000))
   ])
   ]
})
export class AppComponent {
  title = 'registerForm';
  state = "normal";
  wildState = "shrunken";
  onAnimation(){
 this.state== 'normal'? this.state='highlighted':this.state='normal';
 this.wildState ==='normal'? this.wildState='normal':this.wildState='highlighted';
  }
  onswitch(){
   this.wildState ='shrunken';
  }
}
