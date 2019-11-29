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
  filteritems:string;
  place: string;
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
          
         
        }
      );
  }}
  setFilteredItems() {
 
    this.banks = this.filterItems(this.searchTerm);
console.log(this.banks);
}
  filterItems(searchTerm:any) {
    return this.banks.filter((item) => {
      return item.bank_name.includes(searchTerm);
  });  

}
  
 
  private prepareDataRequest(areas:string): Observable<object> {
    // Define the data URL
    const dataUrl = 'https://vast-shore-74260.herokuapp.com/banks?city='+areas;
    // Prepare the request
    return this.http.get(dataUrl);
  }
}
