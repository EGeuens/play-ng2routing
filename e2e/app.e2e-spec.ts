import { ServiceWorkerTestPage } from './app.po';

describe('service-worker-test App', () => {
  let page: ServiceWorkerTestPage;

  beforeEach(() => {
    page = new ServiceWorkerTestPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
