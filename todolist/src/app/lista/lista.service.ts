import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { Lista } from './lista';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ListaService {

  constructor(private http:HttpClient) { }

  
  obtenerLista():Observable<Lista[]>{
    return this.http.get<Lista[]>(environment.url);
  }

  crear(lista:Lista):Observable<Lista>{
    return this.http.post<Lista>(environment.url, lista);
  }

  obtener(id:number):Observable<Lista>{
    return this.http.get<Lista>(environment.url + '/' + id);
  }

  update(lista:Lista):Observable<Lista>{
    return this.http.put<Lista>(environment.url, lista)
  }

  eliminar(id:number):Observable<Lista>{
    return this.http.delete<Lista>(environment.url + '/' + id);
  }
}
