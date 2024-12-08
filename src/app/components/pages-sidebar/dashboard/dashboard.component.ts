import {Component, OnInit} from '@angular/core';
import {ContributorCardDto, DashboardCardDto} from "./dashboard-dto";
import {DashboardServise} from "./dashboard.servise";
import {DataSharingService} from "../../../core/services/data-sharing.service";
import {Router} from "@angular/router";

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css'],
    providers: []
})
export class DashboardComponent implements OnInit {
    datas: DashboardCardDto[] = [];
    datasContributor: ContributorCardDto[] = [];

    constructor(private dataSharingService: DataSharingService, private dashboardService: DashboardServise,
                private router: Router) {
    }

    ngOnInit() {
        this.dashboardService.getNewSatellitesSmall().then((data) => (this.datas = data));
        this.dashboardService.getContributerDatasSmall().then((contributors: ContributorCardDto[]) => {
            this.datasContributor = contributors;
        });
    }

    routeSatellite(data): void {
        this.dataSharingService.setDashboardSelectedSatelliteData(data);
        this.router.navigate(['/satellite', data?.satelliteId]);
    }

}
