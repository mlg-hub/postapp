import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { debounceTime, tap } from 'rxjs/operators';
import { IPost } from '../interfaces/post.interface';
@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  listDesPosts: IPost[] = [];

  constructor(private apiService: ApiService) {

  }

  ngOnInit(): void {
    this.apiService.getAllPosts().subscribe(
      (data) => {
        // console.log(data);

        this.listDesPosts.push(...data);
      }
    );
  }

}
