import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {first} from "rxjs/operators";

import { JobService } from '../../job.service';
 import { User } from 'src/app/models/user.model';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSnackBar} from '@angular/material/snack-bar';

import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
files: File[] = [];
  users: User[];
  editForm: FormGroup;
   closeResult: string;
   country;
    msg:any;

  constructor(private formBuilder: FormBuilder,private router: Router, private jobService: JobService,private _snackBar: MatSnackBar,private modalService: NgbModal) { }

 ngOnInit() {




     

 

    this.editForm = this.formBuilder.group({
      id: [''],                             
      first_name: [''],
       last_name: [''],
         mobile: [''], 
          email: [''],
         country: [''],
         address1: [''],
         address2: [''],
         state: [''],
       
        district:[''],
        house_no:[''],
        street:[''],
        apartment_number:[''],
        zip_code:[''],
       
       city:[''],
       
        
       dob:[''],
       gender:[''],
        
    
       
        
        
       profile_pic:[''] 

     });
     
    this.jobService.getuserById()
      .subscribe( data => {
        this.editForm.setValue(data);
     

      });

        this.jobService.get_client_ip()
      .subscribe( data => {
        this.users=data.result;
        console.log(data['country']);
       // this.country=data['country'];
    });
  }


onSubmit() {
    this.jobService.updateProfile(this.editForm.value)
      .pipe(first())
       .pipe(first())
      .subscribe(
        data => {
          if(data.status === 200) {
          
          
            //this.router.navigate(['job/center-list']);
          }else {
       
            this._snackBar.open("Update Profile Successfully", "Close", {
      duration: 2000,

      verticalPosition: 'top',
      horizontalPosition: 'center'
    });
          }
        },
        error => {
          alert(error);
        });
           
           }


open(content) {

    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  


  open1(content1) {

    this.modalService.open(content1, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {

    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }

sendtostatus(reason: any): void {
    this.jobService.accountStatus(+this.editForm.value.id)
      .subscribe( data => {
       this._snackBar.open("Send Request Successfully", "Close", {
      duration: 3000,

      verticalPosition: 'top',
      horizontalPosition: 'center'

    });

this.getDismissReason(reason);
    this.jobService.getuserById()
      .subscribe( data => {
        this.editForm.setValue(data);
     

      });

    });


}


 onsendfile(file:any,type1:any) {
   alert(type1);
    this.jobService.updatedocument({"document_type":type1,"document":file,id:14})
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
            //alert(data.message);
             
          }
        },
        error => {
          alert(error);
        });
  }
  
  
onSelect(event,type1) {
 

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
//  alert("189");
  
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
