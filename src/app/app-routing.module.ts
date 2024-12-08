import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AppLayoutComponent} from "./layout/app.layout.component";
import {LoginComponent} from "./components/pages-sidebar/login/login.component";
import {AccessComponent} from "./components/auth/access/access.component";
import {ErrorComponent} from "./components/auth/error/error.component";
import {LandingComponent} from "./components/landing/landing.component";
import {NotfoundComponent} from "./components/auth/notfound/notfound.component";
import {DashboardComponent} from "./components/pages-sidebar/dashboard/dashboard.component";
import {AboutComponent} from "./components/pages-sidebar/about/about.component";
import {SatellitesComponent} from "./components/pages-sidebar/satellites/satellites.component";
import {StatisticsComponent} from "./components/pages-sidebar/statistics/statistics.component";
import {TransmittersComponent} from "./components/pages-sidebar/transmitters/transmitters.component";
import {SatellitePageComponent} from "./components/pages-sidebar/satellites/satellite-page/satellite-page.component";
import {
  SatelliteTransmittersComponent
} from "./components/pages-sidebar/satellites/satellite-transmitters-page/satellite-transmitters.component";
import {
  SatelliteDataPageComponent
} from "./components/pages-sidebar/satellites/satellite-data-page/satellite-data-page.component";
import {SatelliteMapPageComponent} from "./components/pages-sidebar/satellites/map-page/satellite-map-page.component";
import {
  TransmittersSpectrumComponent
} from "./components/pages-sidebar/transmitters/transmitters-spectrum/transmitters-spectrum.component";
import {
  StatisticsSatelliteComponent
} from "./components/pages-sidebar/statistics/statistics-satellite/statistics-satellite.component";
import {
  StatisticsGroundStationsComponent
} from "./components/pages-sidebar/statistics/statistics-ground-stations/statistics-ground-stations.component";


// { path: 'login', component: LoginComponent, canActivate: [authGuard]},

const routes: Routes = [
  {
    path: '', component: AppLayoutComponent,
    children: [
      {path: '', component: DashboardComponent},
      {path: 'about', component: AboutComponent},
      {path: 'satellites', component: SatellitesComponent},
      {path: 'satellite/:identifier', component: SatellitePageComponent},
      {path: 'satellite/:identifier/mapContent', component: SatelliteMapPageComponent},
      {path: 'satellite/:identifier/transmitters', component: SatelliteTransmittersComponent},
      {path: 'satellite/:identifier/data', component: SatelliteDataPageComponent},
      {path: 'transmitters', component: TransmittersComponent},
      {path: 'transmitters/spectrum', component: TransmittersSpectrumComponent},
      {path: 'stats', component: StatisticsComponent},
      {path: 'stats/user-leaderboard', component: StatisticsGroundStationsComponent},
      {path: 'stats/sat-leaderboard', component: StatisticsSatelliteComponent},
    ]
  },
  {path: 'login', component: LoginComponent},
  {path: 'access', component: AccessComponent},
  {path: 'error', component: ErrorComponent},
  {path: 'landing', component: LandingComponent},
  {path: 'notFound', component: NotfoundComponent},

  // { path: '**', redirectTo: '/notfound'},
  {path: '**', redirectTo: 'login'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
