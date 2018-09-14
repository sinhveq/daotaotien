import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { GiaoVien } from './../model/giaovien' ;
import { environment } from './../../environments/environment';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})

export class GiaoVienService {
  
  constructor(
    private http: HttpClient,
  ) { }
  getDataGiaoVien(): Observable<GiaoVien[]> {
    console.log('kskfk     ',environment.Url);
   return  this.http.get<GiaoVien[]>("api/GiaoViens");
    
  }
  addDataGV(hero: GiaoVien) {
  
    return this.http.post<GiaoVien>(environment.Url, hero , environment.httpOptions);
  }

  updateHero (hero: GiaoVien): Observable<GiaoVien> {
    return this.http.put<GiaoVien>(environment.Url, hero, environment.httpOptions)
  }

  delete(id: number) {
    let url = environment.Url + "/" + id; // DELETE
    return this.http.delete( url , environment.httpOptions);
}
}

const data = [
  { id: 11,name: 'Nguyễn Thiên Sinh' },
  { id: 12,name: 'Nguyễn Công Chức' },
];