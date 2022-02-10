import { Component, OnInit } from '@angular/core';
import {LogindataService} from '../logindata.service'
// import { Router } from '@angular/router'
import {Router} from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  // message="Sorry credentials does not exist match"
  checkCredentials = false;
email = 'malti@3689'
password = '123'
  constructor(public datas : LogindataService,public route: Router) { }

  checkLogin(userLogin : any){
    console.log(userLogin)
    this.datas.postLoginData(userLogin.value).subscribe((dt: any)=>{
      console.log(dt)
      console.log(dt.status)

      localStorage.setItem("user", JSON.stringify(dt.userData))
      
      if(!dt.status){
        this.checkCredentials = true;
      }else{
        // this.route.navigate(['/dashboard']);
        this.route.navigate(['/dashboard'])
      }



    },err => {
      this.checkCredentials = true
    })
  }

  ngOnInit(): void {
  }

}
