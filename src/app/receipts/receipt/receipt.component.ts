import { Component, OnInit, Input } from '@angular/core';
import {Receipt} from "../../model/receipt";

@Component({
  selector: 'app-receipt',
  templateUrl: './receipt.component.html',
  styleUrls: ['./receipt.component.css'],
  host: {class: "card"}
})
export class ReceiptComponent implements OnInit {

  @Input()
  receipt: Receipt;

  constructor() { }

  ngOnInit() {
  }

}