import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/services/post.service';
import { IPost } from 'src/app/models/ipost';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-post-edit',
  templateUrl: './post-edit.component.html',
  styleUrls: ['./post-edit.component.scss']
})
export class PostEditComponent implements OnInit {

  public error: string;
  public post: IPost = {
    id: '',
    title: '',
    body: '',
    userId: ''
  };

  private id: string;

  constructor(private postService: PostService, private router: Router, private route: ActivatedRoute) {
    this.route.paramMap.subscribe(params => {
      this.id = params.get('id');
    });
  }

  ngOnInit(): void {
    this.getPost(this.id);
  }

  getPost = (id: string) => {
    this.postService.get(id).subscribe(res => {
      this.post = res;
    });

  }

  formSubmit = () => {
    if (
      !this.post.id ||
      !this.post.title ||
      !this.post.body ||
      !this.post.userId
    ) {
      return this.error;
    }

    if (!this.error) {
      this.addPost();
    }
  }
  addPost = () =>  {
    this.postService.put(this.post , this.id).subscribe(res => {
    });
  }
}
