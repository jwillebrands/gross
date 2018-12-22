import {Component, Input, OnInit} from '@angular/core';
import {Receipt} from "../../model/receipt";

@Component({
    selector: 'app-receipt-list',
    templateUrl: './receipt-list.component.html',
    styleUrls: ['./receipt-list.component.css'],
})
export class ReceiptListComponent implements OnInit {
    @Input()
    receipts: Receipt[];

    constructor() {
    }

    ngOnInit() {
    }

}