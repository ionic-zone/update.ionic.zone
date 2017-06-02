import { Update.Ionic.ZonePage } from './app.po';

describe('update.ionic.zone App', () => {
  let page: Update.Ionic.ZonePage;

  beforeEach(() => {
    page = new Update.Ionic.ZonePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
