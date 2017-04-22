import { RawAddress } from '../framework/transfer/raw/address.raw';
import { CreateAddressAction } from '../framework/controller/action/address/create-address.action';
import { AddressValidator } from '../framework/validator/address/address.validator';
import { AddressSummaryComponent } from './address-summary/address-summary.component';
import { AddressStore } from '../framework/store/address/addressReader.store';
import { AddressSummaryViewCreator } from './../framework/controller/view-creator/address-summary/address-summary.viewCreator';
import {
  AddressSummaryItemViewCreator
} from './../framework/controller/view-creator/address-summary/address-summary-item-view.viewCreator';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    AddressSummaryComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [AddressSummaryItemViewCreator, AddressSummaryViewCreator, AddressStore, AddressValidator, CreateAddressAction, RawAddress],
  bootstrap: [AppComponent]
})
export class AppModule { }
