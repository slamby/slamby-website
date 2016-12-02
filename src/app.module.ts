import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { Angulartics2GoogleAnalytics, Angulartics2Module } from 'angulartics2';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';

import {Ng2PageScrollModule} from 'ng2-page-scroll';
import { MetaModule, MetaService, MetaConfig } from 'ng2-meta';

import { HeaderComponent } from './app/common/header/header.component';
import { FooterComponent } from './app/common/footer/footer.component';
import { NotFoundPageComponent } from './app/404/404.component';
import { ThankYouComponent } from './app/thank-you/thank-you.component';
import { InsightComponent } from './app/insight/insight.component';
import { HomeComponent } from './app/home/home.component';
import { SubmenuComponent } from './app/common/submenu/submenu.component';
import { PricingComponent } from './app/pricing/pricing.component';
import { GettingStartedComponent } from './app/getting-started/getting-started.component';
import { PartnersComponent } from './app/partners/partners.component';
import { CompanyComponent } from './app/company/company.component';
import { PrivacyPolicyComponent } from './app/legal/privacy-policy.component';
import { LegalMenuComponent } from './app/legal/legal-menu.component';
import { CommercialLicenseComponent } from './app/legal/commercial-license.component';
import { CommercialLicenseOemComponent } from './app/legal/commercial-license-oem.component';
import { OpenSourceLicenseComponent } from './app/legal/open-source-license.component';
import { GnuAgplLicenseComponent } from './app/legal/gnu-agpl-license.component';

import { SupportComponent } from './app/support/support.component';

const metaConfig: MetaConfig = {
  useTitleSuffix: true,
  defaults: {
    title: 'Understanding data made simple',
    titleSuffix: ' - Slamby',
    "description": "Slamby is a great tool for classifieds to do perfect machine learning. Category recommendation, keyword-extraction, duplicate search, matchmaking. Open-source, SaaS, on-premise install."
  }
};

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'home', component: HomeComponent },
      { path: 'insight', component: InsightComponent, data: {meta:{title:"Insight"}} },
      { path: 'pricing', component: PricingComponent, data: {meta:{title:"Pricing",description:"Slamby pricing, on-premise, SaaS, core-based, open-source."}} },
      { path: '404', component: NotFoundPageComponent, data: {meta:{title:"Page not found",description:"The requested page is not found."}} },
      { path: 'thank-you', component: ThankYouComponent, data: {meta:{title:"Thank You" }} },
      { path: 'getting-started', component: GettingStartedComponent, data: {meta:{title:"Getting started",description:"Quick tutorial about Slamby install steps, pricing, licenses, support, SDKs, related softwares and Slamby Insight."}} },
      { path: 'partners', component: PartnersComponent, data: {meta:{title:"Partners",description:"Slamby partners who helped a lot to us."}} },
      { path: 'company', component: CompanyComponent, data: {meta:{title:"Company",description:"We love what we do, if you need more information about Slamby, just contact us anytime at hello@slamby.com"}} },
      { path: 'legal/privacy-policy', component: PrivacyPolicyComponent, data: {meta:{title:"Privacy policy"} }},
      { path: 'legal/commercial-license', component: CommercialLicenseComponent, data: {meta:{title:"Commercial license"}} },
      { path: 'legal/commercial-license-oem', component: CommercialLicenseOemComponent, data: {meta:{title:"Commercial license for OEMs"}} },
      { path: 'legal/gnu-agpl-license', component: GnuAgplLicenseComponent, data: {meta:{title:"GNU AGPL V3 license"}} },
      { path: 'legal/open-source-license', component: OpenSourceLicenseComponent, data: {meta:{title:"Open-source license"}} },
      { path: 'support', component: SupportComponent, data: {meta:{title:"Support"}} },
      { path: '**', redirectTo: '/404' }
    ]),
    Angulartics2Module.forRoot([ Angulartics2GoogleAnalytics ]),
    Ng2PageScrollModule.forRoot(),
    NgbModule.forRoot(),
    MetaModule.forRoot(metaConfig)
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
    LegalMenuComponent,
    SupportComponent
  ],
  providers: [
  ],
  bootstrap: [ AppComponent ]
})

export class AppModule {}