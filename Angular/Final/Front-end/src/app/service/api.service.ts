import { Injectable } from '@angular/core';
import {Observable, throwError} from 'rxjs'; 
import {catchError, map} from 'rxjs/operators'; 

import {HttpClient, HttpHeaders, HttpErrorResponse} from '@angular/common/http'
import { Usuario } from 'src/model/usuario.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  baseUri: string  = 'http://localhost:4000/api'; 
  headers = new HttpHeaders().set('Content-Type', 'aplication/json'); 

  constructor( private http : HttpClient) {
   }

   //create
   createUsuario(data :any): Observable<any> {
     console.log(data);
     let url = `${this.baseUri}/create`; 
     return this.http.post(url, data)
     .pipe(
       catchError(this.errorMsg)
     )
   }

   getUsuarios(){
     return this.http.get(`${this.baseUri}`); 
   }

   getUsuario(id : any): Observable<any> { 
    let url = `${this.baseUri}/read/${id}`; 
    return this.http.get(url, {headers: this.headers}).pipe(
      map((res : any) =>{
        return res || {}
      }), 
      catchError(this.errorMsg)
    )

   }

   updateUsuario(id: any, data: any): Observable<any> {
    let url = `${this.baseUri}/update/${id}`;
    console.log('En el service');
    console.log(data);
    return this.http.put<Usuario>(url, data).pipe(
      
      catchError(this.errorMsg)
    )
  }


    deleteUsuario(id: any): Observable<any>{
      let url = `${this.baseUri}/delete/${id}`; 
      return this.http.delete(url, {headers: this.headers}).pipe(
        catchError(this.errorMsg)
      )
    }


   errorMsg(error : HttpErrorResponse){
     let errorMessage = ''; 
    if(error.error instanceof ErrorEvent){
      errorMessage = error.error.message; 
    }else{
      errorMessage = `Error Code: ${error.status}\n Message : $(error.message)`; 

    }  
      console.log(errorMessage); 
      return throwError(errorMessage); 
  }


}
