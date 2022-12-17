import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import { Router } from "@angular/router";

import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { first } from "rxjs/operators";

import { JobService } from '../../job.service';
import { User } from 'src/app/models/user.model';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSnackBar } from '@angular/material/snack-bar';

import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-dropzone',
  templateUrl: './dropzone.component.html',
  styleUrls: ['./dropzone.component.css']
})
export class DropzoneComponent implements OnInit {
files: File[] = [];
  users: User[];
  msg:any;
@Output() myfiles:EventEmitter<string>=new EventEmitter
fileData;
constructor(private router: Router, private _snackBar: MatSnackBar, private modalService: NgbModal, private jobService: JobService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {

  }

onsendfile(file:any,type1:any) {
// alert(file);
this.fileData = file;
this.myfiles.emit(this.fileData);
  }
  

  onRemove(event) {
 // alert("183");
  console.log(event);
  this.files.splice(this.files.indexOf(event), 1);
}


onSelect(event,type1) {
  console.log(event,type1);
  //alert(type1);
  this.files.push(...event.addedFiles);
  this.readFile(this.files[0]).then(fileContents => {
    // Put this string in a request body to upload it to an API.
    console.log(fileContents);
  
  this.onsendfile(fileContents,type1);
  });
  
}



onFilesAdded(event) {
//  alert("189");
  console.log(event);
  this.files.push(...event.addedFiles)
  this.readFile(this.files[0]).then(fileContents => {
    // Put this string in a request body to upload it to an API.
    console.log(fileContents);
  });
}

  private async readFile(file: File): Promise<string | ArrayBuffer> {
  return new Promise<string | ArrayBuffer>((resolve, reject) => {
    const reader = new FileReader();

    reader.onload = e => {
      return resolve((e.target as FileReader).result);
    };

    reader.onerror = e => {
      console.error("FileReader failed on file ${file.name}.");
      return reject(null);
    };

    if (!file) {
      console.error('No file to read.');
      return reject(null);
    }

    reader.readAsDataURL(file);
  });
}

}
