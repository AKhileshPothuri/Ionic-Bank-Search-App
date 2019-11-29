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
  test:string;
  constructor(private http: HttpClient) {
    this.ifsc="";
 this.test="YES BANK";
 console.log(this.test.includes("YES"));
  }
  Retrievedata() {
    // Load the data
   
let area=this.place;
if(area!=null)
    {this.prepareDataRequest(area)
      .subscribe(
        data => {
          // Set the data to display in the template
          //this.banks = JSON.stringify(data);
          this.banks=data;
          console.log(this.banks);
          
         
        }
      );
  }}
  setFilteredItems() {
 console.log(this.searchTerm);
 if(this.searchTerm!=null)
    this.banks = this.filterItems(this.searchTerm);
console.log(this.banks);
}
  filterItems(searchTerm:string) {
    console.log(searchTerm);
    return this.banks.filter((item) => {
      console.log(item.bank_name.includes(searchTerm));     
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
