import { AddressSummaryViewCreator } from './../../framework/controller/view-creator/address-summary/address-summary.viewCreator';
import { AddressSummaryComponent } from './address-summary.component';
import { CreateAddressAction } from '../../framework/controller/action/address/create-address.action';
describe('Address summary component', () => {
  const fakeAction = new CreateAddressAction(null, null);
  const fakeViewCreator = new AddressSummaryViewCreator(null);
  let actionSpy: jasmine.Spy;
  let viewCreatorSpy: jasmine.Spy;

  beforeEach(() => {
    viewCreatorSpy = spyOn(fakeViewCreator, 'CreateView');
    actionSpy = spyOn(fakeAction, 'Execute');

  });

  it('should return Ok as a result', () => {
    viewCreatorSpy.and.returnValue({});
    actionSpy.and.returnValue({ result: 'success' });
    let componentUnderTest = new AddressSummaryComponent(fakeViewCreator, fakeAction);
    componentUnderTest.CreateNew();

    expect(fakeAction.Execute).toHaveBeenCalled();


  });
});
