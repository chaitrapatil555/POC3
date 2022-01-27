import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { RegistrationserviceService } from '../registrationservice.service';

@Component({
  selector: 'app-display-component',
  templateUrl: './display-component.component.html',
  styleUrls: ['./display-component.component.css']
})
export class DisplayComponentComponent implements OnInit {
  users:any;
  constructor(private http:HttpClient,private service:RegistrationserviceService) { }
  public delteUser(id:number){
    let resp= this.service.deleteUser(id);
    resp.subscribe((data)=>this.users=data);
  }

  ngOnInit(): void {

    let response= this.http.get("http://localhost:8080/User");
    response.subscribe((data)=>this.users=data);
  }
  orderProperty:string="id";
  val=true;
  toggleSort(order:string){
  if(this.val==true){
    this.val=false;
  }else
    this.val=true;
  this.orderProperty=order;
}
  
}


