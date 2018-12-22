import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReceiptComponent } from './receipt/receipt.component';
import { ReceiptService } from './service/receipt.service';
import { ReceiptListComponent } from './receipt-list/receipt-list.component';
import { ReceiptOverviewComponent } from './receipt-overview/receipt-overview.component';
import {RouterModule} from "@angular/router"

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([])
  ],
  declarations: [ReceiptComponent, ReceiptListComponent, ReceiptOverviewComponent],
  providers: [ReceiptService],
  exports: [ReceiptOverviewComponent]
})
export class ReceiptsModule { }