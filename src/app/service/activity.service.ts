import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Activity } from '../Activity';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':'application/json',
  }),
};

@Injectable({
  providedIn:'root'
})

export class ActivityService {
  private apiUrl = 'http://localhost:2020/activities'

  constructor (private http: HttpClient){ }

  getActivities(): Observable<Activity[]>{
    return this.http.get<Activity[]>(this.apiUrl);
  }


}



