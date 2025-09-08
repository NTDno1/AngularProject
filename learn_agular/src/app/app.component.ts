import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HeaderLayoutComponent } from "./shared/header-layout/header-layout.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  imports : [HeaderLayoutComponent, FormsModule],
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'LearnAgular';
  IsHiden = true;
  inta = 12345; 

  btnMessage = 'Đã click';
  messagesTwoWayBinding = '';

  HandleBtn(): void{
    this.btnMessage = this.btnMessage === 'Okok' ? 'Đã click' : 'Okok'
  }
  HandleChangeInput (): void{
    console.log("123123123");
  }
  HandleBtn2 (): void{
    console.log("NGuyexn văn an");
  }
}