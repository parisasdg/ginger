import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AdminComponent} from './admin/admin.component';
import {GeneralComponent} from './admin/general/general.component';
import {CostingComponent} from './admin/costing/costing.component';
import {DetailComponent} from './admin/detail/detail.component';
import {ImagesComponent} from './admin/images/images.component';
import {UPCComponent} from './admin/upc/upc.component';

const routes: Routes = [
  {path: '',
    component: AdminComponent,
    children: [
      {path: 'general', component: GeneralComponent},
      {path: 'costing', component: CostingComponent},
      {path: 'detail', component: DetailComponent},
      {path: 'images', component: ImagesComponent},
      {path: 'upc', component: UPCComponent}
    ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InvRoutingModule {
}
