import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientJsonpModule, HttpClientModule} from '@angular/common/http';
import {InputTextModule} from 'primeng/inputtext';
import {InputTextareaModule} from 'primeng/inputtextarea';
import {InputNumberModule} from 'primeng/inputnumber';
import {ButtonModule} from 'primeng/button';
import {TableModule} from 'primeng/table';
import {DialogModule} from 'primeng/dialog';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import {DropdownModule} from 'primeng/dropdown';
import {RadioButtonModule} from 'primeng/radiobutton';
import {RatingModule} from 'primeng/rating';
import {ToolbarModule} from 'primeng/toolbar';
import {PanelModule} from "primeng/panel";
import {FileUploadModule} from "primeng/fileupload";
import {OrderListModule} from "primeng/orderlist";
import {DividerModule} from "primeng/divider";
import {AppRoutingModule} from "./app-routing.module";
import {CardModule} from 'primeng/card';
import {CheckboxModule} from "primeng/checkbox";
import {CalendarModule} from "primeng/calendar";
import {MultiSelectModule} from "primeng/multiselect";
import {SplitterModule} from "primeng/splitter";
import {GMapModule} from "primeng/gmap";
import {CommonModule, NgClass} from "@angular/common";
import {SidebarModule} from "primeng/sidebar";
import {BadgeModule} from "primeng/badge";
import {InputSwitchModule} from "primeng/inputswitch";
import {RippleModule} from "primeng/ripple";
import {RouterLink, RouterLinkActive, RouterModule} from "@angular/router";


import {MenuService} from "./layout/sidebar&menu/app.menu.service";
import {ConfirmationService, MessageService} from 'primeng/api';
import {LayoutService} from "./layout/app.layout.service";

import {AppComponent} from "./app.component";
import {AccessComponent} from "./components/auth/access/access.component";
import {ErrorComponent} from "./components/auth/error/error.component";
import {LoginComponent} from "./components/pages-sidebar/login/login.component";
import {DashboardComponent} from "./components/pages-sidebar/dashboard/dashboard.component";
import {LandingComponent} from "./components/landing/landing.component";
import {NotfoundComponent} from "./components/auth/notfound/notfound.component";
import {AppLayoutComponent} from "./layout/app.layout.component";
import {AppFooterComponent} from "./layout/footer/app.footer.component";
import {AppSidebarComponent} from "./layout/sidebar&menu/app.sidebar.component";
import {AppMenuComponent} from "./layout/sidebar&menu/app.menu.component";
import {AppMenuitemComponent} from "./layout/sidebar&menu/app.menuitem.component";
import {AboutComponent} from "./components/pages-sidebar/about/about.component";
import {SatellitesComponent} from "./components/pages-sidebar/satellites/satellites.component";
import {StatisticsComponent} from "./components/pages-sidebar/statistics/statistics.component";
import {TransmittersComponent} from "./components/pages-sidebar/transmitters/transmitters.component";
import {AppTopBarComponent} from "./layout/topbar/app.topbar.component";
import {SatellitePageComponent} from "./components/pages-sidebar/satellites/satellite-page/satellite-page.component";
import {
    SatelliteDataPageComponent
} from "./components/pages-sidebar/satellites/satellite-data-page/satellite-data-page.component";
import {SatelliteMapPageComponent} from "./components/pages-sidebar/satellites/map-page/satellite-map-page.component";
import {
    SatelliteTransmittersComponent
} from "./components/pages-sidebar/satellites/satellite-transmitters-page/satellite-transmitters.component";
import {
    TransmittersSpectrumComponent
} from './components/pages-sidebar/transmitters/transmitters-spectrum/transmitters-spectrum.component';
import {
    StatisticsSatelliteComponent
} from './components/pages-sidebar/statistics/statistics-satellite/statistics-satellite.component';
import {
    StatisticsGroundStationsComponent
} from './components/pages-sidebar/statistics/statistics-ground-stations/statistics-ground-stations.component';


@NgModule({
    declarations: [
        AppComponent,
        AccessComponent,
        ErrorComponent,
        LoginComponent,
        DashboardComponent,
        LandingComponent,
        NotfoundComponent,
        AppLayoutComponent,
        AppTopBarComponent,
        AppFooterComponent,
        AppSidebarComponent,
        AppMenuComponent,
        AppMenuitemComponent,
        AboutComponent,
        SatellitesComponent,
        StatisticsComponent,
        TransmittersComponent,
        SatellitePageComponent,
        SatelliteDataPageComponent,
        SatelliteMapPageComponent,
        SatelliteTransmittersComponent,
        TransmittersSpectrumComponent,
        StatisticsSatelliteComponent,
        StatisticsGroundStationsComponent,

    ],
    imports: [
        AppRoutingModule,
        RouterLink,
        BrowserModule,
        BrowserAnimationsModule,
        FormsModule,
        TableModule,
        HttpClientModule,
        InputTextModule,
        DialogModule,
        ToolbarModule,
        ConfirmDialogModule,
        RatingModule,
        InputNumberModule,
        InputTextareaModule,
        RadioButtonModule,
        DropdownModule,
        ButtonModule,
        CommonModule,
        RouterModule,
        SidebarModule,
        BadgeModule,
        InputSwitchModule,
        RippleModule,
        NgClass,
        RouterLinkActive,
        ReactiveFormsModule,
        CardModule,
        CheckboxModule,
        CalendarModule,
        MultiSelectModule,
        HttpClientJsonpModule,
        SplitterModule,
        GMapModule,
        PanelModule,
        FileUploadModule,
        OrderListModule,
        DividerModule,
    ],
    providers: [
        ConfirmationService,
        LayoutService,
        MessageService, MenuService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
