import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {
apiUrl: string = environment.url;
  constructor(private http: HttpClient) { }

  getUserData(url1:string=''){
     return  this.http.get(this.apiUrl+url1);
  }

  postUserData(url1:string='',data:any){
    return this.http.post(this.apiUrl+url1,data );
  }

  public saveUser(user:string =''): Observable<any> {
    return this.http.post<any>(this.apiUrl, user);
  }

  patchApi(url:string= '', data:any){
     return this.http.patch(this.apiUrl+url, data)
  }
  
}


