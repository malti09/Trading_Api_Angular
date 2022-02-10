import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class DashboarddataService {

  url = "https://gkuserapp.herokuapp.com/api/users/createUsers";

  url2 = "https://gkuserapp.herokuapp.com/api/users/getUsersByExeId";

  url3 = "https://gkuserapp.herokuapp.com/api/users/deletUsers";

  url4 = "https://gkuserapp.herokuapp.com/api/users/editUsers"

  constructor(public http: HttpClient) { }

  dashboardCreateUser(data: any){
   return this.http.post(this.url, data)
  }

  dashboardGetUserByExecutiveId(data: any){
    return this.http.get(this.url2 + "?executiveId=" + data)
  }

  deleteUserData(data: any){
    return this.http.get(this.url3 + "?_id=" + data)
  }
  
  editUserData(data: any){
    return this.http.post(this.url4, data)
  }

}
