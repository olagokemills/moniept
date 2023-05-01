import { Component } from '@angular/core';
import { HelperService } from '../helper.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {

  isHome:boolean = true;
  currentRoute!: string;
  constructor(
   public Helper:HelperService
  ){  }
}
