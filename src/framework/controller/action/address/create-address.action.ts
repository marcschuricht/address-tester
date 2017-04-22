import { ActionResultArgs } from './../../../common/actionResultArgs';
import { Observable } from 'rxjs/Rx';
import { Address } from './../../../domain/address.domain';
import { AddressUpdater, AddressStore } from './../../../store/address/addressReader.store';
import { RawAddress } from './../../../transfer/raw/address.raw';
import { Action } from './../action.interface';
import { AddressValidator } from './../../../validator/address/address.validator';
import { Injectable } from '@angular/core';

@Injectable()
export class CreateAddressAction implements Action<RawAddress>{

  Execute(raw: RawAddress): Observable<ActionResultArgs<RawAddress>> {
    try {
      if (this.validator.Validate()) {

        //translator?? e.g. new RawAddressTranslator().ToAddress(raw) <-- would be DI'd in instead of new'd
        const address = new Address();
        address.City = raw.city;
        address.Line1 = raw.line1;
        address.Line2 = raw.line2;
        address.Line3 = raw.line3;
        address.State = raw.state;
        address.Zip = raw.zip;
        this.store.Put(address);
        return Observable.of(ActionResultArgs.Success(raw));
      } else {
        return Observable.of(ActionResultArgs.ValidationFailure(this.validator.ValidationErrors, raw));
      }
    } catch (ex) {
      return Observable.of(ActionResultArgs.Error(ex));
    }

  }

  constructor(private validator: AddressValidator, private store: AddressStore) { }
}

