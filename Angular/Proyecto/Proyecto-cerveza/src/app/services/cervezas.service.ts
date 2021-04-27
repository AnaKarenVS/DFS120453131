import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Global } from './global';

@Injectable({
  providedIn: 'root'
})
export class CervezaService {

  public url : string;

  constructor(private http: HttpClient) { 
     this.url = Global.url;
  }
 

  getCervezas(): Observable<any>{
    return this.http.get(this.url + "/cervezas/lista");
  }

  addCervezas(data:any){
    return this.http.post(this.url + "/agregar/cerveza", data);
  }
}
