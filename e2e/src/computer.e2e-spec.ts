import {browser, element, logging, by} from 'protractor';
import {ComputerPage} from './computer.po';

describe('test des chaussures', () => {
  let page: ComputerPage;
  let nbArticle: number;

  beforeEach(() => {
    page = new ComputerPage();
    browser.get('/home');
  });

  it('Recherche le lien d\'ajout du PC et clique dessus', () => {
    element.all(by.css('.pc')).then(totalRows => {
      this.nbArticle = totalRows.length;
      element(by.id('btnAjout')).click();
      page.sleep();
      expect(browser.driver.getCurrentUrl()).toContain('/add');
    });
  });

  it('Test le formulaire', () => {
    browser.get('/add');
    page.completeForm();
    page.sleep();
    let submitBtn = element.all(by.id('submitBtn1'));
    submitBtn.click().then(fn => {
        element.all(by.css('.pc')).then(totalNewRows => {
        this.nbArticle += 1;
        const compareArticle = this.nbArticle;
        expect(totalNewRows.length).toEqual(compareArticle);
        page.sleep();
      });
    });
  });

  it('Test de la suppression', () => {
    browser.get('/home');
    page.sleep();
    let firstDeleteButton = element.all(by.id('btnDelete')).last();
    firstDeleteButton.click().then(fn => {
      element.all(by.css('.pc')).then(totalNewRows => {
        this.nbArticle -= 1;
        const compare = this.nbArticle ;
        expect(totalNewRows.length).toEqual(compare);
      });
    });
  });


  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});