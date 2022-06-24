import { Component, OnInit} from '@angular/core';
import { FormBuilder, FormControl, FormControlDirective, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiServiceService } from '../service/api-service.service';


@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.scss']
})
export class UserEditComponent implements OnInit {
  routeListener:any;
  detail: any;
  showForm:FormGroup;
  userData:any;

  constructor(private formBuilder:FormBuilder ,
     private router:Router,
     private activRout:ActivatedRoute,
     private apiService:ApiServiceService) {
      this.showForm = formBuilder.group({
                      id: new FormControl(''),
                      first_name: new FormControl('',[Validators.required]),
                      last_name: new FormControl('',[Validators.required]),
                      email: new FormControl('',[Validators.required]),
                      avatar: new FormControl('',[Validators.required]),
                      job: new FormControl('',[Validators.required])
      });
  };

  ngOnInit() {
    this.routeListener = this.activRout.params.subscribe( (params) => {
      const employeeId = params["id"];
      console.log(employeeId);
        this.apiService.getUserData('api/users/'+employeeId).subscribe((res:any)=>{
         this.detail = res.data;
        console.log(res);

        this.showForm.patchValue(
                   {id: this.detail.id,
                    first_name: this.detail.first_name,
                    last_name: this.detail.last_name,
                    email: this.detail.email,
                    avatar: this.detail.avatar
                    // job: this.detail.value.job
                     })
                  });
    });

  }

  saveEditData(){
     console.log('hello post');
    //  const user = this.showForm.value+ this.showForm.value.job;
  //  const newUserdata= {first_name:this.detail.first_name,
  //   last_name:this.detail.last_name,email:this.detail.email,
  //   job:this.showForm.value.job,fullname:this.detail.first_name+this.detail.last_name,avatar:this.detail.avatar};
  const newUserdata = {detials:this.detail.value,job:this.showForm.value.job}
     this.apiService.postUserData('api/users/'+this.detail.id ,newUserdata).subscribe((response)=>{
    //this.users= response;
      // this.users.push(this.user.job+this.user.fullname);
     console.log(response);
     //alert('susscessfull  post')

     });
  }


}


