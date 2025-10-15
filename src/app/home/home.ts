import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Child } from '../child/child';

@Component({
  selector: 'app-home',
  imports: [FormsModule, Child],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  title = 'Nouveau titre';
  url =
    'https://th.bing.com/th/id/OIP.TmxXSD3Y42kNtC5oEpLjEgHaCA?r=0&o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3';

  isAngular = true;

  changeLogo = () => {
    this.isAngular
      ? (this.url = 'https://www.pngall.com/wp-content/uploads/15/React-Logo-PNG-Images.png')
      : (this.url =
          'https://th.bing.com/th/id/OIP.TmxXSD3Y42kNtC5oEpLjEgHaCA?r=0&o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3');

    this.isAngular = !this.isAngular;
  };

  setTitle(updatedTitle: string) {
    this.title = updatedTitle;
  }
}
