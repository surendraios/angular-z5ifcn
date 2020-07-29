import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ValidatorFn } from '@angular/forms';
import { HttpClient, HttpParams } from '@angular/common/http';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(public fb: FormBuilder, public http: HttpClient,private datePipe: DatePipe) { }

  myForm = this.fb.group({
      myDate: [null],
    });

  save() {
    console.log(this.myForm.value);
    let x = this.myForm.value;
let d = new Date(x.myDate);
     console.log(this.datePipe.transform(d, 'yyyy-MM-dd 23:59:59'));
    //this.http.post("localhost:5000",this.myForm.value).subscribe(result => { });
  }

}
