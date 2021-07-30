import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListBlogsComponent } from './blogs/list-blogs/list-blogs.component';
import { AddBlogsComponent } from './blogs/add-blogs/add-blogs.component';
import { DetailBlogComponent } from './blogs/detail-blog/detail-blog.component';
import { CardupComponent } from './cards/cardup/cardup.component';
import { CarddownComponent } from './cards/carddown/carddown.component';
import { GridModule } from '@progress/kendo-angular-grid';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ListBlogsUnfilComponent } from './blogs/list-blogs/list-blogs-unfil/list-blogs-unfil.component';
import { ListBlogsContentComponent } from './blogs/list-blogs/list-blogs-content/list-blogs-content.component';
import { ListBlogsTitleComponent } from './blogs/list-blogs/list-blogs-title/list-blogs-title.component';
import { ListBlogsAuthorComponent } from './blogs/list-blogs/list-blogs-author/list-blogs-author.component';




@NgModule({
  declarations: [
    AppComponent,
    ListBlogsComponent,
    AddBlogsComponent,
    DetailBlogComponent,
    CardupComponent,
    CarddownComponent,
    ListBlogsUnfilComponent,
    ListBlogsContentComponent,
    ListBlogsTitleComponent,
    ListBlogsAuthorComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    GridModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
