import { Component, OnInit,Inject } from '@angular/core';
import { trigger, style, transition, animate, keyframes, query, stagger } from '@angular/animations';
import { APP_CONFIG, AppConfig } from '../app-config.module';
import {AuthService } from '../core/auth.service'


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations:[
    trigger('goals', [
      transition('* => *', [
        query(':enter', style({ opacity: 0 }), {optional: true}),

        query(':enter', stagger('300ms', [
          animate('.6s ease-in', keyframes([
            style({opacity: 0, transform: 'translateY(-75%)', offset: 0}),
            style({opacity: .5, transform: 'translateY(35px)',  offset: 0.3}),
            style({opacity: 1, transform: 'translateY(0)',     offset: 1.0}),
          ]))]), {optional: true})
          ,
          query(':leave', stagger('300ms', [
            animate('.6s ease-out', keyframes([
              style({opacity: 1, transform: 'translateY(0)', offset: 0}),
              style({opacity: .5, transform: 'translateY(35px)',  offset: 0.3}),
              style({opacity: 0, transform: 'translateY(-75%)',     offset: 1.0}),
            ]))]), {optional: true})

      ])

    ])
  ]
})
export class HomeComponent implements OnInit {
  iteamCount: number = 4;
  btnText: string = "Add an item";
  goalText: string = "My first life goal";
  goals = ['My first life goal', 'I want to climb a mountain', 'Go ice skiing'];
  constructor(
    @Inject(APP_CONFIG) private config: AppConfig
  ) {
    console.log(config);
   }

  ngOnInit() {
    console.log(this.config);
  }
  addItem() {
    console.log(this.config);
    this.goals.push(this.goalText);
    this.goalText = "";
    this.iteamCount = this.goals.length;
  }
  removeItem(i) {
    this.goals.splice(i, 1);
  }
  
}
