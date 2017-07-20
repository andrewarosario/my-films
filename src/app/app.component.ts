import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { TabsPage } from '../pages/tabs/tabs';
import { IntroPage } from "../pages/intro/intro";
import { ConfiguracoesProvider } from "../providers/configuracoes/configuracoes";

@Component({
  templateUrl: 'app.html',
  providers: [
      ConfiguracoesProvider
  ]
})
export class MyApp {
    rootPage:any = IntroPage;

    constructor(platform: Platform, 
                statusBar: StatusBar, 
                splashScreen: SplashScreen, 
                configuracoesProvider: ConfiguracoesProvider) {

        platform.ready().then(() => {
            let configuracoes = configuracoesProvider.getConfiguracoes();
            if (configuracoes == null) {
                this.rootPage = IntroPage;
                configuracoesProvider.setConfiguracoes(false);
            } else {
                this.rootPage = TabsPage;
            }

            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
}
