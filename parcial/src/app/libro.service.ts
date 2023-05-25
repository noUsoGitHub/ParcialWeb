import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { libro } from './libro';

@Injectable({
  providedIn: 'root'
})
export class LibroService {
  backendAPI = "Hola"
  constructor(private http: HttpClient){}
  getLibros():Observable<libro[]>{
    return this.http.get<libro[]>(`${this.backendAPI}/listaLibros`)
  }
  createEquipo(libro:libro):Observable<libro>{
    return this.http.post(`${this.backendAPI}/anadirLibro/`,libro)
    .pipe(map(response => response as libro));
  }
}
