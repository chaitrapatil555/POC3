import { Component, OnInit } from '@angular/core';
import { RegistrationserviceService } from '../registrationservice.service';
import {User} from '../User';
@Component({
  selector: 'app-registrationform',
  templateUrl: './registrationform.component.html',
  styleUrls: ['./registrationform.component.css']
})
export class RegistrationformComponent implements OnInit {
  user:User=new User("","",new Date(),new Date(),"","");
  msg:any;
  constructor(private service:RegistrationserviceService) { }

  ngOnInit(): void {
  }
  public registerNow(){
    let resp=this.service.doRegistration(this.user);
    resp.subscribe((data)=>this.msg=data);
      }

}
