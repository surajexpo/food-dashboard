import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { PageEvent } from '@angular/material/paginator';
import { SubjectService } from 'src/app/services/gk/subject.service';
import { Shared } from 'src/app/services/gk/shared.service';
import { PopUpService } from 'src/app/services/popup/pop-up.service';
import { subject } from '../../models/gk/gk';
import { Router} from '@angular/router';
@Component({
  selector: 'app-gk',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss'],
})
export class CategoriesComponent implements OnInit {
  constructor(
    private subService: SubjectService,
    private shared: Shared,
    private snack: MatSnackBar,
    private popup: PopUpService,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.getAllSubjects();
  }
  // Pagination
  length = 0;
  pageSize = 10;
  pageIndex = 0;
  pageSizeOptions = [5, 10, 25];
  showFirstLastButtons = true;
  subjectData: any = [];
  pageSlice: any = [];
  handlePageEvent(event: PageEvent) {
    console.log(event);
    const startIndex = event.pageIndex * event.pageSize;
    let endIndex = startIndex + event.pageSize;
    this.length = event.length;
    this.pageSize = event.pageSize;
    this.pageIndex = event.pageIndex;
    if (endIndex > this.subjectData.length) {
      endIndex = this.subjectData.length;
    }
    this.pageSlice = this.subjectData.slice(startIndex, endIndex);
  }
  OperationName: string = '';
  currentIndex: number = 0;
  addSubjectForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
  });
  get getControl() {
    return this.addSubjectForm.controls;
  }
  getAllSubjects() {
    this.subService.getAllSubject().subscribe((result: any) => {
      console.log(result);
      result.forEach(() => {
        this.subjectData = result;
        this.pageSlice = this.subjectData.slice(0, 10);
      });
    });
  }
  addSubject() {
    const data = this.addSubjectForm.value;
    this.subService.addSubject(data).subscribe({
      next: (res: any) => {
        console.log(res);
        this.snack.open('Subject successfully added', 'ok', {
          horizontalPosition: 'right',
          verticalPosition: 'top',
          duration: 2000,
        });
        this.getAllSubjects();
        this.addSubjectForm.reset();
      },
      error: (err) => {
        console.log('error messages', err.error.error);
        this.snack.open(err.error.error, 'ok', {
          horizontalPosition: 'right',
          verticalPosition: 'top',
          duration: 2000,
        });
      },
    });
  }
  openAdd() {
    this.OperationName = 'Add';
  }
  deleteSubject(id: string) {
    this.popup
      .confimation('Are You Sure You Want to Delete This?', 'Ok', 'Cancel')
      .subscribe((res: any) => {
        if (res) {
          this.subService.deleteSubject(id).subscribe((response) => {
            console.log(response);
            this.snack.open('Subject has been deleted', 'ok', {
              horizontalPosition: 'right',
              verticalPosition: 'top',
              duration: 2000,
            });
            this.getAllSubjects();
          });
        }
      });
  }
  openAlert() {
    this.popup.alert('Are You Sure', 'yes').subscribe((res: any) => {
      console.log(res);
    });
  }
  editSubject(index: number) {
    this.OperationName = 'Edit';
    this.currentIndex = index;
    this.addSubjectForm.controls['name'].setValue(this.subjectData[index].name);
  }
  updateSubject() {
    this.subjectData[this.currentIndex].name =
      this.addSubjectForm.controls['name'].value;

    const id = this.subjectData[this.currentIndex]._id;
    const data = this.subjectData[this.currentIndex];

    this.subService.updateSubject(id, data).subscribe((result) => {
      console.log(result);
      this.snack.open('Subject has been updated', 'ok', {
        horizontalPosition: 'right',
        verticalPosition: 'top',
        duration: 2000,
      });
      this.getAllSubjects();
    });
  }
  setSubject(data: subject) {
    this.shared.setSubject(data);
    this.router.navigate(['/dashboard/heading'])
  }
}
