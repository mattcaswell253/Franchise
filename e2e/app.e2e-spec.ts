import { FranchisePage } from './app.po';

describe('franchise App', function() {
  let page: FranchisePage;

  beforeEach(() => {
    page = new FranchisePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
