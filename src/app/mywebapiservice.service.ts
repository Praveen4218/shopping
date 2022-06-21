import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MywebapiserviceService {

  constructor(public ob:HttpClient) { }


  DisplayStudents():Observable<any>
{
return this.ob.get<any>("https://localhost:44333/api/mystudent")
}

AddNewStudents(data:any):Observable<any>
{
  return this.ob.post("https://localhost:44333/api/mystudent",data)
}


}
