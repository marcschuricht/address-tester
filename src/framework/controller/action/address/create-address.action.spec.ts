import { ActionResult } from '../../../common/actionResultArgs';
import { RawAddress } from './../../../transfer/raw/address.raw';
import { AddressStore } from './../../../store/address/addressReader.store';
import { CreateAddressAction } from './create-address.action';
import { AddressValidator } from '../../../validator/address/address.validator';
describe('CreateAddressAction', () => {
  let validatorSpy: jasmine.Spy;
  const fakeValidator = new AddressValidator(null); // <--validator has it own dependencies,
                                                    // which I don't care about so I pass in null
                                                    // ...that's why its a fake


  beforeEach(() => {
     validatorSpy = spyOn(fakeValidator, 'Validate');
     // .
     // .
     // .
  });
it('should call the store when validation is true', () => {
    const action = new CreateAddressAction(fakeValidator);
    validatorSpy.and.returnValue(true); // <-- inside each test, I tell the validator what it will return
                                        // in this case "true"

    action.Execute(raw); // <-- Call the thing under test
    expect(fakeStore.Put).toHaveBeenCalled(); // <-- make my expections/assertions
  });
});
describe('CreateAddressAction', () => {
  const fakeValidator = new AddressValidator();
  const fakeStore = new AddressStore(null);
  let validatorSpy: jasmine.Spy;
  let storeSpy: jasmine.Spy;
  let raw = new RawAddress();

  beforeEach(() => {
    validatorSpy = spyOn(fakeValidator, 'Validate');
    storeSpy = spyOn(fakeStore, 'Put');
    raw = new RawAddress();
    raw.line1 = 'asdfasdf';
    raw.line2 = 'fdsa';
    raw.line3 = '';
    raw.city = 'fdsa';
    raw.state = 'fdsa';
    raw.zip = 'fdsa';
  });

  it('should call the validator', () => {
    const action = new CreateAddressAction(fakeValidator, null)
    action.Execute(null);
    expect(fakeValidator.Validate).toHaveBeenCalled();
  });

  it('should call the store when validation is true', () => {
    const action = new CreateAddressAction(fakeValidator, fakeStore)
    validatorSpy.and.returnValue(true);

    action.Execute(raw);
    expect(fakeStore.Put).toHaveBeenCalled();
  });

  it('should return success status when everything passes', () => {
    const action = new CreateAddressAction(fakeValidator, fakeStore)
    validatorSpy.and.returnValue(true);

    action.Execute(raw).subscribe(res => {
      expect(res.Result).toBe(ActionResult.Success);
    });
  });

  it('should return ValidationError status when validation fails', () => {
    const action = new CreateAddressAction(fakeValidator, fakeStore)
    validatorSpy.and.returnValue(false);

    action.Execute(raw).subscribe(res => {
      expect(res.Result).toBe(ActionResult.ValidationError);
    });
  });

  it('should not call the store when validation is false', () => {
    const action = new CreateAddressAction(fakeValidator, fakeStore)
    validatorSpy.and.returnValue(false);

    action.Execute(raw);
    expect(fakeStore.Put).toHaveBeenCalledTimes(0);
  });

  it('should return Error when exception is thrown', () => {
    const action = new CreateAddressAction(fakeValidator, fakeStore)
    validatorSpy.and.returnValue(true);
    storeSpy.and.throwError('store failed');

    action.Execute(raw).subscribe(res => {
      expect(res.Result).toBe(ActionResult.Error);
    });

  });

  it('should return correct error message when exception is thrown', () => {
    const action = new CreateAddressAction(fakeValidator, fakeStore)
    validatorSpy.and.returnValue(true);
    storeSpy.and.throwError('store failed');

    action.Execute(raw).subscribe(res => {
      expect(res.Error).toBe('Error: store failed');
    });
  });
});
