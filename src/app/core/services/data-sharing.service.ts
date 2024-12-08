import {Injectable} from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root',
})
export class DataSharingService {

  private selectedSatelliteDataSubject = new BehaviorSubject<any>(null);
  selectedSatelliteData$ = this.selectedSatelliteDataSubject.asObservable();
  private filteredSatelliteDataSubject = new BehaviorSubject<any>(null);
  filteredSatelliteData$ = this.filteredSatelliteDataSubject.asObservable();
  private dashboardSelectedSatelliteDataSubject = new BehaviorSubject<any>(null);
  dashboardSelectedSatelliteData$ = this.dashboardSelectedSatelliteDataSubject.asObservable();

  constructor() {
  }

  setSelectedSatelliteData(data: any) {
    this.selectedSatelliteDataSubject.next(data);
  }

  setFilteredSatelliteData(data: any) {
    this.filteredSatelliteDataSubject.next(data);
  }

  setDashboardSelectedSatelliteData(data: any) {
    this.dashboardSelectedSatelliteDataSubject.next(data);
  }
}
