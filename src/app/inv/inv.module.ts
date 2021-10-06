import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InvRoutingModule } from './inv-routing.module';
import { AdminComponent } from './admin/admin.component';
import { GeneralComponent } from './admin/general/general.component';
import { CostingComponent } from './admin/costing/costing.component';
import { DetailComponent } from './admin/detail/detail.component';
import { UPCComponent } from './admin/upc/upc.component';
import { ImagesComponent } from './admin/images/images.component';


@NgModule({
  declarations: [AdminComponent, GeneralComponent, CostingComponent, DetailComponent, UPCComponent, ImagesComponent],
  imports: [
    CommonModule,
    InvRoutingModule
  ]
})
export class InvModule { }
