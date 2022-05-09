import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { OjasSerService } from '../ojas-ser.service';

@Component({
  selector: 'app-empdashboard',
  templateUrl: './empdashboard.component.html',
  styleUrls: ['./empdashboard.component.css']
})
export class EmpdashboardComponent implements OnInit {

  totalwork: any;
  totalbreak: any;
  clockinTime: any;
  clockoutTime: any;
  EmployeData:any;
  show = false;
  show1 = false;
  clicked=false;
  clicked1=false;
  runing = false;
  hr: any = '0' + 0;
  min: any = '0' + 0;
  sec: any = '0' + 0;
  ms: any = '0' + 0;
 
  constructor(private datepipe: DatePipe,private ser:OjasSerService) { }

  ngOnInit(): void {
    this.getobject()
  //  const timer$=interval(1000)
  //  timer$.subscribe(()=>console.log("Hai"))
  }

  getobject(){
    this.ser.getObject().subscribe((data)=>this.EmployeData=data.text);
  }

  clockin() {
    this.show = true;
    this.clicked=!this.clicked;
    this.clicked1=false;
    this.clockinTime = this.datepipe.transform((new Date), 'h:mm a');
    this.totalwork=`${this.hr}:${this.min}:${this.sec}:${this.ms}`
    if (!this.runing) {
      this.runing = true;
      this.totalwork = setInterval(() => {
        this.ms++;
        this.ms = this.ms < 10 ? '0' + this.ms : this.ms;
        if (this.ms === 100) {
          this.sec++;
          this.sec = this.sec < 10 ? '0' + this.sec : this.sec;
          this.ms = '0' + 0;
        }
        if (this.sec === 60) {
          this.min++;
          this.min = this.min < 10 ? '0' + this.min : this.min;
          this.sec = '0' + 0;
        }
        if (this.min === 60) {
          this.hr++;
          this.hr = this.hr < 10 ? '0' + this.hr : this.hr;
          this.min = '0' + 0;
        }
      })
    }
  }

  clockout() {
    this.clicked1=!this.clicked1;
    this.clicked=false;
    this.show1 = true;
    this.clockoutTime = this.datepipe.transform((new Date), 'h:mm a')
  }
}
