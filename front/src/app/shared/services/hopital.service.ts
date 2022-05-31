import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Hopital } from '../models/hopital';

@Injectable({
  providedIn: 'root'
})
export class HopitalService {
  private getHopitals= "http://localhost:4000/api/hopital";
  private addHopitalUrl = "http://localhost:4000/api/post-hopital";
  private deleteHopitalById = "http://localhost:4000/api/deletehopital/";
  private getHopitalById = "http://localhost:4000/api/gethopital/";
  private updateHopitalUrl = "http://localhost:4000/api/updatehopital/";


  constructor( private http: HttpClient) { }
  getAllHopital() {
    return this.http.get<any>(this.getHopitals);
  }
  addHopital(hopital:Hopital) {
    return this.http.post<any>(this.addHopitalUrl,hopital);
  }

  deleteHopital(id: String) {
    return this.http.delete<any>(this.deleteHopitalById  + id);
  }
  getOneHopital(id: String) {
    return this.http.get<any>(this.getHopitalById+ id);
  }
  updateHopital(hopital:Hopital ,id:any){
    return this.http.put<any>(this.updateHopitalUrl +id, hopital );
  }

}
