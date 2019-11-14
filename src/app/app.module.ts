import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { SocailPostsComponent } from "./socail-posts/socail-posts.component";
import { PostFormComponent } from "./post-form/post-form.component";
import { PostComponent } from "./post/post.component";

@NgModule({
  declarations: [
    AppComponent,
    SocailPostsComponent,
    PostFormComponent,
    PostComponent,
    FormsModule
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
