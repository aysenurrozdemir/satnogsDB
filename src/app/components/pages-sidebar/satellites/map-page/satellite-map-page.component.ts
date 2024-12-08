import {Component, OnInit} from '@angular/core';
import {ConfirmationService, MessageService} from "primeng/api";
import {FormBuilder} from '@angular/forms';
import {SatellitesService} from "../satellites.service";
import {DataSharingService} from "../../../../core/services/data-sharing.service";

@Component({
  selector: 'app-satellite-map-page',
  templateUrl: './satellite-map-page.component.html',
  styleUrls: ['./satellite-map-page.component.css'],
  providers: []
})
export class SatelliteMapPageComponent implements OnInit {
  satelliteData: any;
  selectedButton = 1;

  constructor(private dataSharingService: DataSharingService) {
  }

  ngOnInit() {
    this.dataSharingService.selectedSatelliteData$.subscribe(data => {
      if (data) {
        this.satelliteData = data;
        // console.log('Satellite Data:', this.satelliteData.name);
      }
    });
  }
}
