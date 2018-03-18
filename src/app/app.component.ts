import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { UPDATE, ADD, RESET } from './counter';
import { Lead } from './lead';
import { Observable } from 'rxjs/Observable';
import { Action } from 'rxjs/scheduler/Action';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  data={
    login:1,
   city:"string",
    id:"number",
    token:"string",
 }

 counter: Observable<Lead>;
 constructor(private store: Store<Lead>){
   this.counter = store.select('counter');
   console.log("initial",this.counter);
   this.store.dispatch({type:ADD,payload:this.data})
   this.counter = store.select('counter');
   console.log("after",this.counter);
 }
}
