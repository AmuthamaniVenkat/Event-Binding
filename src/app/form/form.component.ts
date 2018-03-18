import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { debug } from 'util';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  myform: FormGroup;
  langs:string[]=[
    'English',
  'French',
  'German',
  ];
  constructor() { }

  ngOnInit() {
    this.myform = new FormGroup({
      name:new FormGroup({ 
        firstName: new FormControl(), 
        lastName: new FormControl(),
    }),
    email: new FormControl(),
    password:new FormControl(),
    Language: new FormControl()

    });
  }
  onSubmit() {
    if (this.myform.valid) {
      debugger
      console.log("Form Submitted!");
      this.myform.reset();
    }
  }

}
