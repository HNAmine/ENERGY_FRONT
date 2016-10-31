import { ENERGYFRONTPage } from './app.po';

describe('energy-front App', function() {
  let page: ENERGYFRONTPage;

  beforeEach(() => {
    page = new ENERGYFRONTPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
