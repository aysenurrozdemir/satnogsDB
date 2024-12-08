import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {SatellitesDto} from "./satellites-dto";

@Injectable({
  providedIn: 'root'
})
export class SatellitesService {
  constructor(private http: HttpClient) {
  }

  getAllSatellitesJson(): Observable<SatellitesDto> {
    return this.http.get<any>('assets/satnogs-assets/data/allSatellites.json');
  }

}

