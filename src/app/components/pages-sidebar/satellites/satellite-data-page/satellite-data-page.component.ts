import {Component, OnInit} from '@angular/core';
import {SatellitesService} from "../satellites.service";
import {DataSharingService} from "../../../../core/services/data-sharing.service";

@Component({
  selector: 'app-satellite-data-page',
  templateUrl: './satellite-data-page.component.html',
  styleUrls: ['./satellite-data-page.component.css'],
  providers: []
})
export class SatelliteDataPageComponent implements OnInit {
  satelliteData: any;
  satellitesData: any;
  selectedButton = 3;

  constructor(private satellitesService: SatellitesService, private dataSharingService: DataSharingService) {
  }

  ngOnInit() {
    this.dataSharingService.selectedSatelliteData$.subscribe(data => {
      if (data) {
        this.satelliteData = data;
        // console.log('Satellite Data:', this.satelliteData.name);
      }
    });
    this.dataSharingService.filteredSatelliteData$.subscribe(data => {
      if (data) {
        this.satelliteData = data[0];
        // console.log('Satellite Data:', this.satelliteData?.name);
      }
    });
    this.dataSharingService.dashboardSelectedSatelliteData$.subscribe(data => {
      if (data?.name || data?.satelliteId) {
        this.satellitesService.getAllSatellitesJson().subscribe(response => {
          this.satellitesData = response?.data;
          this.satelliteData = this.satellitesData.find(res => res?.name === data?.name || res?.satelliteId === data?.satelliteId);
          // console.log('Satellite Data:', this.satelliteData);
        })
      }
    });
  }
}
