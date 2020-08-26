import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/services/post.service';
import { IPost } from 'src/app/models/ipost';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-post-delete',
  templateUrl: './post-delete.component.html',
  styleUrls: ['./post-delete.component.scss']
})
export class PostDeleteComponent implements OnInit {

  public post: IPost = {};
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
    this.postService.getById(id).subscribe(res => {
      this.post = res;
    });

  }
  delete = () => {
    this.postService.delete(this.id).subscribe(res => {
      this.post = res;
    });
    alert('Borrado con éxito, redirigiendo...');
    this.router.navigate(['/']);
  }

}
