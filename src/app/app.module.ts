import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

//import { MetaModule, MetaService, MetaConfig } from 'ng2-meta';
//import { Angulartics2GoogleAnalytics, Angulartics2Module } from 'angulartics2';

import { AppComponent } from './app.component';

import { HeaderComponent } from './common/header/header.component';
import { FooterComponent } from './common/footer/footer.component';
import { NotFoundPageComponent } from './404/404.component';
import { ThankYouComponent } from './thank-you/thank-you.component';
import { InsightComponent } from './insight/insight.component';
import { HomeComponent } from './home/home.component';
import { SubmenuComponent } from './common/submenu/submenu.component';
import { PricingComponent } from './pricing/pricing.component';
import { GettingStartedComponent } from './getting-started/getting-started.component';
import { PartnersComponent } from './partners/partners.component';
import { CompanyComponent } from './company/company.component';
import { PrivacyPolicyComponent } from './legal/privacy-policy.component';
import { LegalMenuComponent } from './legal/legal-menu.component';
import { LegalComponent } from './legal/legal.component';
import { CommercialLicenseComponent } from './legal/commercial-license.component';
import { CommercialLicenseOemComponent } from './legal/commercial-license-oem.component';
import { OpenSourceLicenseComponent } from './legal/open-source-license.component';
import { GnuAgplLicenseComponent } from './legal/gnu-agpl-license.component';
import { SupportComponent } from './support/support.component';

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {
        path: '',
        component: HomeComponent,
        pathMatch: 'full'
      },
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: 'insight',
        component: InsightComponent,
        data: {meta:{title:"Insight"}}
      },
      {
        path: 'pricing', 
        component: PricingComponent,
        data: {meta:{title:"Pricing",description:"Slamby pricing, on-premise, SaaS, core-based, open-source."}}
      },
      {
        path: '404',
        component: NotFoundPageComponent,
        data: {meta:{title:"Page not found",description:"The requested page is not found."}}
      },
      {
        path: 'thank-you',
        component: ThankYouComponent,
        data: {meta:{title:"Thank You" }}
      },
      {
        path: 'getting-started',
        component: GettingStartedComponent,
        data: {meta:{title:"Getting started",description:"Quick tutorial about Slamby install steps, pricing, licenses, support, SDKs, related softwares and Slamby Insight."}}
      },
      {
        path: 'partners',
        component: PartnersComponent,
        data: {meta:{title:"Partners",description:"Slamby partners who helped a lot to us."}}
      },
      {
        path: 'company',
        component: CompanyComponent,
        data: {meta:{title:"Company",description:"We love what we do, if you need more information about Slamby, just contact us anytime at hello@slamby.com"}}
      },
      {
        path: 'legal',
        component: LegalComponent,
        data: {meta:{title:"Legal"}}
      },
      {
        path: 'legal/privacy-policy',
        component: PrivacyPolicyComponent,
        data: {meta:{title:"Privacy policy"}}
      },
      {
        path: 'legal/commercial-license',
        component: CommercialLicenseComponent,
        data: {meta:{title:"Commercial license"}}
      },
      {
        path: 'legal/commercial-license-oem',
        component: CommercialLicenseOemComponent,
        data: {meta:{title:"Commercial license for OEMs"}}
      },
      {
        path: 'legal/gnu-agpl-license',
        component: GnuAgplLicenseComponent,
        data: {meta:{title:"GNU AGPL V3 license"}}
      },
      {
        path: 'legal/open-source-license',
        component: OpenSourceLicenseComponent,
        data: {meta:{title:"Open-source license"}}
      },
      {
        path: 'support',
        component: SupportComponent,
        data: {meta:{title:"Support"}}
      },
      {
        path: '**',
        redirectTo: '/404'
      }
    ])
  ],
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NotFoundPageComponent,
    ThankYouComponent,
    GettingStartedComponent,
    InsightComponent,
    HomeComponent,
    SubmenuComponent,
    PricingComponent,
    PartnersComponent,
    CompanyComponent,
    PrivacyPolicyComponent,
    CommercialLicenseComponent,
    CommercialLicenseOemComponent,
    GnuAgplLicenseComponent,
    OpenSourceLicenseComponent,
    LegalComponent,
    LegalMenuComponent,
    SupportComponent
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})

export class AppModule {}