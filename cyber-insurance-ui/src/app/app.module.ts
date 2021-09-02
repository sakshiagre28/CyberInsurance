import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatStepperModule} from '@angular/material/stepper'
import { MatButtonModule} from '@angular/material/button';
import { FormStepperComponent } from './form-stepper/form-stepper.component';
import { ChooseMyPlanComponent } from './choose-my-plan/choose-my-plan.component';
import { ProvideMyDetailsComponent } from './provide-my-details/provide-my-details.component';
import { ReviewAndPayComponent } from './review-and-pay/review-and-pay.component';
import { GetPolicyComponent } from './get-policy/get-policy.component';
import { LandingScreenComponent } from './landing-screen/landing-screen.component'
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgSelectOption } from '@angular/forms';
import { MatExpansionModule} from '@angular/material/expansion';
import {MatInputModule} from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import {MatSelectModule} from '@angular/material/select';
import { ReactiveFormsModule } from '@angular/forms';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatCardModule} from '@angular/material/card'
import { MatToolbarModule } from '@angular/material/toolbar';
import { FlexLayoutModule } from '@angular/flex-layout';

const appRoutes : Routes =[
  {path : 'getStarted', component : LandingScreenComponent},
  {path : '', redirectTo :'getStarted' ,pathMatch: 'full'},
  {path : 'fillDetails', component : FormStepperComponent}
]
@NgModule({
  declarations: [
    AppComponent,
    FormStepperComponent,
    ChooseMyPlanComponent,
    ProvideMyDetailsComponent,
    ReviewAndPayComponent,
    GetPolicyComponent,
    LandingScreenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatStepperModule,
    MatButtonModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    MatExpansionModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatCheckboxModule,
    MatCardModule,
    MatToolbarModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }