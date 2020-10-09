import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Emp } from './emp.module';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EmpService {
  url: string = environment.appUrl+"/emp/all";
  constructor(private httpClient: HttpClient) { }
  getEmployees(): Observable<Emp[]> {
    return this.httpClient.get<Emp[]>(this.url);

  }
}
