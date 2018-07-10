import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Dependencies
import { MatProgressSpinnerModule, MatIconModule, MatButtonModule, MatMenuModule } from '@angular/material';

import 'hammerjs';
import { SlimLoadingBarModule } from 'ng2-slim-loading-bar';

import {MatDialogModule} from '@angular/material/dialog';
import {MatSelectModule} from "@angular/material";
import { MatExpansionModule } from "@angular/material";

import {MatListModule} from '@angular/material/list';
import {MatInputModule} from "@angular/material";


// Component
import { AppComponent } from './app.component';
import { HomeModule } from './home/home.module';
import { MenuComponentsModule } from "./menu-components/menu-components.module";
import { ProductModule } from './product/product.module';
// import { NotFoundComponent } from './not-found/not-found.component';
 import { contactModule } from './contact/contact.module';

import {CabinetModule} from "./cabinet/cabinet.module";
// import { ElementModule } from './element/element.module';
import {AuthFormsModule} from "./auth-forms/auth-forms.module";
import { LoginService } from './login/login.service';
import { Principal } from './auth/principal.service';
import { AccountService } from './auth/account.service';
import { AuthServerProvider } from './auth/auth-jwt.service';
import { LocalStorageService, SessionStorageService } from 'ng2-webstorage';
import {StateStorageService} from './auth/state-storage.service';
import {AuthInterceptor} from './auth/auth-interceptor';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import { Register } from  "./auth/register.service";
import {CSRFService} from "./auth/csrf.service";
import { MstoresModule } from "./mstores/mstores.module";
import { MblogModule } from "./mblog/mblog.module";

// Routing MOdule
import { AppRoutingModule } from './routing.module';

// Directive Height
import { FullscreenDirective } from './lib/directive/fullscreen.directive';
import {MatchHeightDirective } from './lib/directive/match-height.directive';
import { MenuComponent } from './menu/menu.component';
// import { ToprowComponent } from './toprow/toprow.component';
import { FooterComponent } from './footer/footer.component';
import { LoginDialogComponent } from './login/login.component';

// import { FrontSliderComponent } from './front-slider/front-slider.component';
import {LogisticService} from "./lib/service/logistic.service";
import { BlogComponent } from './blog/blog.component';
import {SocialService} from "./social/social.service";
// import { CookieSaverComponent } from './cookie-saver/cookie-saver.component';
// import { OurServicesComponent } from './our-services/our-services.component';
import {FooterDirective} from "./footer.directive";
import {AboutComponent} from "./home/about/about.component";
import {SeotextComponent} from "./home/seotext/seotext.component";
import {InstagramComponent} from "./home/instagram/instagram.component";
import {CarouselComponent} from "./home/carousel/carousel.component";
// import { SubscribeComponent } from './subscribe/subscribe.component';
import {SafeHtmlPipe} from "./lib/pipe/safe-html";
import { HAMMER_GESTURE_CONFIG, HammerGestureConfig } from '@angular/platform-browser';
import {CookieSaverComponent} from "./cookie-saver/cookie-saver.component";
import { MobserchComponent } from './mobserch/mobserch.component';
export class MyHammerConfig extends HammerGestureConfig {
    overrides = <any> {
        'pinch': { enable: false },
        'rotate': { enable: false }
    }
}

@NgModule({
    declarations: [
        AppComponent,
       // NotFoundComponent,
        FullscreenDirective,
        MatchHeightDirective,
        MenuComponent,
      //  ToprowComponent,
        FooterComponent,
        FooterDirective,
    /*
        FrontSliderComponent,

        OurServicesComponent,
        SubscribeComponent,*/
        CookieSaverComponent,
        LoginDialogComponent,
        BlogComponent,
        SafeHtmlPipe,
        MobserchComponent
    ],
    imports: [
        BrowserModule,
        BrowserModule.withServerTransition({
            appId: 'ng-universal-demystified'
        }),
        MenuComponentsModule,
        FormsModule,
        AuthFormsModule,
        MstoresModule,
        // MblogModule,
        ReactiveFormsModule,
        HttpClientModule,
        BrowserAnimationsModule,
        MblogModule,
        MatDialogModule,
        MatSelectModule,
        MatListModule,
        MatInputModule,
        MatProgressSpinnerModule,
        MatIconModule,
        MatButtonModule,
        MatMenuModule,
        MatExpansionModule,
        AppRoutingModule,
        CabinetModule,
        HomeModule,
        ProductModule,
       //  ElementModule,
        contactModule,
        SlimLoadingBarModule.forRoot()
    ],

    entryComponents:[
        LoginDialogComponent,
        FooterComponent, AboutComponent,
        // SubscribeComponent,
        SeotextComponent,
        InstagramComponent,
        MobserchComponent,
        CarouselComponent
    ],

    providers: [
        LoginService,
        Principal, AccountService, LogisticService,
        StateStorageService,
        AuthServerProvider,
        LocalStorageService,
        SessionStorageService,
        CSRFService,
        SocialService,
        Register,
        { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true},
        {
            provide: HAMMER_GESTURE_CONFIG,
            useClass: MyHammerConfig
        }
    ],
    exports: [
        // SubscribeComponent
    ],

    bootstrap: [AppComponent]
})
export class AppModule { }
