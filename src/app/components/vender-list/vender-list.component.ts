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
  store_name:string;
  // address:{
  //   house_no:number,
  //   area:string,
  //   city:string,
  //   zip:number,
  // };
  address:string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'John Cena', phone: 1234567890,store_name:'ABC Food', address:'C-432 Sector 32 Noida up'},
  {position: 1, name: 'Bobby', phone: 1234567890,store_name:'ABC Food', address:'C-432 Sector 32 Noida up'},
  {position: 1, name: 'The Rock', phone: 1234567890,store_name:'ABC Food', address:'C-432 Sector 32 Noida up'},
  {position: 1, name: 'Roman Reing', phone: 1234567890,store_name:'ABC Food', address:'C-432 Sector 32 Noida up'},
  {position: 1, name: 'Goldberg', phone: 1234567890,store_name:'ABC Food', address:'C-432 Sector 32 Noida up'},
  ];
@Component({
  selector: 'app-vender-list',
  templateUrl: './vender-list.component.html',
  styleUrls: ['./vender-list.component.scss']
})
export class VenderListComponent implements OnInit {
  constructor() { }
  ngAfterViewInit() {
    this.questions.paginator = this.paginator;
  }
  ngOnInit(): void {
    this.pageSlice = this.venderData.slice(0, 10);
  }
venderData:any=[
  {position: 1, name: 'John Cena', phone: 1234567890,store_name:'ABC Food', address:'C-432 Sector 32 Noida up'},
  {position: 2, name: 'Bobby', phone: 1234567890,store_name:'ABC Food', address:'C-432 Sector 32 Noida up'},
  {position: 3, name: 'The Rock', phone: 1234567890,store_name:'ABC Food', address:'C-432 Sector 32 Noida up'},
  {position: 4, name: 'Roman Reing', phone: 1234567890,store_name:'ABC Food', address:'C-432 Sector 32 Noida up'},
  {position: 5, name: 'Goldberg', phone: 1234567890,store_name:'ABC Food', address:'C-432 Sector 32 Noida up'},

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
    if (endIndex > this.venderData.length) {
      endIndex = this.venderData.length;
    }
    this.pageSlice = this.venderData.slice(startIndex, endIndex);
  }
  questions = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  displayedColumns: string[] = ["position", "name", "phone","store_name","address"];
  // displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  

}
