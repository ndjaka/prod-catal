import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-produits',
  templateUrl: './produits.component.html',
  styleUrls: ['./produits.component.css']
})
export class ProduitsComponent implements OnInit {

  produits: any;
  constructor(private http: HttpClient) { }

  ngOnInit() {

  }
 ongetProducts() {
    this.http.get("http://localhost:8080/prod_catal/webresources/produits/")
    .subscribe(data => {
   this.produits = data;
    }, err => {
          console.log('error');
        })
 }

}
