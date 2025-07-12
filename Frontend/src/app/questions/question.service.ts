import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  constructor( private httpClient:HttpClient) {}
   
  submitQuestion(body:any):Observable<any>{
    return this.httpClient.post("",{body});
  }

}
