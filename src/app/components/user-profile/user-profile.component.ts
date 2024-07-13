import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {GithubApiService} from "../../services/github-api.service";
import {Observable} from "rxjs";


@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html'
})
export class UserProfileComponent implements OnInit {
  user: any;

  constructor(private route: ActivatedRoute, private githubApiService: GithubApiService) {

    this.route.params.subscribe(params => {
      const loginTemp = params['login'];
      this.githubApiService.getUser(loginTemp).toPromise().then(user => {
        this.user = user;
      }).catch(error => {
        console.error(error);
      });
    });
  }

  ngOnInit(): void {

  }
}
