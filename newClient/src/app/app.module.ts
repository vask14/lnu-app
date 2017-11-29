import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import {DpDatePickerModule} from 'ng2-date-picker';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './home/header/header.component';
import { TopBarComponent } from './home/top-bar/top-bar.component';
import { ParagraphComponent } from './home/paragraph/paragraph.component';
import { TextComponent } from './home/text/text.component';
import { CommentsComponent } from './home/comments/comments.component';
import { FormComponent } from './home/form/form.component';
import { FooterComponent } from './home/footer/footer.component';
import { HomeloginComponent } from './home/homelogin/homelogin.component';
import { HomeformNewComponent } from './home/homeform-new/homeform-new.component';
import { GeneralComponent } from './home/homeform-new/general/general.component';
import { InfoComponent } from './home/homeform-new/info/info.component';
import { PaymentComponent } from './home/homeform-new/payment/payment.component';
import { ProfileComponent } from './home/homeform-new/profile/profile.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    TopBarComponent,
    ParagraphComponent,
    TextComponent,
    CommentsComponent,
    FormComponent,
    FooterComponent,
    HomeloginComponent,
    HomeformNewComponent,
    GeneralComponent,
    InfoComponent,
    PaymentComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    DpDatePickerModule,
    RouterModule.forRoot([
      {
        path: 'homelogin',
        component: HomeloginComponent
      },
      {
        path: '',
        pathMatch: 'full',
        component: HomeComponent
      },
      {
        path: 'product',
        component: HomeformNewComponent 
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
