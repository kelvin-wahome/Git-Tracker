import { Injectable } from '@angular/core';

@Injectable()
  export class InfoService{
    user:User;
    repos=[]
  constructor(private http:HttpClient) {
    this.user=new User (0s,"",0, 0, 0);

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
         this.user.picture =response.avatar_url;
         this.user.followers=response.followers;
         this.user.following=response.following;
         this.user.repositories=response.public_repos;
         this.user.creationDate=response.created_at;
         resolve();
       },error=>{
         reject(error);
       })

   })
   return promise;
   }
 }
