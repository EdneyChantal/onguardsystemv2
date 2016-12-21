import { Onguardsystemv2Page } from './app.po';

describe('onguardsystemv2 App', function() {
  let page: Onguardsystemv2Page;

  beforeEach(() => {
    page = new Onguardsystemv2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
