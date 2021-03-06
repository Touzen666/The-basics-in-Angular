import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InterpolationComponent } from './interpolation/interpolation.component';
import { PropertyBindingComponent } from './property-binding/property-binding.component';
import { StyleBindingComponent } from './class/style-binding/style-binding.component';
import { ClassBindingComponent } from './class/class-binding/class-binding.component';
import { TempRefVarComponent } from './temp-ref-var/temp-ref-var.component';
import { TwoWayBindingComponent } from './two-way-binding/two-way-binding.component';
import { NgIfNgforNgSwitchComponent } from './ng-if-ngfor-ng-switch/ng-if-ngfor-ng-switch.component';
import { ComponetOneComponent } from './component-interactin/componet-one/componet-one.component';
import { PipeComponent } from './pipe/pipe.component';
import { ComponetTwoComponent } from './component-interactin/componet-two/componet-two.component';
import { EventBindingComponent } from './event-binding/event-binding.component';
import { EmployeeListComponent } from './employee/employee-list/employee-list.component';
import { EmployeeDetailComponent } from './employee/employee-detail/employee-detail.component';

import { EmployeeService } from './services/employee.service';
import { from } from 'rxjs';


@NgModule({
  declarations: [
    AppComponent,
    InterpolationComponent,
    PropertyBindingComponent,
    StyleBindingComponent,
    ClassBindingComponent,
    TempRefVarComponent,
    TwoWayBindingComponent,
    NgIfNgforNgSwitchComponent,
    ComponetOneComponent,
    PipeComponent,
    ComponetTwoComponent,
    EventBindingComponent,
    EmployeeListComponent,
    EmployeeDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
