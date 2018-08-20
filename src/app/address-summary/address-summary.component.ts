import { RawAddress } from './../../framework/transfer/raw/address.raw';
import { CreateAddressAction } from './../../framework/controller/action/address/create-address.action';
import { Component, OnInit } from '@angular/core';
import { AddressSummaryViewCreator } from '../../framework/controller/view-creator/address-summary/address-summary.viewCreator';
import { AddressSummaryView } from '../../framework/transfer/view/address-summary/address-summary.view';


@Component({
  selector: 'app-address-summary',
  templateUrl: 'address-summary.template.html'
})
export class AddressSummaryComponent implements OnInit {
  view: AddressSummaryView;
  constructor(private viewCreator: AddressSummaryViewCreator, private action: CreateAddressAction) {
    viewCreator.CreateView([1, 2, 3, 4]).subscribe(res => {
      this.view = res;
    });
  }

  CreateNew() {
    const raw = new RawAddress();
    raw.city = '';
    raw.line1 = '';
    raw.line2 = '';
    raw.line3 = '';
    raw.state = '';
    raw.zip = '';

    this.action.Execute(raw).subscribe(res => {
      //TODO: Handle the error
    });
  };

  ngOnInit() { }
}
