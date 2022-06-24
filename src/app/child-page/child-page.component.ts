import { Component, Input, OnInit, Output, VERSION, EventEmitter } from '@angular/core';
import { FormBuilder, FormControl, FormControlDirective, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ApiServiceService } from '../service/api-service.service';

@Component({
  selector: 'app-child-page',
  templateUrl: './child-page.component.html',
  styleUrls: ['./child-page.component.scss']
})
export class ChildPageComponent implements OnInit {
  formGroupUpdate:FormGroup;
  @Input() Name:any;
  @Output() getupdateChild = new EventEmitter;
  constructor(private apiService: ApiServiceService,
               private activate: ActivatedRoute,
               private bg:FormBuilder) {
                this.formGroupUpdate = bg.group({
                  id: new FormControl(''),
                  first_name: new FormControl('',[Validators.required]),
                  last_name: new FormControl('',[Validators.required]),
                  email: new FormControl('', [Validators.required]),
                  avatar:new FormControl('',[Validators.required]),
                  job: new FormControl('')
                })
               }

  ngOnInit(): void {
    this.formGroupUpdate.patchValue(this.Name);
    this.formGroupUpdate.value.job;
  }


  updateForm(){
    this.getupdateChild.emit(this.formGroupUpdate.value);
    this.formGroupUpdate.reset();
  }
}
