import { Injectable } from '@angular/core';
import {Observable, throwError} from 'rxjs'; 
import {catchError, map} from 'rxjs/operators';
import {HttpClient, HttpHeaders, HttpErrorResponse} from '@angular/common/http'


@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  baseUri: string  = 'http://localhost:3000'; 
  headers = new HttpHeaders().set('Content-Type', 'aplication/json'); 

  constructor(private http : HttpClient) { }

    
  getProductos(){
    return this.http.get(`${this.baseUri}/productos/lista`); 
  }

  createProducto(data: any){
    let url = `${this.baseUri}/agregar/producto`;
    console.log(data);
    return this.http.post(url, data).pipe(
      catchError(this.errorMsg)
    );
  }

  deleteProducto(_id: Object){
    let url = `${this.baseUri}/productos/eliminar/${_id}`; 
    return this.http.delete(url, {headers: this.headers}).pipe(
      catchError(this.errorMsg)
    );
  }

  getProducto(_id: any){
    let url = `${this.baseUri}/productos/actualizar/${_id}`; 
    return this.http.get(url, {headers: this.headers}).pipe(
      catchError(this.errorMsg)
    );  
  }

  actualizarProducto(data: any, _id:any) {
    let url = `${this.baseUri}/productos/actualizar-producto/${_id}`;
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