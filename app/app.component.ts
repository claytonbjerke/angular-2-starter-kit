import { Component } from '@angular/core';

export class TwitterAccount {
    id: number;
    handle: string;
}

@Component({
  selector: 'my-app',
  template: `
      <h3>{{title}}</h3>
      <h5>Twitter Acount:</h5>
      <div>ID: {{twitter.id}}</div>
      <div>HANDLE: @{{twitter.handle}}</div>
      <div>
        <label>EDIT HANDLE: </label>
        <input [(ngModel)]="twitter.handle" placeholder="@twitterhandle">
      </div>
  `
})

export class AppComponent {
    title = 'Angular 2 Starter Kit';
    twitter: TwitterAccount = {
        id: 1,
        handle: 'claytonbjerke'
    };
}
