import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiServiceService } from '../service/api-service.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
users:any='';
hidden: boolean = false ;
showToChild: any;

  constructor(private apiService:ApiServiceService,
              private router:Router) {}

  ngOnInit(): void {
    this.checkApi();
  }
  checkApi(){
    this.apiService.getUserData('api/users').subscribe((res:any)=>{
      this.users = res.data;
      console.log(res)
    });
  }

  showChildComponent(car: any){
       this.hidden = false;
       this.showToChild = car;
       setTimeout(()=> {
        this.hidden = true;
       })
  }

  getupdateChildeForm(event:any){
    console.log(event);
    let newUpdateData = event;
    newUpdateData.name = newUpdateData.first_name+ newUpdateData.last_name;
    this.apiService.patchApi('api/users/'+newUpdateData.id, newUpdateData).subscribe((res)=>{
      console.log(res);
      this.checkApi();
    })

  }
}
