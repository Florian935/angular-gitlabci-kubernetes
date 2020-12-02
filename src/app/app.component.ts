import { environment } from './../environments/environment';
import { HttpService } from './service/http.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  environment: string;
  response: string;

  constructor(private _httpService: HttpService) {}

  ngOnInit() {
    this.environment = environment.production ? 'Production' : 'Dev';
    this._httpService.getKida().subscribe((res: string) => this.response = res);
  }

}
