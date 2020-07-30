import { Component, OnInit, Input } from '@angular/core';
import { IPost } from '../interfaces/post.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  @Input() post: IPost;
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  voirDetail() {
    this.router.navigateByUrl(`/posts/${this.post.id}`);
  }

}
