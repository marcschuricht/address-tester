import { AddressTesterPage } from './app.po';

describe('address-tester App', () => {
  let page: AddressTesterPage;

  beforeEach(() => {
    page = new AddressTesterPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
