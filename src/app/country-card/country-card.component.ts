import { Component, OnInit, Input } from "@angular/core";
import { CountryService } from "../country.service";

@Component({
  selector: "app-country-card",
  templateUrl: "./country-card.component.html",
  styleUrls: ["./country-card.component.css"]
})

export class CountryCardComponent implements OnInit {
  @Input() country: CountryService;

  ngOnInit() {
    //this.countryservice.getCountries().subscribe(data => {
    //console.log(data);
    //this.countryservice = data["CountryCode"],["CountryName"];
    //});
  }
}
