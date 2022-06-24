import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiServiceService } from '../service/api-service.service';

@Component({
  selector: 'app-showform',
  templateUrl: './showform.component.html',
  styleUrls: ['./showform.component.scss']
})
export class ShowformComponent implements OnInit {
users:any;
  constructor(private apiData :ApiServiceService, private rout: ActivatedRoute) {
  }

  ngOnInit() {
    this.rout.params.subscribe((p)=>{
      const id1 = p['id'];
       this.apiData.getUserData('api/users/'+id1).subscribe((data:any)=>{
      this.users = data.data;
      console.log(data)
    })
  })
  }
}
