import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RegistrationserviceService } from '../registrationservice.service';
import { User } from '../User';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  user: User=new User("","",new Date(),new Date(),"","");
  uid:string | null;
  id:number=0;
  user2:any;
  temp:any;
  message:any;
  
  constructor(private http:HttpClient,private service:RegistrationserviceService,private activeRoute:ActivatedRoute){
    this.uid=activeRoute.snapshot.paramMap.get("id");
    if(this.uid!=null)
    this.id=parseInt(this.uid);
console.log(this.id);
let response = this.http.get("http://localhost:8080/User/id/"+this.uid);
response.subscribe((data)=>this.user2=data);

    
  }

  ngOnInit(): void {
    
  }

  public updateDetails(){
    let resp=this.service.updateUser(this.id,this.user2);
resp.subscribe((data)=>this.message=data);
  }
}