import { Component, OnInit, Input, EventEmitter, Output } from "@angular/core";
import { Post } from "../post";

@Component({
  selector: "app-post",
  templateUrl: "./post.component.html",
  styleUrls: ["./post.component.css"]
})
export class PostComponent implements OnInit {
  @Output()
  deleted = new EventEmitter<void>();

  @Input()
  post: Post;

  deletePost() {
    this.deleted.emit();
    console.log("im gone");
  }

  constructor() {}

  ngOnInit() {}
}
