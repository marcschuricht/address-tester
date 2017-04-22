import { Observable } from 'rxjs/Rx';
import { AddressSummaryItemView } from './address-summary-item.view';

export class AddressSummaryView {
  /**
   *
   */
  addressSummaryItems: Observable<Array<AddressSummaryItemView>>;
  constructor() {
    this.addressSummaryItems = new Observable<Array<AddressSummaryItemView>>();
  }



}
