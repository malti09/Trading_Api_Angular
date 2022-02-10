import { Component, OnInit } from '@angular/core';
import {SignupdataService} from '../signupdata.service'


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  constructor(public datas : SignupdataService) { }

  userData(userForm: any){
    console.log(userForm.value);
    this.datas.postSignupData(userForm.value).subscribe((dt: any) =>{
        console.log(dt)
        
    })    
    
  }

  ngOnInit(): void {
  }

}
