import { MonthlyComponent } from './../../modules/monthly/monthly.component';
import { MatTableModule } from '@angular/material/table';
import { DashboardService } from './../../modules/dashboard.service';
import { FooterComponent } from './../../shared/components/footer/footer.component';
import { PostsComponent } from './../../modules/posts/posts.component';
import { DashboardComponent } from './../../modules/dashboard/dashboard.component';
import { DefaultComponent } from './default.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { HeaderComponent } from 'src/app/shared/components/header/header.component';
import { SidebarComponent } from 'src/app/shared/components/sidebar/sidebar.component';
import { MatSidenavModule } from '@angular/material/sidenav';
//import { MatDialogModule } from "@angular/material";
import { MatDialogModule } from "@angular/material/dialog";
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCardModule } from '@angular/material/card';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatFormFieldModule } from '@angular/material/form-field';
//import { MatInputModule } from '@angular/material/input';
import { MatInputModule } from '@angular/material/input';
//import { ErrorsComponent } from './modules/errors/errors.component';
import { ErrorsComponent } from './../../modules/errors/errors.component';
//import { PieComponent } from './modules/pie/pie.component';
import {PieComponent } from './../../modules/pie/pie.component'
import { HighchartsChartModule } from 'highcharts-angular';
import { CardsComponent } from './../../modules/cards/cards.component'
import { TestComponent } from './../../modules/test/test.component'
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    DefaultComponent,
    DashboardComponent,
    PostsComponent,
    MonthlyComponent,
    ErrorsComponent,
    PieComponent,
    CardsComponent,
    TestComponent,


  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    MatSidenavModule,
    MatDividerModule,
    MatListModule,
    FlexLayoutModule,
    MatCardModule,
   MatPaginatorModule,
   MatTableModule,
   MatSortModule,
    MatFormFieldModule,
    MatInputModule,
    HighchartsChartModule,
    FormsModule,


  ],
  providers:[
    DashboardService
  ]
})
export class DefaultModule { }
