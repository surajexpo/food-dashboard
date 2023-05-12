import { AfterViewInit, Component, ViewChild, OnInit } from "@angular/core";
import { HeadingService } from "src/app/services/gk/heading.service";
import { MatSnackBar } from "@angular/material/snack-bar";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Shared } from "src/app/services/gk/shared.service";
import { PageEvent } from "@angular/material/paginator";
import { PopUpService } from "src/app/services/popup/pop-up.service";
import { Router, TitleStrategy } from "@angular/router";
@Component({
  selector: "app-gkquestion",
  templateUrl: "./product.component.html",
  styleUrls: ["./product.component.scss"],
})
export class ProductComponent implements OnInit {
  constructor(
    private headingService: HeadingService,
    private snack: MatSnackBar,
    private shared: Shared,
    private popup: PopUpService,
    private router: Router
  ) {
    // this.subjectData = this.shared.getSubject();
  }

  ngOnInit(): void {
    this.getSubjectData();
  }
  // subjectData!: subject;
  headingData: any = [
    {
      name: "Paneer",
      img: "../../../../assets/images/paneer.jpeg",
      price:320,
    },
    {
      name: "Milk Powder",
      img: "../../../../assets/images/instant-milk-powder.webp",
      price:400,
    },
    {
      name: "Camel Milk",

      img: "../../../../assets/images/camel-milk-powder.webp",
      price:100,
    },
    {
      name: "Pure Ghee",
      img: "../../../../assets/images/pure-ghee.webp",
      price:700,
    },
    {
      name: "Vanilla Ice Cream",
      img: "../../../../assets/images/vanilla-ice-cream.webp",
      price:170,
    },
    {
      name: "Kulfi Ice Cream",
      img: "../../../../assets/images/kulfi-ice-cream.webp",
      price:90,
    },
    {
      name: "Buffalo Milk",
      img: "../../../../assets/images/buffalo-milk.webp",
      price:70,
    },
  ];
  sId: string = "";
  currentId: string = "";
  // Pagination
  length = 0;
  pageSize = 10;
  pageIndex = 0;
  pageSizeOptions = [5, 10, 25];
  showFirstLastButtons = true;
  // headingData: heading[] = [];
  pageSlice: any = [];
  handlePageEvent(event: PageEvent) {
    console.log(event);
    const startIndex = event.pageIndex * event.pageSize;
    let endIndex = startIndex + event.pageSize;
    this.length = event.length;
    this.pageSize = event.pageSize;
    this.pageIndex = event.pageIndex;
    if (endIndex > this.headingData.length) {
      endIndex = this.headingData.length;
    }
    this.pageSlice = this.headingData.slice(startIndex, endIndex);
  }

  addHeadingForm = new FormGroup({
    name: new FormControl("", [Validators.required]),
    sId: new FormControl("", [Validators.required]),
  });
  get getControl() {
    return this.addHeadingForm.controls;
  }
  getSubjectData() {
    // if (!this.subjectData) {
    //   console.log("id nnhi mili");
    // } else {
    //   this.sId = this.subjectData._id;
    //   this.getAllHeading();
    // }
    this.getAllHeading();
  }
  getAllHeading() {
    this.pageSlice = this.headingData.slice(0, 10);
    // this.headingService
    //   .getAllHeading({ sId: this.sId })
    //   .subscribe((result: any) => {
    //     console.log("Heading data ", result);
    //     result.forEach(() => {
    //       this.headingData = result;
    //       this.pageSlice = this.headingData.slice(0, 10);
    //     });
    //   });
  }
  addHeading() {
    this.addHeadingForm.controls["sId"].setValue(this.sId);
    console.log(this.addHeadingForm.value);
    this.headingService
      .addHeading(this.addHeadingForm.value)
      .subscribe((result) => {
        console.log(result);
        this.getAllHeading();
        this.addHeadingForm.reset();
      });
  }

  deleteHeading(id: string) {
    this.popup
      .confimation("Are You Sure You Want to Delete This?", "Ok", "Cancel")
      .subscribe((res: any) => {
        if (res) {
          this.headingService.deleteHeading(id).subscribe((response) => {
            console.log(response);
            this.snack.open("Heading has been deleted", "ok", {
              horizontalPosition: "right",
              verticalPosition: "top",
              duration: 2000,
            });
            this.getAllHeading();
          });
        }
      });
  }
  editHeading(index: number, id: string) {
    const data = this.headingData[index];
    console.log(data);
    this.addHeadingForm.controls["name"].setValue(data.name);
    this.addHeadingForm.controls["sId"].setValue(this.sId);
    this.currentId = id;
    console.log(this.addHeadingForm.value);
  }
  updateHeading() {
    this.headingService
      .updateHeading(this.currentId, this.addHeadingForm.value)
      .subscribe((result) => {
        console.log(result);
        this.snack.open("Heading has been updated", "ok", {
          horizontalPosition: "right",
          verticalPosition: "top",
          duration: 2000,
        });
        this.getAllHeading();
      });
  }
  passHeadingData() {
    // const toPassData: any = {
    //   name: data.name,
    //   sId: data.sId,
    //   _id: data._id,
    //   subjectName: this.subjectData.name,
    // };
    // this.shared.setHeading(toPassData);
    // this.router.navigate(["/dashboard/gkquestion"]);
  }
}
