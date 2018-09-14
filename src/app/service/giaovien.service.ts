import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { GiaoVien } from './../model/giaovien' ;
import { environment } from './../../environments/environment';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})

export class GiaoVienService {
  
  constructor(
    private http: HttpClient,
  ) { }
  getDataGiaoVien(): Observable<GiaoVien[]> {
   return  this.http.get<GiaoVien[]>("api/GiaoViens");
    
  }
  addDataGV(giaoVien: GiaoVien) {
  
    return this.http.post<GiaoVien>(environment.Url, giaoVien , environment.httpOptions);
  }

  updateGV (giaoVien: GiaoVien): Observable<GiaoVien> {
    return this.http.put<GiaoVien>(environment.Url, giaoVien, environment.httpOptions)
  }

  delete(id: number) {
    let url = environment.Url + "/" + id; // DELETE
    return this.http.delete( url , environment.httpOptions);
}
}