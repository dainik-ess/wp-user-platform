import { Component } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-select2',
  standalone: true,
  imports: [SharedModule,NgSelectModule,FormsModule,ReactiveFormsModule,NgSelectModule],
  templateUrl: './select2.component.html',
  styleUrls: ['./select2.component.scss']
})
export class Select2Component {

  selectedSimpleItem = 'Selection-3';
  simpleItems: any = [];
  selectedCars = ['Opel'];
  cars = [
    { id: 1, name: 'Volvo' },
    { id: 2, name: 'Saab', disabled: true },
    { id: 3, name: 'c' },
    { id: 4, name: 'Audi' },
  ];
  //max selecting Limiting
  simpleItems2: any = [];
  selectedCars2 = ['Volvo'];
  cars2 = [
    { id: 1, name: 'Volvo' },
    { id: 2, name: 'Saab', disabled: true },
    { id: 3, name: 'Opel' },
    { id: 4, name: 'Audi' },
  ];
  // singel select
  selectedSimpleItem1 = 'Select city';
  simpleItems1: any = [];
  selectCity = [];
  //Multiple Select With placeholders
  selectedSimpleItem2 = 'Select Cars';
  cars1 = [
    { id: 1, name: 'Volvo' },
    { id: 2, name: 'Saab' },
    { id: 3, name: 'Opel' },
    { id: 4, name: 'Audi' },
  ];
  //Templating
  cities1 = [
    {
      id: 1,
      name: 'Andrew',
      avatar: './assets/images/faces/select2/p-5.jpg',
    },
    {
      id: 2,
      name: 'Maya',
      avatar: './assets/images/faces/select2/p-4.jpg',
    },
    {
      id: 3,
      name: 'Brodus Axel',
      avatar: './assets/images/faces/select2/p-2.jpg',
    },
    {
      id: 4,
      name: 'Goldens',
      avatar: './assets/images/faces/select2/p-1.jpg',
    },
    {
      id: 5,
      name: 'Angelina',
      avatar: './assets/images/faces/select2/p-2.jpg',
    },
  ];
  selectedCity = this.cities1[0].name;
  //Templating Selectiones
  cities2 = [
    {
      id: 1,
      name: 'Andrew',
      avatar: './assets/images/faces/select2/p-5.jpg',
    },
    {
      id: 2,
      name: 'Maya',
      avatar: './assets/images/faces/select2/p-4.jpg',
    },
    {
      id: 3,
      name: 'Brodus Axel',
      avatar: './assets/images/faces/select2/p-2.jpg',
    },
    {
      id: 4,
      name: 'Goldens',
      avatar: './assets/images/faces/select2/p-1.jpg',
    },
    {
      id: 5,
      name: 'Angelina',
      avatar: './assets/images/faces/select2/p-2.jpg',
    },
  ];
  selectedCity1 = this.cities2[0].name;

  // Disable and select contorl
  selectedSimpleItem3= 'Selection-4';
  simpleItems3: any = [];
  selectedCars3 = ['Volvo'];
  cars3= [
    { id: 1, name: 'Volvo' },
    { id: 2, name: 'Saab'},
    { id: 3, name: 'Opel' },
    { id: 4, name: 'Audi' },
  ];
  isCarsDisabled = false;

  ngOnInit() {
    this.simpleItems = [
      'Selection-1',
      'Selection-2',
      'Selection-3',
      'Selection-4',
      'Selection-5',
    ];
    this.simpleItems1 = [
      'Select city',
      'Texas',
      'Geogia',
      'California',
      ' Washington D C',
      'Virigine',
    ];
    this.simpleItems3= [
      'Selection-1',
      'Selection-2',
      'Selection-3',
      'Selection-4',
      'Selection-5',
    ];
  }
  toggleDisabled() {
    const car: any = this.cars[1];
    car.disabled = !car.disabled;
  }
  toggleDisabled1() {
    const car: any = this.cars1[1];
    car.disabled = !car.disabled;
  }
  enable() {
    this.isCarsDisabled = false;
  }
  disable(){
    this.isCarsDisabled = !this.isCarsDisabled;
  }
  filterCities(searchValue: string) {
    // Filter the cities based on the searchValue and update the 'cities1' array
    this.cities1 = this.filterCitiesArray(searchValue);
  }
  
  filterCitiesArray(searchValue: string) {
    // Implement your filtering logic here and return the filtered array
    return this.cities1.filter(city => city.name.toLowerCase().includes(searchValue.toLowerCase()));
  }
  
 
}
