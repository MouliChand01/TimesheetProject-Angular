import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OjasSerService } from '../ojas-ser.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  EmployeeData:any;         
  empid:any;              
  password:any;
  pasteBox:any;
  capta=false;
  str1:any;
  str2:any;
  alpha=['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '!', '@', '#', '$', '*']

  constructor(private router:Router,private ser:OjasSerService) { }

  ngOnInit(): void {
    this.getEmployee();
    this.funactionCap();
    this.pasteBox = document.getElementById("no-paste");
    this.pasteBox.onpaste = (e:any) => {
    e.preventDefault();
    return false;
  };
  }


  gotoDashBoard(){
    let data=this.EmployeeData.find((val:any)=>val.empid === this.empid);
    this.ser.sendObject(data);
    if(this.capta == true){
      if(data.password === this.password && this.str1 ===this.str2){
        alert(`${data.name} your login was success`);
        this.router.navigate(['EmployeDashboard']);
      }
      else{
        alert("please enter the right capta")
      }
    }
    else if(data && data.password === this.password ){
      alert(`${data.name} your login was success`);
      this.router.navigate(['EmployeDashboard']);
    }
    else{
      this.capta=true;
      alert(`your login was unsuccess please register ...`)
    }
  }

  getEmployee(){
    this.ser.getEmployee().subscribe((data)=>this.EmployeeData=data)
  }

  funactionCap() {
    var a = this.alpha[Math.floor(Math.random() * 41)];
    var b = this.alpha[Math.floor(Math.random() * 41)];
    var c = this.alpha[Math.floor(Math.random() * 41)];
    var d = this.alpha[Math.floor(Math.random() * 41)];
    var e = this.alpha[Math.floor(Math.random() * 41)];
    var sum = a + b + c + d + e;
    this.str1 = sum;
    }

}


