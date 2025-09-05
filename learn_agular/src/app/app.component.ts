import { Component } from "@angular/core";
import { HeaderLayoutComponent } from "./shared/header-layout/header-layout.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  imports : [HeaderLayoutComponent],
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'LearnAgular';
  IsHiden = true;
  inta = 12345; 

  btnMessage = 'Đã click'

  HandleBtn(): void{
    this.btnMessage = 'Okok'
  }
}