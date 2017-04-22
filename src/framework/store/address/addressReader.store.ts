import { Address } from './../../domain/address.domain';
import { Reader, Updater } from './../reader.interface';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';

// tslint:disable-next-line:no-empty-interface
export interface AddressReader extends Reader<number, Address> {

}
// tslint:disable-next-line:no-empty-interface
export interface AddressUpdater extends Updater<Address, boolean> {

}

@Injectable()
export class AddressStore implements AddressReader, AddressUpdater {
  Put(TDomain: Address): Observable<boolean> {
    throw new Error('Method not implemented.');
  }

  Get(id?: number): Observable<Address> {
    //  return this.http.get(`/address/{id}`).map(res => res.json());
    return Observable.of({
      id: id,
      line1: '2160 Meade St.',
      line2: '',
      line3: '',
      city: 'Denver',
      state: 'CO',
      zip: '80211'
    }).map(res => {
      const address = new Address();
      address.Id = res.id;
      address.Line1 = res.line1;
      address.Line2 = res.line2;
      address.Line3 = res.line3;
      address.City = res.city;
      address.State = res.state;
      address.Zip = res.zip;
      return address;
    });
  }

  /**
   *
   */
  constructor(private http: Http) {

  }
}
