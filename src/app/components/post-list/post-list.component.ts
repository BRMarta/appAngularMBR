import { Component, OnInit, ViewChild } from '@angular/core';
import { PostService } from 'src/app/services/post.service';
import { IPost } from 'src/app/models/ipost';
import { IUser } from 'src/app/models/iuser';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {

  user: IUser = {};
  userExiste = false;
  posts: IPost[];
  displayedColumns: string[] = ['id', 'titulo', 'userID'];
  dataSource: MatTableDataSource<IPost>;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  constructor(private postService: PostService) { }

  ngOnInit(): void {
    this.getPosts();

    if (localStorage.getItem('user')) {
    this.user = JSON.parse(localStorage.getItem('user'));
    this.userExiste = true;
    this.getPostsByUser(this.user.id);
    this.dataSource = new MatTableDataSource<IPost>(this.posts);
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.user, null, 4));
    }
    else
    {
      this.getPosts();
      this.dataSource = new MatTableDataSource<IPost>(this.posts);
    }
  }

  getPosts = () => {
    this.postService.getQuery().subscribe(res => {
      this.posts = res;
      console.log(res);
      this.dataSource = new MatTableDataSource<IPost>(this.posts);
      this.dataSource.paginator = this.paginator;
    });

  }
  getPostsByUser = (id: string) => {
    this.postService.getByUser(`${id}`).subscribe(res => {
      this.posts = res;
      this.dataSource = new MatTableDataSource<IPost>(this.posts);
      this.dataSource.paginator = this.paginator;
    });
  }
  public doFilter = (value: string) => {
    this.dataSource.filter = value.trim().toLocaleLowerCase();
  }
}
