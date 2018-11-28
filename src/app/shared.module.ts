import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpiderDropdownComponent } from './shared/spider-dropdown/spider-dropdown.component';
import { SpiderDropdownModule } from './shared/spider-dropdown/spider-dropdown.module';

@NgModule({
  imports: [
    CommonModule,
    SpiderDropdownModule
  ],
  exports: [SpiderDropdownComponent]
})
export class SharedModule { }
