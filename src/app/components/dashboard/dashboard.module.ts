import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { SharedModule } from '../shared/shared.module';
import { DashboardComponent } from './dashboard.component';
import { MembersComponent } from './members/members.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ToolsComponent } from './tools/tools.component';
import { ArticlesComponent } from './articles/articles.component';
import { HomeComponent } from './home/home.component';
import { CreateMemberComponent } from './members/create-member/create-member.component';


@NgModule({
  declarations: [
    DashboardComponent,
    MembersComponent,
    NavbarComponent,
    ToolsComponent,
    ArticlesComponent,
    HomeComponent,
    CreateMemberComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule
  ]
})
export class DashboardModule { }
