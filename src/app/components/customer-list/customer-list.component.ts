import { Component, OnInit, ViewChild } from "@angular/core";
import { QuestionService } from "src/app/services/gk/question.service";
import { MatSnackBar } from "@angular/material/snack-bar";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { MatPaginator } from "@angular/material/paginator";
import { MatTableDataSource } from "@angular/material/table";
import { PageEvent } from "@angular/material/paginator";
export interface PeriodicElement {
  name: string;
  position: number;
  phone: number;
  // address:{
  //   house_no:number,
  //   area:string,
  //   city:string,
  //   zip:number,
  // };
  address:string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Birpal', phone: 1234567890, address:'A-202 Sector 62 Noida up'},
  {position: 2, name: 'Sanjay Verma', phone: 1234567890, address:'C-42 Sector 62 Noida up'},
  {position: 3, name: 'Neeraj Sharma', phone: 1234567890, address:'G-187 Sector 63 Noida up'},
  {position: 4, name: 'Bhagwan Das', phone: 1234567890, address:'A-202 Sector 62 Noida up'},
  ];

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.scss']
})
export class CustomerListComponent implements OnInit {

  constructor() { }
  ngAfterViewInit() {
    this.questions.paginator = this.paginator;
  }
  ngOnInit(): void {
    this.pageSlice = this.customerData.slice(0, 10);
  }
  customerData:any=[{position: 1, name: 'Birpal', phone: 1234567890, address:'A-202 Sector 62 Noida up'},
  {position: 2, name: 'Sanjay Verma', phone: 1234567890, address:'C-42 Sector 62 Noida up'},
  {position: 3, name: 'Neeraj Sharma', phone: 1234567890, address:'G-187 Sector 63 Noida up'},
  {position: 4, name: 'Bhagwan Das', phone: 1234567890, address:'A-202 Sector 62 Noida up'},
  {position: 5, name: 'Neha Verma', phone: 1234567890, address:'C-42 Sector 62 Noida up'},
  {position: 6, name: 'Vikash Sharma', phone: 1234567890, address:'G-187 Sector 63 Noida up'},
  {position: 7, name: 'Ankit Pal', phone: 1234567890, address:'A-202 Sector 62 Noida up'},
];

length = 0;
  pageSize = 10;
  pageIndex = 0;
  pageSizeOptions = [5, 10, 25];
  showFirstLastButtons = true;
  pageSlice: any = [];
  handlePageEvent(event: PageEvent) {
    console.log(event);
    const startIndex = event.pageIndex * event.pageSize;
    let endIndex = startIndex + event.pageSize;
    this.length = event.length;
    this.pageSize = event.pageSize;
    this.pageIndex = event.pageIndex;
    if (endIndex > this.customerData.length) {
      endIndex = this.customerData.length;
    }
    this.pageSlice = this.customerData.slice(startIndex, endIndex);
  }
  questions = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  displayedColumns: string[] = ["position", "name", "phone","address"];
  // displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  

}
