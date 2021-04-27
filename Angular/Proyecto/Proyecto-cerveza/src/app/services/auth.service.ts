import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {Router} from '@angular/router'; 
import { Global } from './global';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
 // private URL = 'http://localhost:3000/api'
  public url : string;
  constructor(private http: HttpClient, private router : Router) { 
    this.url = Global.url;
  }

  registrarUsuario(data:any){
    return this.http.post<any>(this.url + '/usuario/nuevo', data); 
    // este http (mandalo por post) lo que hay URL (servidor/api) + ruta que cree
  }

  loginUsuario(user){
    return this.http.post<any>(this.url + '/login', user); 
    // este http (mandalo por post) lo que hay URL (servidor/api) + ruta que cree
  }
  
  loggedIn(){
   return  !!localStorage.getItem('token'); 

  }

  logout(){
    localStorage.removeItem('token'); 
    this.router.navigate(['']); 
  }

  getToken(){
    return localStorage.getItem('token');
  }

}
