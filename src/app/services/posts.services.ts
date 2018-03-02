import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class PostsService{
    constructor(private http:Http){
        console.log('PostsService Initialized...');
    }
    getPosts(){
        return this.http.get('https://jsonplaceholder.typicode.com/posts').map(res => res.json());
    }
    getPostsIBM(){
        return this.http.get('https://jsonplaceholder.typicode.com/posts/1/comments').map(res => res.json());
    }
    getPosts2(){
        return this.http.get('https://cc830d2c-510e-489b-99c4-c4ac7cf0680b-bluemix.cloudant.com/person/1').map(res => res.json());
    }
}