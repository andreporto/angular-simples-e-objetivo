import { BoilerplateHttpPage } from './app.po';

describe('boilerplate-http App', () => {
  let page: BoilerplateHttpPage;

  beforeEach(() => {
    page = new BoilerplateHttpPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
