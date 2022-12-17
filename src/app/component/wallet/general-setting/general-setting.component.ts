import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators,NgModel} from "@angular/forms";
import {Router} from "@angular/router";
import { JobService } from '../../job.service';
import {first} from "rxjs/operators";
import { User } from 'src/app/models/user.model';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-general-setting',
  templateUrl: './general-setting.component.html',
  styleUrls: ['./general-setting.component.css']
})
export class GeneralSettingComponent implements OnInit {
files: File[] = [];
  users: User[];
  msg:any;
  constructor(private formBuilder: FormBuilder,private router: Router, private jobService: JobService,private modalService: NgbModal,private _snackBar: MatSnackBar) { }

  ngOnInit() {


}


 onsendfile(file:any,type1:any) {
	// alert(type1);
    this.jobService.postlogo({"document_type":type1,"document":file,id:14})
      .pipe(first())
      .subscribe(
        data => {
          if(data.status === 200) {
      
          }else {
          this.msg=data.message;
                this._snackBar.open(this.msg, "Close", {
      duration: 2000,

      verticalPosition: 'top',
      horizontalPosition: 'center'

    });
          //  alert(data.message);
             
          }
        },
        error => {
          alert(error);
        });
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
 
onRemove(event) {
  
 // alert("183");
  
  console.log(event);
  this.files.splice(this.files.indexOf(event), 1);
}


onFilesAdded(event) {
//	alert("189");
	
  console.log(event);
  this.files.push(...event.addedFiles);

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