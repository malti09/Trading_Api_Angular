import { Component, OnInit } from '@angular/core';
import {DashboarddataService} from "../dashboarddata.service";
import {Router} from "@angular/router"


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})


export class DashboardComponent implements OnInit {
userData1: any;
public userDashboardData: any;

public newUserForm:any={
  is_Active:true,
  _id:"",  
  executiveId:"",
  email:"",
  phone:"",
  address:"",
  surname:"",
  education:"",
  country:"",
  state:"",
  experience:"",
  details:"",
  password:""
}

hideDashboardForm: any = true;
submit:any = true;

showPassword: any = true;
hideElement:any = true;

userEditDatadashboard: any={
  is_Active:true,
  _id:"",
  name:"",
  email:"",
  phone:"",
  address:"",
  surname:"",
  education:"",
  country:"",
  state:"",
  experience:"",
  details:"",
  executiveId:""
}

  constructor(public datas: DashboarddataService, public route: Router) {

    let data: any = localStorage.getItem("user");

    this.userData1 = JSON.parse(data);
    console.log(this.userData1._id);
    this.newUserForm.executiveId = this.userData1._id;
    this.newUserForm._id = 1;
    this.newUserForm.is_Active = true;

   }

   getUser(){
    this.datas.dashboardGetUserByExecutiveId(this.userData1._id).subscribe((userdt: any) =>{
      
      this.userDashboardData = userdt.reverse();
        
    })
  } 

  showDashboardForm(){
    this.hideDashboardForm = false;
  }

  cancelAddUser(){
    this.hideDashboardForm = true;
  }

   ngOnInit(): void {
    this.getUser();
  }

  userData(userForm: any){    
    this.newUserForm.name = userForm.value.name;
    this.newUserForm.email = userForm.value.email;
    this.newUserForm.phone = userForm.value.phone;
    this.newUserForm.address = userForm.value.address;
    this.newUserForm.surname = userForm.value.surname;
    this.newUserForm.education = userForm.value.education;
    this.newUserForm.country = userForm.value.country;
    this.newUserForm.state = userForm.value.state;
    this.newUserForm.experience = userForm.value.experience;
    this.newUserForm.details = userForm.value.details;

    console.log(userForm.value);
    console.log(this.newUserForm);
    if(this.userEditDatadashboard._id){
      this.datas.editUserData(this.userEditDatadashboard).subscribe((dt: any) =>{
          console.log(dt);
          this.getUser();
         })
    }else{
      this.datas.dashboardCreateUser(this.newUserForm).subscribe((dt: any)=>{
        console.log(dt) ; 
        
        this.getUser();      

      })
    }
    this.hideDashboardForm = true;
    this.submit=true;
    this.newUserForm={};
    }     

  logout(){
    localStorage.clear();
    this.route.navigate(['/login'])
  } 

  deleteUser(data: any){
    this.datas.deleteUserData(data).subscribe((dt: any) =>{
      console.log(dt);
      this.getUser();
    })
  }

  editUser(data: any){
   
      this.userEditDatadashboard.is_Active = data.is_Active;
      this.userEditDatadashboard._id = data._id;
      this.userEditDatadashboard.name = data.name;
      this.userEditDatadashboard.email = data.email;
      this.userEditDatadashboard.phone = data.phone;
      this.userEditDatadashboard.address = data.address;
      this.userEditDatadashboard.surname = data.surname;
      this.userEditDatadashboard.country = data.country;
      this.userEditDatadashboard.experience = data.experience;
      this.userEditDatadashboard.details = data.details;
      this.userEditDatadashboard.executiveId = data.executiveId;

      this.hideDashboardForm = false;
      this.submit = false;
      this.showPassword = false;

}
}