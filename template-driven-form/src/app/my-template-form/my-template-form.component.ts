import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-template-form',
  templateUrl: './my-template-form.component.html',
  styleUrls: ['./my-template-form.component.scss']
})
export class MyTemplateFormComponent implements OnInit {

  formValue:any;
  form2Value:any;
  fullname:any;

  constructor() { }

  onSubmit(v:any) {
    console.log(v);
    this.formValue = v;
  }

  onSubmit2(v:any) {
    console.log(v);
    this.form2Value = v;
    this.fullname = this.form2Value? (this.form2Value.name + ' ' + this.form2Value.surname) : '';
  }

  ngOnInit() {
  }

}
