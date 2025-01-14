import { Component } from '@angular/core';
import { SideBarComponent } from "../../../../shared/components/side-bar/side-bar.component";
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [SideBarComponent, RouterOutlet],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {

}
