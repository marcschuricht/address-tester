import { AddressSummaryItemView } from './../../../transfer/view/address-summary/address-summary-item.view';
import { AddressSummaryViewCreator } from './address-summary.viewCreator';
import { AddressSummaryItemViewCreator } from './address-summary-item-view.viewCreator';
import { AddressStore } from './../../../store/address/addressReader.store';
import { Observable } from 'rxjs';
import { Address } from '../../../domain/address.domain';
import { Reader } from './../../../store/reader.interface';
import { TestBed } from '@angular/core/testing';


describe('AddressSummaryViewCreator', () => {
  let serviceUnderTest: AddressSummaryItemViewCreator;
  const addressId: number = -111;
  const fakeAddressReader: AddressStore = new AddressStore(null);
  beforeEach(() => {
    const stubAddress =
      Observable.of({
        Id: addressId,
        Line1: 'tester line 1',
        Line2: '',
        Line3: '',
        City: 'tester city',
        State: 'CO',
        Zip: '80202'
      } as Address);

    const spy = spyOn(fakeAddressReader, 'Get').and.returnValue(stubAddress);


  });
  it('should call Get of reader', () => {
    serviceUnderTest = new AddressSummaryItemViewCreator(fakeAddressReader);
    serviceUnderTest.CreateView(addressId).subscribe(res => {
      expect(fakeAddressReader.Get).toHaveBeenCalled();
    });
  });

  it('should map id correctly', () => {

    let result: AddressSummaryItemView;
    serviceUnderTest.CreateView(addressId).subscribe(res => {
      result = res;
      expect(result.id).toBe(addressId);
    });
  });

  it('should map line 1 correctly', () => {
    serviceUnderTest = new AddressSummaryItemViewCreator(fakeAddressReader);
    let result: AddressSummaryItemView;
    serviceUnderTest.CreateView(addressId).subscribe(res => {
      result = res;
      expect(result.line1).toBe('tester line 1');
    });
  });

  it('should map line 2 correctly', () => {
    serviceUnderTest = new AddressSummaryItemViewCreator(fakeAddressReader);
    let result: AddressSummaryItemView;
    serviceUnderTest.CreateView(addressId).subscribe(res => {
      result = res;
      expect(result.line2).toBe('');
    });
  });

  it('should map line 3 correctly', () => {
    serviceUnderTest = new AddressSummaryItemViewCreator(fakeAddressReader);
    let result: AddressSummaryItemView;
    serviceUnderTest.CreateView(addressId).subscribe(res => {
      result = res;
      expect(result.line3).toBeFalsy();
    });
  });

  it('should map city correctly', () => {
    serviceUnderTest = new AddressSummaryItemViewCreator(fakeAddressReader);
    let result: AddressSummaryItemView;
    serviceUnderTest.CreateView(addressId).subscribe(res => {
      result = res;
      expect(result.city).toBe('tester city');
    });
  });

  it('should map state correctly', () => {
    serviceUnderTest = new AddressSummaryItemViewCreator(fakeAddressReader);
    let result: AddressSummaryItemView;
    serviceUnderTest.CreateView(addressId).subscribe(res => {
      result = res;
      expect(result.state).toBe('CO');
    });
  });

  it('should map zip correctly', () => {
    serviceUnderTest = new AddressSummaryItemViewCreator(fakeAddressReader);
    let result: AddressSummaryItemView;
    serviceUnderTest.CreateView(addressId).subscribe(res => {
      result = res;
      expect(result.zipCode).toBe('80202');
    });
  });
});

