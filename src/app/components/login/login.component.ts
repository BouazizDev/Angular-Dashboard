import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form : FormGroup
  loading = false;
  constructor(private fb: FormBuilder, private _snackBar: MatSnackBar, private router : Router) 
  {
    this.form = this.fb.group({
      user:['',Validators.required],
      password:['',Validators.required]
    })
   }

  ngOnInit(): void {
  }
  login(){
    const user = this.form.value.user;
    const password = this.form.value.password;
    if(user == "amine" && password =="123"){
      //redirection vers la dashboard
      this.fakeLoading();
      this.form.reset();
    }else{
      //message d'erreur
      this.error();
    }

  }
  error(){
    this._snackBar.open("The informations your provided are wrong","dismiss",{
      duration:5000,
      horizontalPosition: 'center',
      verticalPosition: 'bottom'
    })
  }
  fakeLoading(){
    this.loading = true;
    setTimeout(()=>{
      this.router.navigate(['dashboard']);
      this.loading = false;
    },1500)
  }

}
