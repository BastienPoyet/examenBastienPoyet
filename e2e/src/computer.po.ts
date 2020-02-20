import { browser, by, element } from 'protractor';

export class ComputerPage {

  sleep() {
    browser.driver.sleep(2500);
  }
  completeForm() {
    let modele = element.all(by.id('modele'));
    let marque = element.all(by.css('.marque'));
    let type = element.all(by.id('type'));
    let category = element.all(by.css('.category'));
    let prixAchat = element.all(by.id('prixAchat'));
    let prixVente = element.all(by.id('prixVente'));
    modele.sendKeys('test');
    marque.get(0).click();
    type.sendKeys('Portable');
    category.get(0).click();
    prixAchat.sendKeys(400);
    prixVente.sendKeys(800);
  }
}