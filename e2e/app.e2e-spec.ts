import { MaterialMenuPage } from './app.po';

describe('material-menu App', () => {
  let page: MaterialMenuPage;

  beforeEach(() => {
    page = new MaterialMenuPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
