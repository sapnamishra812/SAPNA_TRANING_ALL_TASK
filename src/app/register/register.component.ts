
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  formGroup: FormGroup;
  submitFormCheck:boolean = false;

  constructor(private formBuilder: FormBuilder) {
    this.formGroup = formBuilder.group({
      name: new FormControl('', [Validators.required, Validators.pattern(/^[a-zA-Z\\S]*$/)]),
      dob: new FormControl('', [Validators.required]),
      number: new FormControl('', [Validators.required, Validators.pattern(/[7|8|9][0-9]{9}$/)]),
      email: new FormControl('', [Validators.required, Validators.pattern(/[a-zA-Z0-9]+@[a-z_]+.[a-z]{1,6}/)]),
    });
  }

 ngOnInit(): void {

 }

  postData(){
    console.log(this.formGroup);
    this.submitFormCheck = true;
  }
}
