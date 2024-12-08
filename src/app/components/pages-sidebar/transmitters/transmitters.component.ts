import {Component, OnInit} from '@angular/core';
import {saveAs} from 'file-saver';
import * as XLSX from 'xlsx';
import {DataSharingService} from "../../../core/services/data-sharing.service";
import {Column, TransmittersDto} from "./transmitters-dto";
import {TransmittersService} from "./transmitters.service";

@Component({
  selector: 'app-transmitters',
  templateUrl: './transmitters.component.html',
  styleUrls: ['./transmitters.component.css'],
  providers: []
})

export class TransmittersComponent implements OnInit {

  satellitesData: TransmittersDto[];
  satelliteData: TransmittersDto;

  satelliteDataShowDialog: boolean;
  selectedSatelliteData: TransmittersDto;
  selectedSatelliteDatas: TransmittersDto[];
  isSatelliteDataReadonly: boolean = false;

  cols!: Column[];

  selectedColumns: Column[] = [];
  mainTableColumns: Column[] = [];
  expansionColumns: Column[] = [];

  selectedButton = 0;

  constructor(private transmitterService: TransmittersService,
              private dataSharingService: DataSharingService) {
  }

  ngOnInit() {

    this.transmitterService.getAllSatellitesJson().subscribe(data => {
      this.satellitesData = data.data;
    })
    this.cols = [
      {field: 'identifier', header: 'Satellite'},
      {field: 'name', header: 'Type'},
      {field: 'norad', header: 'Description'},
      {field: 'status', header: 'Downlink'},
      {field: 'altNames', header: 'Uplink'},
      {field: 'transmitters', header: 'Uplink Drift'},
      {field: 'followedNorad', header: 'Inverted'},
      {field: 'operator', header: 'Mode'},
      {field: 'launched', header: 'Baud'},
      {field: 'website', header: 'Service'},
      {field: 'dashboard', header: 'Status'},
      {field: 'country', header: 'Unconfirmed'}
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

  showSatelliteData(data: TransmittersDto) {
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
