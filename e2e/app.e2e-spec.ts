import { SlambyWebsitePage } from './app.po';

describe('slamby-website App', function() {
  let page: SlambyWebsitePage;

  beforeEach(() => {
    page = new SlambyWebsitePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
