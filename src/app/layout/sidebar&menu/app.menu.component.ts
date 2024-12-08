import {Component, OnInit} from '@angular/core';
import {SatellitesDto} from "../../components/pages-sidebar/satellites/satellites-dto";
import {SatellitesService} from "../../components/pages-sidebar/satellites/satellites.service";
import {Router} from "@angular/router";
import {DataSharingService} from "../../core/services/data-sharing.service";

@Component({
    selector: 'app-menu',
    templateUrl: './app.menu.component.html',
    providers: []
})
export class AppMenuComponent implements OnInit {

    model: any[] = [];
    modelHide: any[] = [];
    showList: boolean = false;

    searchTerm: string = '';
    filteredData: any[] = [];
    satellitesData: SatellitesDto[];

    constructor(public satellitesService: SatellitesService,
                public dataSharingService: DataSharingService, private router: Router) {
    }

    ngOnInit() {
        this.model = [

            {
                items: [
                    {
                        label: 'HOME', icon: 'pi pi-home', routerLink: ['']
                    },
                    {
                        label: 'ABOUT', icon: 'pi pi-info-circle', routerLink: ['/about']
                    },
                    {
                        label: 'ALL SATELLITES', icon: 'bi bi-rocket-takeoff', routerLink: ['/satellites']
                    },
                    {
                        label: 'ALL TRANSMITTERS', icon: 'pi pi-globe', routerLink: ['/transmitters']
                    },
                    {
                        label: 'STATISTICS', icon: 'pi pi-calculator', routerLink: ['/stats']
                    },
                ]
            }
        ];
        this.modelHide = [

            {
                items: [
                    {
                        label: 'SatNOGS Links', icon: 'pi pi-link',
                    },
                    {
                        label: 'Ground Station Control',
                        icon: 'pi pi-external-link',
                        url: 'https://network.satnogs.org/'
                    },
                    {
                        label: 'Wiki', icon: 'pi pi-external-link', url: 'https://wiki.satnogs.org/Main_Page'
                    },
                    {
                        label: 'Forums', icon: 'pi pi-external-link', url: 'https://community.libre.space/'
                    },
                ]
            }
        ];
    }

    search(): void {
        this.satellitesService.getAllSatellitesJson().subscribe(data => {
            this.satellitesData = data.data;
        })

        this.filteredData = this.satellitesData.filter((satellite: any) => {
            return satellite.name.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
                satellite.identifier.includes(this.searchTerm);
        });
        if (this.filteredData.length > 0) {
            this.dataSharingService.setFilteredSatelliteData(this.filteredData);
            // Navigate to the details page of the first satellite in the filtered results
            this.router.navigate(['/satellite', this.filteredData[0].identifier]);
        }
        this.searchTerm = '';
    }

    toggleSearchBar() {
        this.showList = !this.showList;
    }
}
