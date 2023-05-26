import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { libro } from './libro';

@Injectable({
  providedIn: 'root'
})
export class LibroService {
  backendAPI = "http://localhost:8080/libros"
  constructor(private http: HttpClient){}
  libros():Observable<libro[]>{
    return this.http.get<libro[]>(`${this.backendAPI}/lista`)
  }
  addLibro(libro:libro):Observable<libro>{
    return this.http.post(`${this.backendAPI}/anadir`,libro)
    .pipe(map(response => response as libro));
  }
}
