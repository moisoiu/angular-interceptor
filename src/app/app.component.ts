import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'interceptorapp';

  constructor(private _http: HttpClient) {
    this._http.get('http://localhost:5000/api/values').subscribe(() => {
      console.log('Http Call is success from compoennt');
    }, (error) => {
      console.log('Http Call is failed from component -->>', error);
    })
  }
}
