import { RSPPage } from './app.po';

describe('rsp App', () => {
  let page: RSPPage;

  beforeEach(() => {
    page = new RSPPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
