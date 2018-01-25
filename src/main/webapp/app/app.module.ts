import './vendor.ts';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Ng2Webstorage } from 'ngx-webstorage';

import { TalentsGatewaySharedModule, UserRouteAccessService } from './shared';
import { TalentsGatewayAppRoutingModule} from './app-routing.module';
import { TalentsGatewayHomeModule } from './home/home.module';
import { TalentsGatewayAdminModule } from './admin/admin.module';
import { TalentsGatewayAccountModule } from './account/account.module';
import { TalentsGatewayEntityModule } from './entities/entity.module';
import { customHttpProvider } from './blocks/interceptor/http.provider';
import { PaginationConfig } from './blocks/config/uib-pagination.config';

// jhipster-needle-angular-add-module-import JHipster will add new module here

import {
    JhiMainComponent,
    NavbarComponent,
    FooterComponent,
    ProfileService,
    PageRibbonComponent,
    ActiveMenuDirective,
    ErrorComponent
} from './layouts';

@NgModule({
    imports: [
        BrowserModule,
        TalentsGatewayAppRoutingModule,
        Ng2Webstorage.forRoot({ prefix: 'jhi', separator: '-'}),
        TalentsGatewaySharedModule,
        TalentsGatewayHomeModule,
        TalentsGatewayAdminModule,
        TalentsGatewayAccountModule,
        TalentsGatewayEntityModule,
        // jhipster-needle-angular-add-module JHipster will add new module here
    ],
    declarations: [
        JhiMainComponent,
        NavbarComponent,
        ErrorComponent,
        PageRibbonComponent,
        ActiveMenuDirective,
        FooterComponent
    ],
    providers: [
        ProfileService,
        customHttpProvider(),
        PaginationConfig,
        UserRouteAccessService
    ],
    bootstrap: [ JhiMainComponent ]
})
export class TalentsGatewayAppModule {}
