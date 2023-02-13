import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'demo';
  name = '';

  countLiked = 0;


  like(title: string){
    this.countLiked++;
    console.log(`Like ${title}`);
  }
}
