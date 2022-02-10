import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class LogindataService {

  url = "https://gkuserapp.herokuapp.com/api/executive/login";

  constructor(public http : HttpClient) { }
  
  postLoginData(data: any){
    return this.http.post(this.url, data)
  }
}

