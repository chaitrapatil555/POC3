import { Component, OnInit } from '@angular/core';
import { RegistrationserviceService } from '../registrationservice.service';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  users:any;
  fname:string;
  constructor(private service:RegistrationserviceService) { }

  public findUserByText(){
    let resp= this.service.getUserByText(this.fname);
    resp.subscribe((data)=>this.users=data);
   }
  
    ngOnInit() {
      
    }
  }
  