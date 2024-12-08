import {Component, OnInit} from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {SatellitesService} from "../satellites.service";
import {DataSharingService} from "../../../../core/services/data-sharing.service";

@Component({
  selector: 'app-satellite-page-page',
  templateUrl: './satellite-page.component.html',
  styleUrls: ['./satellite-page.component.css'],
  providers: []
})
export class SatellitePageComponent implements OnInit {
  satelliteData: any;
  satellitesData: any;
  selectedButton = 0;

  constructor(private fb: FormBuilder, private satellitesService: SatellitesService, private dataSharingService: DataSharingService) {
  }

  ngOnInit() {
    this.dataSharingService.selectedSatelliteData$.subscribe(data => {
      if (data) {
        this.satelliteData = data;
        // console.log('Satellite Data:', this.satelliteData?.name);
      }
    });
    this.dataSharingService.filteredSatelliteData$.subscribe(data => {
      if (data) {
        this.satelliteData = data[0];
        console.log('Satellite Data:', this.satelliteData?.name);
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
