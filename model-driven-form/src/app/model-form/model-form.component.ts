import { FormBuilder, FormGroup } from '@angular/forms';

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-model-form',
  templateUrl: './model-form.component.html',
  styleUrls: ['./model-form.component.scss']
})
export class ModelFormComponent implements OnInit {

  constructor(fb: FormBuilder) {
    this.myForm = fb.group ({
      name: [''],
      surname: [''],
      address: fb.group({
        street: [''],
        number: [''],
        city: ['']
      })
    });
   }

  myForm: FormGroup;

  ngOnInit() {
  }

  onSubmit(v:any) {
    console.log(this.myForm);
    
  }

  toString() {
    return JSON.stringify(this.myForm.value);
    
  }

}
