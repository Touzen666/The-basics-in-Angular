import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
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
const routes: Routes = [        
  { path: '', component: InterpolationComponent },
  { path: 'PropertyBindingComponent', component: PropertyBindingComponent },
  { path: 'PtyleBindingComponent', component: StyleBindingComponent },
  { path: 'ClassBindingComponent', component: ClassBindingComponent },
  { path: 'StyleBindingComponent', component: StyleBindingComponent },
  { path: 'EventBindingComponent', component: EventBindingComponent },
  { path: 'TempRefVarComponent', component: TempRefVarComponent },
  { path: 'TwoWayBindingComponent', component: TwoWayBindingComponent },
  { path: 'NgIfNgforNgSwitchComponent', component: NgIfNgforNgSwitchComponent },
  { path: 'ComponetOneComponent', component: ComponetOneComponent },
  { path: 'PipeComponent', component: PipeComponent },
  { path: 'ComponetTwoComponent', component: ComponetTwoComponent },
  { path: 'EmployeeListComponent', component: EmployeeListComponent },
  { path: 'EmployeeDetailComponent', component: EmployeeDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
