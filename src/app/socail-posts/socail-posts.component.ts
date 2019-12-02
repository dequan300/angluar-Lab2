import { Component, OnInit } from "@angular/core";
import { Post } from "../post";

@Component({
  selector: "app-socail-posts",
  templateUrl: "./socail-posts.component.html",
  styleUrls: ["./socail-posts.component.css"]
})
export class SocailPostsComponent implements OnInit {
  firstName = "New Thoughts";
  listOfPost: Post[] = [
    { title: "grand circus", thought: "grancircus is cool" },
    {
      title: "Ritual",
      thought: "ritual is a well developed app"
    },
    {
      title: "Scott",
      thought: "scott rides scooter"
    }
  ];
  onSubmit(newpost) {
    this.listOfPost.push(newpost);
  }
  onDelete(index) {
    this.listOfPost.splice(index[1]);
  }
  constructor() {}

  ngOnInit() {}
}
