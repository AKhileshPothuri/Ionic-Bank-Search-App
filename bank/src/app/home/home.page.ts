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
  searchTerm: string ;
  filteritems:any;
  place: any;
 public banks:any;
  
  constructor(private http: HttpClient) {
    this.ifsc="";
 
  }
  Retrievedata() {
    // Load the data
   
let area=this.place;
if(area!=null)
    {this.prepareDataRequest(area)
      .subscribe(
        data => {
          // Set the data to display in the template
          this.banks = data;
          
          console.log(this.banks);
          this.filterItems= this.banks;
         
        }
      );
  }}
  filterItems(ev:any) {
    let val = ev.target.value;

    this.filteritems = this.banks.filter(bank =>  bank.bank_name.toLowerCase().indexOf(val.toLowerCase()) > -1 
    );}
  private prepareDataRequest(areas:string): Observable<object> {
    // Define the data URL
    const dataUrl = 'https://vast-shore-74260.herokuapp.com/banks?city='+areas;
    // Prepare the request
    return this.http.get(dataUrl);
  }
}
