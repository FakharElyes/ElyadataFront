import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  readonly baseUrl ="http://127.0.0.1:8000/";

  headers = new HttpHeaders();

  constructor(private httpClient: HttpClient) {
    this.headers.append('content-type', 'application/json');
    this.headers.append('accept', 'application/json'); 
   }

  addBlog(body){
    return this.httpClient.post(this.baseUrl, body);
  }

  getAllBlogs() { 
    return this.httpClient.get(this.baseUrl);
  }

  getBlog(id) { 
    return this.httpClient.get(this.baseUrl  + id);
  }

}
