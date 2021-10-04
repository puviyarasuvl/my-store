import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-admin',
    templateUrl: './admin.component.html',
    styleUrls: ['./admin.component.css'],
})
export class AdminComponent implements OnInit {
    public isAddCollapsed = true;
    public isDeleteCollapsed = true;

    constructor() {}

    ngOnInit(): void {}

    toggleCollapseAdd(): void {
        if (this.isAddCollapsed) {
            this.isAddCollapsed = false;
            if (!this.isDeleteCollapsed) {
                this.isDeleteCollapsed = true;
            }
        } else {
            this.isAddCollapsed = true;
            if (!this.isDeleteCollapsed) {
                this.isDeleteCollapsed = true;
            }
        }
    }

    toggleCollapseDelete(): void {
        if (this.isDeleteCollapsed) {
            this.isDeleteCollapsed = false;
            if (!this.isAddCollapsed) {
                this.isAddCollapsed = true;
            }
        } else {
            this.isDeleteCollapsed = true;
            if (!this.isAddCollapsed) {
                this.isAddCollapsed = true;
            }
        }
    }
}
