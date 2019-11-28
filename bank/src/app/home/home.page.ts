import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  ifsc:string;
  area:string;
  constructor(private http: HttpClient) {
    this.ifsc="";
  }
  ionViewWillEnter() {
    // Load the data
this.area="MUMBAI";
    this.prepareDataRequest(this.area)
      .subscribe(
        data => {
          // Set the data to display in the template
          this.ifsc = JSON.stringify(data);
          console.log(this.ifsc);
        }
      );
  }
  private prepareDataRequest(areas:string): Observable<object> {
    // Define the data URL
    const dataUrl = 'https://vast-shore-74260.herokuapp.com/banks?city='+areas;
    // Prepare the request
    return this.http.get(dataUrl);
  }
}
