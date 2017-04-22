import { AddressStore } from '../../../store/address/addressReader.store';
import { AddressSummaryItemView } from '../../../transfer/view/address-summary/address-summary-item.view';
import { ViewCreator } from '../../../controller/view-creator.interface';
import { Observable } from 'rxjs/Rx';
import { Injectable } from '@angular/core';

@Injectable()
export class AddressSummaryItemViewCreator implements ViewCreator<AddressSummaryItemView, number> {
  /**
   *
   */
  constructor(private addressReader: AddressStore) {

  }
  CreateView(id: number): Observable<AddressSummaryItemView> {
    return this.addressReader.Get(id)
      .map(address => {
        return new AddressSummaryItemView(
          address.Id,
          address.Line1,
          address.Line2,
          address.Line3,
          address.City,
          address.State,
          address.Zip);
      });
  }

}
