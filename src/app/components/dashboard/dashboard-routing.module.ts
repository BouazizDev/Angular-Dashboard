import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticlesComponent } from './articles/articles.component';
import { DashboardComponent } from './dashboard.component';
import { HomeComponent } from './home/home.component';
import { CreateMemberComponent } from './members/create-member/create-member.component';
import { MembersComponent } from './members/members.component';
import { ToolsComponent } from './tools/tools.component';

const routes: Routes = [
  {path:'',component:DashboardComponent, children:[
    { path: '', component :HomeComponent},
    { path: 'members', component :MembersComponent},
    { path: 'tools', component :ToolsComponent},
    { path: 'articles', component :ArticlesComponent},
    { path: 'create-member', component :CreateMemberComponent},
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
