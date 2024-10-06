import { NgModule } from '@angular/core'
import { Routes } from '@angular/router'
import { NativeScriptRouterModule } from '@nativescript/angular'

import { DeviceComparisonComponent } from './device-comparison/device-comparison.component'

const routes: Routes = [
  { path: '', redirectTo: '/comparison', pathMatch: 'full' },
  { path: 'comparison', component: DeviceComparisonComponent },
]

@NgModule({
  imports: [NativeScriptRouterModule.forRoot(routes)],
  exports: [NativeScriptRouterModule],
})
export class AppRoutingModule {}