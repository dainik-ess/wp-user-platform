import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgSelectModule } from '@ng-select/ng-select';
import { SharedModule } from '../../../../shared/shared.module';
interface ProjectsListImageType {
  name: string;
  image: string;
}
export interface ProjectListType {
  id: number;
  logo: string;
  title: string;
  subTitle: string;
  images: ProjectsListImageType[];
  priority: string;
  priorityBadge: string;
  description: string;
  statusPercentage: number;
  status: string;
  AssigDate: string;
  DueDate: string;
  bg:string
}
@Component({
  selector: 'app-project-list',
  standalone: true,
  imports: [SharedModule,NgSelectModule,FormsModule,NgbModule,RouterModule],
  templateUrl: './project-list.component.html',
  styleUrl: './project-list.component.scss'
})
export class ProjectListComponent {
  constructor() {}
  productsList: ProjectListType[] = [
    //**First Object...//
    {
      id: 1,
      logo: './assets/images/company-logos/1.png',
      title: 'Design & Developing New Project',
      subTitle: '18/22',
      images: [
        { name: '', image: './assets/images/faces/2.jpg' },
        { name: '', image: './assets/images/faces/8.jpg' },
        { name: '', image: './assets/images/faces/2.jpg' },
        { name: '', image: './assets/images/faces/10.jpg' },
        { name: '', image: './assets/images/faces/2.jpg' },
        { name: '', image: './assets/images/faces/8.jpg' },
      ],
      priority: 'Low',
      priorityBadge: 'badge bg-success-transparent',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi maiores similique tempore.',
      statusPercentage: 80,
      status: '80%',
      AssigDate: '24,may 2023',
      DueDate: '12,jul 2023',
      bg:'danger-transparent'
    },
    //**Second Object...//
    {
      id: 2,
      logo: './assets/images/company-logos/2.png',
      title: 'Content Management System (CMS) Integration',
      subTitle: '26/68',
      images: [
        { name: '', image: './assets/images/faces/12.jpg' },
        { name: '', image: './assets/images/faces/9.jpg' },
        { name: '', image: './assets/images/faces/1.jpg' },
        { name: '', image: './assets/images/faces/9.jpg' },
        { name: '', image: './assets/images/faces/12.jpg' },
        { name: '', image: './assets/images/faces/5.jpg' },
        { name: '', image: './assets/images/faces/1.jpg' },
      ],
      priority: 'Medium',
      priorityBadge: 'badge bg-info-transparent',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi maiores similique tempore.',
      statusPercentage: 45,
      status: '45%',
      AssigDate: '20,May 2023',
      DueDate: '10,jun 2023',
      bg:'warning-transparent'
    },
    //**Third Object...//
    {
      id: 3,
      logo: './assets/images/company-logos/3.png',
      title: 'Task Scheduler and Automation',
      subTitle: '21/45',
      images: [
        { name: 't1', image: './assets/images/faces/5.jpg' },
        { name: 't2', image: './assets/images/faces/6.jpg' },
        { name: 't3', image: './assets/images/faces/7.jpg' },
      ],
      priority: 'Low',
      priorityBadge: 'badge bg-success-transparent',

      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi maiores similique tempore.',
      statusPercentage: 66,
      status: '66%',
      AssigDate: '31,May 2023',
      DueDate: '10,july 2023',
      bg:'secondary-transparent'
    },
    //**Fourth Object...//
    {
      id: 4,
      logo: './assets/images/company-logos/5.png',
      title: 'Advanced Search and Filtering.',
      subTitle: '45/54',
      images: [
        { name: '', image: './assets/images/faces/3.jpg' },
        { name: '', image: './assets/images/faces/5.jpg' },
        { name: '', image: './assets/images/faces/9.jpg' },
        { name: '', image: './assets/images/faces/14.jpg' },
        { name: '', image: './assets/images/faces/13.jpg' },
        { name: '', image: './assets/images/faces/20.jpg' },
        { name: '', image: './assets/images/faces/19.jpg' },
        { name: '', image: './assets/images/faces/14.jpg' },
      ],
      priority: 'High',
      priorityBadge: 'badge bg-danger-transparent',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi maiores similique tempore.',
      statusPercentage: 89,
      status: '89% ',
      AssigDate: '02,jan 2023',
      DueDate: '15,Jan 2023',
      bg:'success-transparent'
    },
    //**Fifth Object...//
    {
      id: 5,
      logo: './assets/images/company-logos/8.png',
      title: 'Data Export and Reporting',
      subTitle: '14/26',
      images: [
        { name: '', image: './assets/images/faces/10.jpg' },
        { name: '', image: './assets/images/faces/15.jpg' },
        { name: '', image: './assets/images/faces/17.jpg' },
        { name: '', image: './assets/images/faces/20.jpg' },
        { name: '', image: './assets/images/faces/5.jpg' },
      ],
      priority: 'Medium',
      priorityBadge: 'badge bg-info-transparent',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi maiores similique tempore.',
      statusPercentage: 60,
      status: '60% ',
      AssigDate: '29,May 2023',
      DueDate: '08,jan 2023',
      bg:'primary-transparent'
    },
    //**Sixth Object...//
    {
      id: 6,
      logo: './assets/images/company-logos/10.png',
      title: 'Activity Log and Audit Trail',
      subTitle: '28/64',
      images: [
        { name: '', image: './assets/images/faces/7.jpg' },
        { name: '', image: './assets/images/faces/13.jpg' },
      ],
      priority: 'Low',
      priorityBadge: 'badge bg-success-transparent',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi maiores similique tempore.',
      statusPercentage: 45,
      status: '45% ',
      AssigDate: '04,Jan 2023',
      DueDate: '15.Jan 2023',
      bg:'success-transparent'
    },
    //**sevanth Object...//
    {
      id: 7,
      logo: './assets/images/company-logos/9.png',
      title: 'Role-Based Access Control (RBAC) Implementation...',
      subTitle: '86/122',
      images: [
        { name: '', image: './assets/images/faces/5.jpg' },
        { name: '', image: './assets/images/faces/14.jpg' },
        { name: '', image: './assets/images/faces/15.jpg' },
        { name: '', image: './assets/images/faces/14.jpg' },
        { name: '', image: './assets/images/faces/5.jpg' },
      ],
      priority: 'High',
      priorityBadge: 'badge bg-danger-transparent',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi maiores similique tempore.',
      statusPercentage: 65,
      status: '65% ',
      AssigDate: ' 24,Jan 2023',
      DueDate: '05,July 2023',
      bg:'info-transparent'
    },
    //**..Eighth Object */
    {
      id: 8,
      logo: './assets/images/company-logos/6.png',
      title: 'Customizable Themes and Layouts',
      subTitle: ' 20/26',
      images: [
        { name: '', image: './assets/images/faces/13.jpg' },
        { name: '', image: './assets/images/faces/16.jpg' },
        { name: '', image: './assets/images/faces/13.jpg' },
      ],
      priority: 'Medium',
      priorityBadge: 'badge bg-info-transparent',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi maiores similique tempore.',
      statusPercentage: 75,
      status: '75% ',
      AssigDate: '20,Jan 2023',
      DueDate: '18,July 2023',
      bg:'teal-transparent'
    },
  ];

  selectedSimpleItem = 'Sort By'; 
  simpleItems:any=[];

  ngOnInit() {
    this.simpleItems = ['Sort By','A-Z','Data Added','Newest','type',];
}
}
