import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Receipt } from '../../model/receipt';
import { PageOffset, Page } from '../../common/service/paging';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { unmarshalPage, PageDto } from '../../common/feathers/http';
import { ReceiptDto, unmarshalReceipt } from './dto';

@Injectable({ providedIn: 'root' })
export class ReceiptService {
  private receiptsApiEndpoint;
  constructor(private httpClient: HttpClient) {
    this.receiptsApiEndpoint = "http://100.115.92.194:3030/receipts";
   }

  listReceipts(page?: PageOffset): Observable<Page<Receipt>> {
    return this.httpClient.get<PageDto<ReceiptDto>>(this.receiptsApiEndpoint).pipe(
      map(unmarshalPage),
      map(page => page.map(unmarshalReceipt))
    );
  }
}