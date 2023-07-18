import { ErrorsComponent } from './modules/errors/errors.component';
import { PostsComponent } from './modules/posts/posts.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { DefaultComponent } from './layouts/default/default.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MonthlyComponent} from './modules/monthly/monthly.component'
import { PieComponent } from './modules/pie/pie.component'
import { AreaComponent } from './shared/widgets/area/area.component';
const routes: Routes = [
  {
    path: '',
    component: DefaultComponent,
    children: [{
      path: '',
      component: DashboardComponent
    },
  {
    path :'posts',
    component :PostsComponent

  },
      {
        path: 'monthly',
        component: MonthlyComponent

      },

      {
        path: 'errors',
        component: ErrorsComponent

      }
      ,

      {
        path: 'pie',
        component: PieComponent

      },

      {
        path: 'column',
        component: AreaComponent

      }

    ]

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
