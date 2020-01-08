import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';

import { AppComponent } from './app.component';
import { CoursesComponent } from './courses/courses.component';
import { LayoutComponent } from './layout/layout.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { IntroComponent } from './intro/intro.component';
import { ContentComponent } from './content/content.component';
import { FooterComponent } from './footer/footer.component';
import { UsersComponent } from './users/users.component';
import { PostsComponent } from './posts/posts.component';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

const routes = [
  { path: "", component: LayoutComponent },
  { path: "users", component: UsersComponent },
  { path: "blog", component: PostsComponent },
  { path: "coursera", component: CoursesComponent },
]

@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    LayoutComponent,
    NavbarComponent,
    SidebarComponent,
    IntroComponent,
    ContentComponent,
    FooterComponent,
    UsersComponent,
    PostsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
