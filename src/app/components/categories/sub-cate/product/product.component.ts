import { Component, OnInit, ViewChild } from "@angular/core";
import { QuestionService } from "src/app/services/gk/question.service";
import { MatSnackBar } from "@angular/material/snack-bar";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Shared } from "src/app/services/gk/shared.service";
import { question, heading } from "../../../../models/gk/gk";
import { PopUpService } from "src/app/services/popup/pop-up.service";
import { MatPaginator } from "@angular/material/paginator";
import { MatTableDataSource } from "@angular/material/table";
@Component({
  selector: "app-gkquestion",
  templateUrl: "./product.component.html",
  styleUrls: ["./product.component.scss"],
})
export class ProductComponent implements OnInit {
  constructor(
    private questionService: QuestionService,
    private snack: MatSnackBar,
    private shared: Shared,
    private popup: PopUpService
  ) {}
  heading: any;
  hId: string = "";
  currentId: string = "";
  // questions:question[]=[];
  questions = new MatTableDataSource<question>();
  ngOnInit(): void {
    this.getHeadingData();
  }
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  displayedColumns: string[] = ["position", "product", "answer", "action"];

  ngAfterViewInit() {
    this.questions.paginator = this.paginator;
  }
  getHeadingData() {
    this.heading = this.shared.getHeading();
    this.hId = this.heading._id;
    console.log(this.heading);
    this.getallQuestion();
  }
  getallQuestion() {
    const data= [
      { product: "ice-cream", price: 50 },
      { product: "Ghee", price: 600 },
      { product: "Butter", price: 400 },
    ];
    // this.questions.data.push(data);
    // console.log('headind id', this.hId);
    // this.questionService
    //   .getAllQuestion({ hId: this.hId })
    //   .subscribe((result: any) => {
    //     this.questions.data = result;
    //     console.log('quation data', this.questions.data);
    //   });
  }
  questionForm = new FormGroup({
    question: new FormControl("", [Validators.required]),
    answer: new FormControl("", [Validators.required]),
    hId: new FormControl(""),
  });
  get getControl() {
    return this.questionForm.controls;
  }
  addQuestion() {
    this.questionForm.controls["hId"].setValue(this.hId);
    console.log(this.questionForm.value);
    this.questionService
      .addQuestion(this.questionForm.value)
      .subscribe((result) => {
        console.log(result);
        this.snack.open("Question successfully added", "ok", {
          horizontalPosition: "right",
          verticalPosition: "top",
          duration: 2000,
        });
        this.getallQuestion();
      });
  }
  deleteQuestion(id: string) {
    this.popup
      .confimation("Are You Sure You Want to Delete This?", "Ok", "Cancel")
      .subscribe((res: any) => {
        if (res) {
          this.questionService.deleteQuestion(id).subscribe((response) => {
            console.log(response);
            this.snack.open("Subject has been deleted", "ok", {
              horizontalPosition: "right",
              verticalPosition: "top",
              duration: 2000,
            });
            this.getallQuestion();
          });
        }
      });
  }

  editHeading(index: number, id: string) {
    const data = this.questions.data[index];
    console.log(data);
    this.questionForm.controls["question"].setValue(data.question);
    this.questionForm.controls["answer"].setValue(data.answer);
    this.questionForm.controls["hId"].setValue(this.hId);
    this.currentId = id;
    console.log(this.questionForm.value);
  }
  updateHeading() {
    this.questionService
      .updateQuestion(this.currentId, this.questionForm.value)
      .subscribe((result) => {
        console.log(result);
        this.snack.open("Heading has been updated", "ok", {
          horizontalPosition: "right",
          verticalPosition: "top",
          duration: 2000,
        });
        this.getallQuestion();
      });
  }
}
