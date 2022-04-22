import { Component, OnInit } from '@angular/core';
import { StatusService } from './services/status.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'node-express-angular';
  reviewer = 'DOWN';

  constructor(private statusService: StatusService) { }

  ngOnInit() {
  }
}
