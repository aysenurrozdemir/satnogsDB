import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {TransmittersDto} from "./transmitters-dto";

@Injectable({
  providedIn: 'root'
})
export class TransmittersService {

  constructor(private http: HttpClient) {
  }

  getAllSatellitesJson(): Observable<TransmittersDto> {
    return this.http.get<any>('assets/satnogs-assets/data/allSatellites.json');
  }

}

