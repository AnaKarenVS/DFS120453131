import { Injectable } from '@angular/core';
import {Observable, throwError} from 'rxjs'; 
import {catchError, map} from 'rxjs/operators';
import {HttpClient, HttpHeaders, HttpErrorResponse} from '@angular/common/http'


@Injectable({
  providedIn: 'root'
})
export class ServicioService {

  baseUri: string  = 'http://localhost:3000'; 
  headers = new HttpHeaders().set('Content-Type', 'aplication/json'); 

  constructor(private http : HttpClient) { }

    
  getServicios(){
    return this.http.get(`${this.baseUri}/servicios/listado`); 
  }

  deleteServicio(_id:any){
    console.log(_id)
    let url = `${this.baseUri}/servicios/eliminar/${_id}`; 
      return this.http.delete(url, {headers: this.headers}).pipe(
        catchError(this.errorMsg)
      );
  }

  createServicio(data: any){
    let url = `${this.baseUri}/servicios/nuevo`;
    console.log(data);
    return this.http.post(url, data).pipe(
      catchError(this.errorMsg)
    );
  }

  getServicio(_id: any){
    let url = `${this.baseUri}/servicios/actualizar/${_id}`; 
    return this.http.get(url, {headers: this.headers}).pipe(
      catchError(this.errorMsg)
    );  
  }

  actualizarServicio(data: any, _id:any) {
    let url = `${this.baseUri}/servicios/actualizar-servicio/${_id}`;
    return this.http.put(url, data).pipe(
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