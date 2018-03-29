import { Injectable, group } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()

export class GroupsService {
  readonly ROOT_URL_POST = "http://vps9615.hyperhost.name:443/api/login/index";
  readonly ROOT_URL_POST_GROUPS = "http://vps9615.hyperhost.name:443/api/";

  newPost: Observable<any>;

  constructor(private http : HttpClient) { 
  }

              createPost(){
                const data: any = {
                  'username': 'admin',
                  'password': 'dtapi_admin'
                }
                const data1 = JSON.stringify(data);

                const httpOptions = {
                  headers: new HttpHeaders({
                    'Content-Type':  'application/json',
                  })
                };
                this.newPost = this.http.post(this.ROOT_URL_POST, data1);
              }

  _getGroup(){
    return this.http.get(this.ROOT_URL_POST_GROUPS + "group/getRecords/");
  }
  
  _getFaculties(){
    return this.http.get(this.ROOT_URL_POST_GROUPS + "faculty/getRecords/");
  }

  _getSpecialties(){
    return this.http.get(this.ROOT_URL_POST_GROUPS + "speciality/getRecords/");
  }

 

}
