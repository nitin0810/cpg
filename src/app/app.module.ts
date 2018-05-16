import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { CustomHttpService } from '../providers/custom-http.service';
import { CustomService } from '../providers/custom.service';
import { AuthService } from '../providers/auth.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NetworkService } from '../providers/network.service';
import { Network } from '@ionic-native/network';

@NgModule({
  declarations: [
    MyApp,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp,{
      preloadModules: true
    }),
    HttpClientModule,

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    CustomHttpService,
    CustomService,
    AuthService,
    Network,
    NetworkService
  ]
})      
export class AppModule {}
