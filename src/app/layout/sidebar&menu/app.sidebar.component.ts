import {Component, ElementRef} from '@angular/core';
import {LayoutService} from "../app.layout.service";

@Component({
    selector: 'app-sidebar',
    providers: [],
    templateUrl: './app.sidebar.component.html',
})
export class AppSidebarComponent {
    constructor(public layoutService: LayoutService, public el: ElementRef) {
    }
}

