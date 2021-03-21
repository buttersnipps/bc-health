import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommunityHealthPageComponent } from './community-health-page/community-health-page.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommunityHealthPageService } from './community-health-page/community-health-page.service';

@NgModule({
  declarations: [
    AppComponent,
    CommunityHealthPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    MatToolbarModule,
    ReactiveFormsModule,
    HttpClientModule,
    
  ],
  providers: [
    CommunityHealthPageService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
