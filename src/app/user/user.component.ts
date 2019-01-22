import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from '../user';
import {InfoService} from '../info.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  providers: [InfoService],
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  userName="";
  user:User;
  show=false;
  show1=false;
  repos=[];
  showUser(){
    this.show=true;
    this.infoService.infoRequest(this.userName);
    this.user=this.infoService.user;
  }
  showRepo(){
    this.show1=true;
    this.infoService.repoRequest(this.userName);
    this.repos=this.infoService.repos;
  }


  constructor(private infoService:InfoService) { }

  ngOnInit() {
  }

}
