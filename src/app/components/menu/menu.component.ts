import { Component, OnInit } from '@angular/core';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { faLaptop} from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  faHome=faHome;
  faLaptop=faLaptop;
  constructor() { }

  ngOnInit() {
  }

}
