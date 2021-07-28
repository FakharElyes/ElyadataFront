import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddBlogsComponent } from './blogs/add-blogs/add-blogs.component';
import { DetailBlogComponent } from './blogs/detail-blog/detail-blog.component';
import { ListBlogsComponent } from './blogs/list-blogs/list-blogs.component';

const routes: Routes = [
  {path:'',redirectTo:'/blogs',pathMatch:'full'},
  {path:'blogs',component:ListBlogsComponent},
  {path:'details',component:DetailBlogComponent},
  {path:'add',component:AddBlogsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
