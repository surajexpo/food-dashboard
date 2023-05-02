import { Component, OnInit, ViewChild } from "@angular/core";
import { QuestionService } from "src/app/services/gk/question.service";
import { MatSnackBar } from "@angular/material/snack-bar";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { MatPaginator } from "@angular/material/paginator";
import { MatTableDataSource } from "@angular/material/table";

export interface PeriodicElement {
  name: string;
  position: number;
  amount: number;
  code: string;
  discount_type:string;
  start_date:string;
  end_date:string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Conferrence', amount: 12, code: 'H54GHGJ',discount_type:'order item',start_date:'Jan 5, 2024',end_date:'Jan 25, 2024'},
  {position: 2, name: 'Something', amount: 14, code: 'GHFGHH',discount_type:'order item',start_date:'Jan 5, 2024',end_date:'Jan 25, 2024'},
  {position: 3, name: 'Something', amount: 15, code: 'H6E5F76VRB',discount_type:'order item',start_date:'Jan 5, 2024',end_date:'Jan 25, 2024'},
  {position: 4, name: 'Something', amount: 10, code: 'YTRH',discount_type:'order item',start_date:'Jan 5, 2024',end_date:'Jan 25, 2024'},
  {position: 5, name: 'XYZ', amount: 20, code: '76RV67R67',discount_type:'order item',start_date:'Jan 5, 2024',end_date:'Jan 25, 2024'},
  {position: 6, name: 'XYZ', amount: 34, code: '6GYJHH',discount_type:'order item',start_date:'Jan 5, 2024',end_date:'Jan 25, 2024'},
  {position: 7, name: 'XYZ', amount: 15, code: 'TY65V',discount_type:'order item',start_date:'Jan 5, 2024',end_date:'Jan 25, 2024'},
  {position: 8, name: 'Hydrogen', amount: 12, code: 'YTVR',discount_type:'order item',start_date:'Jan 5, 2024',end_date:'Jan 25, 2024'},
  {position: 9, name: 'Hydrogen', amount: 16, code: 'CRCER',discount_type:'order item',start_date:'Jan 5, 2024',end_date:'Jan 25, 2024'},
  {position: 10, name: 'AbC', amount: 22, code: 'CERTWE',discount_type:'order item',start_date:'Jan 5, 2024',end_date:'Jan 25, 2024'},
  {position: 11, name: 'Hydrogen', amount: 19, code: 'URICWER',discount_type:'order item',start_date:'Jan 5, 2024',end_date:'Jan 25, 2024'},
  {position: 12, name: 'Hydrogen', amount: 22, code: '43RCRE',discount_type:'order item',start_date:'Jan 5, 2024',end_date:'Jan 25, 2024'},
  {position: 13, name: 'Hydrogen', amount: 32, code: 'ECRER',discount_type:'order item',start_date:'Jan 5, 2024',end_date:'Jan 25, 2024'},
 ];
@Component({
  selector: 'app-coupon',
  templateUrl: './coupon.component.html',
  styleUrls: ['./coupon.component.scss']
})

export class CouponComponent implements OnInit {
  constructor() { }
  ngAfterViewInit() {
    this.questions.paginator = this.paginator;
  }
  ngOnInit(): void {
  }
  questions = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  displayedColumns: string[] = ["position", "name", "code", "amount","discount_type","start_date","end_date","action"];
  // displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  
 

  

}
