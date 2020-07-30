import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';
import { IPost } from '../interfaces/post.interface';

@Component({
  selector: 'app-detail-post',
  templateUrl: './detail-post.component.html',
  styleUrls: ['./detail-post.component.scss']
})
export class DetailPostComponent implements OnInit {

  postFromUrl: IPost;
  constructor(private router: Router, private activated: ActivatedRoute, private apiSerivie: ApiService) {

  }

  ngOnInit(): void {
    this.activated.params.subscribe((v) => this.getDetail(v.id));

  }

  getDetail(postId: string): void {
    this.apiSerivie.getPost(postId)
      .subscribe((value) => {
        console.log("from url post", value);
        this.postFromUrl = value;
      });

  }

}
