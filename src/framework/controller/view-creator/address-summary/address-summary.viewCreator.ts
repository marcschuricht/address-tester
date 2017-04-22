import { Observable } from 'rxjs/Rx';
import { AddressSummaryItemViewCreator } from './address-summary-item-view.viewCreator';
import { AddressSummaryItemView } from './../../../transfer/view/address-summary/address-summary-item.view';
import { Injectable } from '@angular/core';
import { AddressSummaryView } from './../../../transfer/view/address-summary/address-summary.view';
import { ViewCreator } from '../../view-creator.interface';


@Injectable()
export class AddressSummaryViewCreator implements ViewCreator<AddressSummaryView, Array<number>> {
  /**
   *
   */
  constructor(private itemViewCreator: AddressSummaryItemViewCreator) {
  }

  CreateView(param: number[]): Observable<AddressSummaryView> {
    const itemViews = Observable
      .from(param)
      .flatMap(x => { return this.itemViewCreator.CreateView(x); })
      .toArray();

    const result = new AddressSummaryView();

    result.addressSummaryItems = itemViews;
    itemViews.subscribe(x => console.log('view ->', x));
    return Observable.of(result);

  }
}
