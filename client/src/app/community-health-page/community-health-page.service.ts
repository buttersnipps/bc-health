import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class CommunityHealthPageService {
    constructor(private http: HttpClient) { }
  
    getName(lat: string, long: string) {

       return this.http.get("http://localhost/?lat="+lat +"&long="+long);
    }
  }