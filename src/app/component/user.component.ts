import { Component } from '@angular/core';
import {PostsService} from '../services/posts.services';

@Component({
  selector: 'user',
  templateUrl:'./user.component.html',
  providers:[PostsService]
})
export class UserComponent  {
  name:string;
  email:string;
  address:address;
  hobbies:string[];
  showhobbies:boolean;
  posts:Post[];
  posts1:Post1[];
  posts2:Post2[];
  constructor(private postsService:PostsService){
    this.name = 'Mohammad Kafee Uddin';
    this.email = 'kafee651@gmail.com';
    this.address ={
      street:'Mayur Vihar phase 1 ext',
      state:'New Delhi'
    };
    this.hobbies=["Reading","Coding","Cooking"];
    this.showhobbies=false;
    this.postsService.getPosts().subscribe(posts =>{
      this.posts=posts;
    })
    this.postsService.getPostsIBM().subscribe(post =>{
      this.posts1=post;
    })
    this.postsService.getPosts2().subscribe(post =>{
      this.posts2=post;
    })
  }
  showHobbies(){
    if(this.showhobbies==true)
      this.showhobbies = false;
    else
      this.showhobbies = true;
  }
  addhobby(hobby:any){
    this.hobbies.push(hobby);
  }
  deletehobby(i:any){
    this.hobbies.splice(i,1);
  }
}
interface address{
  street:string;
  state:string;
}
interface Post{
  id:number;
  title:string;
  body:string;
}
interface Post1{
  postId:number;
  id:number;
  name:string;
  email:string;
  body:string;
}
interface Post2{
  _id: string;
  _rev: string;
  Name: string;
  emailid: string;
}