import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/services/post.service';
import { CommentService } from 'src/app/services/comment.service';
import { IPost } from 'src/app/models/ipost';
import { Router, ActivatedRoute } from '@angular/router';
import { IComment } from 'src/app/models/icomment';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.scss']
})
export class PostDetailComponent implements OnInit {

  public post: IPost = {};
  public comments: IComment = {};
  private id: string;

  constructor(private postService: PostService, private commentService: CommentService , private router: Router,
              private route: ActivatedRoute) {
    this.route.paramMap.subscribe(params => {
      this.id = params.get('id');
    });
    /**
     *  this.route.queryParamMap.subscribe(params => {this.id = params.get('id');});
     */
  }

  ngOnInit(): void {
    this.getPost(this.id);
    this.getComment(this.id);
  }

  getPost = (id: string) => {
    this.postService.getById(id).subscribe(res => {
      this.post = res;
    });

  }
  getComment = (id: string) => {
    this.commentService.get(id).subscribe(resu => {
      this.comments = resu;
    });
  }

}
