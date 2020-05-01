import { RootState } from './../../../../store/state/root.state';
import { getAuth } from './../../../../store/actions/auth.actions';
import { Store, select } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { selectAuth } from 'src/app/store/selectors/auth.selectors';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  public loginInvalid: boolean;
  private formSubmitAttempt: boolean;
  private returnUrl: string =
    this.route.snapshot.queryParams.returnUrl || '/dashboard';

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private store$: Store<RootState>
  ) {}
  ngOnInit(): void {
    this.store$.dispatch(getAuth());

    let authToken = '';
    this.form = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });

    if (authToken !== null && authToken !== undefined) {
      // this.router.navigate([this.returnUrl]);
    }

    // console.log(store.getState().login.token);
  }

  onSubmit() {
    let a = this.store$.pipe(select(selectAuth));
    console.log(a);
    this.loginInvalid = false;
    this.formSubmitAttempt = false;
    const tokenField = 'jwt';
    if (this.form.valid) {
      try {
        const username = this.form.get('username').value;
        const password = this.form.get('password').value;

        //this.router.navigate([this.returnUrl]);
      } catch (err) {
        this.loginInvalid = true;
      }
    } else {
      this.formSubmitAttempt = true;
    }
  }
  // checkLogin() {
  //   this.loginInvalid = false;
  //   this.formSubmitAttempt = false;
  //   this.authService.getAuthToken().subscribe((data) => {
  //     if (data !== undefined) {
  //       const tokenField = 'jwt';
  //       store.dispatch(loginSuccess(data[tokenField]));
  //       // console.log(store.getState().login.token);
  //     }
  //   });
  // }
}
