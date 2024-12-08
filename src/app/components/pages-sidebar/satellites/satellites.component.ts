import {Component, OnInit} from '@angular/core';
import {saveAs} from 'file-saver';
import * as XLSX from 'xlsx';
import {Column, SatellitesDto} from "./satellites-dto";
import {SatellitesService} from "./satellites.service";
import {DataSharingService} from "../../../core/services/data-sharing.service";

@Component({
  selector: 'app-satellites',
  templateUrl: './satellites.component.html',
  styleUrls: ['./satellites.component.css'],
  providers: []
})

export class SatellitesComponent implements OnInit {

  satellitesData: SatellitesDto[];
  satelliteData: SatellitesDto;

  satelliteDataShowDialog: boolean;
  selectedSatelliteData: SatellitesDto;
  selectedSatelliteDatas: SatellitesDto[];
  isSatelliteDataReadonly: boolean = false;

  cols!: Column[];

  selectedColumns: Column[] = [];
  mainTableColumns: Column[] = [];
  expansionColumns: Column[] = [];

  constructor(private satellitesService: SatellitesService,
              private dataSharingService: DataSharingService) {
  }

  ngOnInit() {

    this.satellitesService.getAllSatellitesJson().subscribe(data => {
      this.satellitesData = data.data;
    })
    this.cols = [
      {field: 'identifier', header: 'Identifier'},
      {field: 'name', header: 'Name'},
      {field: 'norad', header: 'Norad'},
      {field: 'status', header: 'Status'},
      {field: 'altNames', header: 'AltNames'},
      {field: 'transmitters', header: 'Transmitters'},
      {field: 'followedNorad', header: 'FollowedNorad'},
      {field: 'operator', header: 'Operator'},
      {field: 'launched', header: 'Launched'},
      {field: 'website', header: 'Website'},
      {field: 'dashboard', header: 'Dashboard'},
      {field: 'country', header: 'Country'}
    ];

    this.selectedColumns = this.cols.slice(0, 6);
    this.mainTableColumns = this.selectedColumns;
  }

  onColumnSelect(event: any) {
    this.selectedColumns = event.value;
    this.updateColumnSplit();
  }

  updateColumnSplit() {

    this.mainTableColumns = [];
    this.expansionColumns = [];

    this.selectedColumns.forEach(column => {
      if (column.field === 'launched' || column.field === 'website' || column.field === 'dashboard' || column.field === 'country') {
        this.expansionColumns.push(column);
      } else {
        this.mainTableColumns.push(column);
      }
    });
  }

  sendDataToSatellitePage(data) {
    this.satelliteData = data;
    this.dataSharingService.setSelectedSatelliteData(data);
  }

  showSatelliteData(data: SatellitesDto) {
    this.satelliteData = {...data};
    this.selectedSatelliteData = this.satelliteData;
    this.satelliteDataShowDialog = true;
    this.isSatelliteDataReadonly = true;
  }

  hideSatelliteShowDialog() {
    this.satelliteDataShowDialog = false;
  }

  exportExcel() {
    const worksheet: XLSX.WorkSheet = XLSX.utils.json_to_sheet(this.satellitesData);
    const workbook: XLSX.WorkBook = {Sheets: {'data': worksheet}, SheetNames: ['data']};
    const excelBuffer: any = XLSX.write(workbook, {bookType: 'xlsx', type: 'array'});
    this.saveAsExcelFile(excelBuffer, 'table.xlsx');
  }

  selectedExportExcel() {
    const selectedData = this.satellitesData.filter(data => this.selectedSatelliteDatas.includes(data));
    const worksheet: XLSX.WorkSheet = XLSX.utils.json_to_sheet(selectedData);
    const workbook: XLSX.WorkBook = {Sheets: {'data': worksheet}, SheetNames: ['data']};
    const excelBuffer: any = XLSX.write(workbook, {bookType: 'xlsx', type: 'array'});

    this.saveAsExcelFile(excelBuffer, 'selected_rows.xlsx');
  }

  selectedExportExcelForOneData() {
    const selectedData = this.satellitesData.filter(data => this.selectedSatelliteData.identifier == data.identifier);
    const worksheet: XLSX.WorkSheet = XLSX.utils.json_to_sheet(selectedData);
    const workbook: XLSX.WorkBook = {Sheets: {'data': worksheet}, SheetNames: ['data']};
    const excelBuffer: any = XLSX.write(workbook, {bookType: 'xlsx', type: 'array'});

    this.saveAsExcelFile(excelBuffer, 'selected_rows.xlsx');
  }


  saveAsExcelFile(buffer: any, fileName: string): void {
    const data: Blob = new Blob([buffer], {type: 'application/octet-stream'});
    saveAs(data, fileName);
  }

}
