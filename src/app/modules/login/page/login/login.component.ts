import { ErrorMessages, ErrorMessage } from './../../../../core/models/models';
import { Credential } from './../../../../core/models/credentials.model';
import { Observable } from 'rxjs';
import { RootState } from './../../../../store/state/root.state';
import { Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import * as authSelectors from 'src/app/store/selectors/auth.selectors';
import { GetAuth } from 'src/app/store/actions/auth.actions';
import { stringToKeyValue } from '@angular/flex-layout/extended/typings/style/style-transforms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  authErrorObj: Observable<any>;
  form: FormGroup;
  public loginInvalid: boolean;
  private formSubmitAttempt: boolean;
  errorMessage: ErrorMessages[];
  errorMessages: ErrorMessage[];

  constructor(private fb: FormBuilder, private store$: Store<RootState>) {
    this.authErrorObj = this.store$.select(authSelectors.selectAuthError);
  }
  ngOnInit() {
    this.form = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
    this.authErrorObj.subscribe((err) => {
      this.errorMessage = err;
      if (this.errorMessage !== null) {
        //console.log(this.errorMessage);
      }
    });
  }

  onSubmit() {
    this.loginInvalid = false;
    this.formSubmitAttempt = false;
    if (this.form.valid) {
      try {
        const username = this.form.get('username').value;
        const password = this.form.get('password').value;
        const loginCreds: Credential = {
          username,
          password,
        };
        this.store$.dispatch(new GetAuth(loginCreds));
      } catch (err) {
        this.loginInvalid = true;
      }
    } else {
      this.formSubmitAttempt = true;
    }
  }
}
