import {AfterContentInit, AfterViewChecked, AfterViewInit, Component, OnInit} from '@angular/core';
import {timeout} from "rxjs/operators";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements AfterContentInit  {
  title = 'shop';
  scrollComplete = false;

  ngAfterContentInit(): void {
    setTimeout(() => {
      this.scrollToBottom();
    }, 500);
  }

  private scrollToBottom(): void {
    let container = document.getElementById("scrollMe");
    if (!this.scrollComplete) {
      this.scrollComplete = true;
      console.log(container);
      container.scrollIntoView({ block: 'end',  behavior: 'smooth' });
    }
  }
}
