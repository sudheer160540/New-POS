import { POSSALTPage } from './app.po';

describe('possalt App', () => {
  let page: POSSALTPage;

  beforeEach(() => {
    page = new POSSALTPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
