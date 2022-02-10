import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'


@Injectable({
  providedIn: 'root'
})
export class SignupdataService {

  url = "https://gkuserapp.herokuapp.com/api/executive/createExecutive"

  constructor(public http: HttpClient) { }

  postSignupData(data: any){
     return this.http.post(this.url , data)
  }
}
