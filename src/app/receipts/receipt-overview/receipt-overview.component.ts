import { Component, OnInit } from '@angular/core';
import { Receipt } from 'src/app/model/receipt';
import { Observable } from 'rxjs';
import { ReceiptService } from '../service/receipt.service';
import { Page } from 'src/app/common/service/paging';
import { getLocaleMonthNames, FormStyle, TranslationWidth } from '@angular/common';

@Component({
  selector: 'app-receipt-overview',
  templateUrl: './receipt-overview.component.html',
  styleUrls: ['./receipt-overview.component.css']
})
export class ReceiptOverviewComponent implements OnInit {
  receipts: Observable<Page<Receipt>>;
  months = getLocaleMonthNames("en-US", FormStyle.Standalone, TranslationWidth.Wide);
  
  constructor(private receiptService: ReceiptService) { }

  ngOnInit() {
    this.receipts = this.receiptService.listReceipts();
  }

}
