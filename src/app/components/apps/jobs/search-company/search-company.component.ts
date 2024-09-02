import { Component, Input } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgSelectModule } from '@ng-select/ng-select';
import { SharedModule } from '../../../../shared/shared.module';
export interface SearchCompanyType {
  id: number;
  logo: string;
  title: string;
  subTitle: string;
  year: number;
  rating: string;
  reviews: number;
  noofemp: number;
  vacancies: number;
}
@Component({
  selector: 'app-search-company',
  standalone: true,
  imports: [SharedModule,NgbModule,NgSelectModule],
  templateUrl: './search-company.component.html',
  styleUrl: './search-company.component.scss'
})
export class SearchCompanyComponent {

  // @Input() companyArr!:SearchCompanyType[];
  [x: string]: any;
  constructor() {}
  companydata: SearchCompanyType[] = [
    //**.1 Object *//
    {
      id: 1,
      logo: './assets/images/company-logos/1.png',
      title: ' Spotech Technical Solutions ',
      subTitle: ' Kondapur, Hyderabad, ',
      year: 2019,
      rating: '',
      reviews: 142,
      noofemp: 345,
      vacancies: 50,
    },
    //**.2 Object *//
    {
      id: 1,
      logo: './assets/images/company-logos/2.png',
      title: ' G Technical Solutions',
      subTitle: ' Kondapur, Hyderabad, ',
      year: 2015,
      rating: '',
      reviews: 134,
      noofemp: 146,
      vacancies: 0,
    },

    //**.3 Object *//
    {
      id: 1,
      logo: './assets/images/company-logos/3.png',
      title: ' Diego Technical Solutions ',
      subTitle: ' Kondapur, Chennai,',
      year: 2013,
      rating: '',
      reviews: 234,
      noofemp: 146,
      vacancies: 40,
    },
    //**.4 Object *//
    {
      id: 1,
      logo: './assets/images/company-logos/7.png',
      title: ' Spoteck Solutions Pvt Ltd ',
      subTitle: ' Gachibowli, Banglore, ',
      year: 2002,
      rating: '4.5',
      reviews: 239,
      noofemp: 120,
      vacancies: 10,
    },
    //**.5 Object *//
    {
      id: 1,
      logo: './assets/images/company-logos/5.png',
      title: ' Vehement Capital Partners ',
      subTitle: ' Gachibowli, Banglore, ',
      year: 2017,
      rating: '',
      reviews: 239,
      noofemp: 120,
      vacancies: 10,
    },
    //**.6 Object *//
    {
      id: 6,
      logo: './assets/images/company-logos/6.png',
      title: ' Wonka Industries ',
      subTitle: ' Kukatpally, Hyderabad, ',
      year: 2000,
      rating: '',
      reviews: 764,
      noofemp: 120,
      vacancies: 10,
    },
  ];
  // Collapsecode
  public isCollapsed = true;
  public isCollapsed1 = true;

}
