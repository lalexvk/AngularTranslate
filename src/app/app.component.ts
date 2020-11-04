import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core'
import { browser } from 'protractor';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(public translate: TranslateService){
    translate.addLangs(['en', 'esp', 'de']);
    translate.setDefaultLang('esp');
    const browserLang = translate.getBrowserLang();
    translate.use(browserLang.match(/en | de | esp/) ? browserLang : 'en');
  }
}
