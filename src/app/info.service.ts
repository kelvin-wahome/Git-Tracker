import { Injectable } from '@angular/core';
import {User} from './user';
import {HttpClient} from '@angular/common/http';
import {environment} from './../environments/environment'
import {Repository} from './repository';

@Injectable()
  export class InfoService{
    user:User;
    repos=[]
    repositories=[];
  constructor(private http:HttpClient) {
    this.user=new User (0,"",0, 0, 0);

  }
  infoRequest(username:string){
    if(username!=""){
     interface ApiResponse{
       name:string;
       followers:number;
       following:number;
       public_repos:number;

     }
   let promise = new Promise((resolve,reject)=>{
       this.http.get<ApiResponse>(environment.apiUrla+username+environment.apiUrlb).toPromise().then(response=>{
         this.user.id++;
         this.user.name =response.name;
         this.user.followers=response.followers;
         this.user.following=response.following;
         this.user.repositories=response.public_repos;
         resolve();
       },error=>{
         reject(error);
       })

   })
   return promise;
   }
 }
 repoRequest(username:string){
     interface ApiResponse2{
      name:string;
      language:string;
      repositories:number
    }
    let promise = new Promise((resolve,reject)=>{
      this.http.get<ApiResponse2>(environment.apiUrl2a+username+environment.apiUrl2b).toPromise().then(response=>{
        for(let i=0;i<response["length"];i++){
          let newRepo= new Repository(0,"","");
          newRepo.repoId = i+1;
          newRepo.repoName = response[i].name;
          newRepo.language = response[i].language;
          this.repos.push(newRepo);
        }
        resolve();
      },error=>{
        reject(error);
      })
    })
    return promise;
   }



repoNameRequest(reponame:string){
     interface ApiResponse3{
      name:string;
      language:string;
      forks:number;
      items;
    }
    let promise = new Promise((resolve,reject)=>{
      this.http.get<ApiResponse3>(environment.apiUrl3a+reponame+environment.apiUrl3b).toPromise().then(response=>{
        for(let i=0;i<response.items["length"];i++){
          let newRepo= new Repository(0,"","");
          newRepo.repoId = i+1;
          newRepo.repoName = response.items[i].name;
          newRepo.language = response.items[i].language;
          this.repositories.push(newRepo);
        }
        resolve();
      },error=>{
        reject(error);
      })
    })
    return promise;
   }
 }
