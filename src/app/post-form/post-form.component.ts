import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { Post } from "../post";
import { format } from "url";


@Component({
  selector: "app-post-form",
  templateUrl: "./post-form.component.html",
  styleUrls: ["./post-form.component.css"]
})
export class PostFormComponent implements OnInit {
  newPost: Post = { title: "", thought: "" };
  
   @Output()
 submitted = new EventEmitter<Post>();
  onSubmit() {
    // this.submitted.emit({
    //   title: this.newPost.title,
    //   thought: this.newPost.thought
    // });
    // this.newPost = { title: "", thought: "" };
    
    this.submitted.emit(this.newPost)
  }
  constructor() {}

  ngOnInit() {}
}
