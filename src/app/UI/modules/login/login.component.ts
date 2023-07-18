import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { UserUseCase } from 'src/app/domain/models/usecase/user/userUseCase';
import { User } from 'src/app/domain/models/User/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  public validationMessages = {
    email: [
      { type: 'required', message: 'Este campo es requerido' },
      { type: 'email', message: 'Este campo es de tipo email' }
    ],
    password: [
      { type: 'required', message: 'Este campo es requerido' },
      { type: 'pattern', message: 'Este campo debe contener 1 mayuscula, 1 minuscula y minimo 8 caracteres' }
    ]
  }

  public get c() {
    return this.loginForm.controls;

  }
  constructor(private formBuilder: FormBuilder, private router: Router, private _userUseCase: UserUseCase) { }
  ngOnInit(): void {
    this.loginForm = this.formBuilder.group(
      {
        email: ['',
          [
            Validators.required,
            Validators.email
          ]
        ],
        password: [
          '',
          [
            Validators.required,
            Validators.pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm)

          ]
        ]
      }
    )
  }

  login() {
    var correo = this.loginForm.controls['email'].value;
    var contraseña = this.loginForm.controls['password'].value;

    if (this.loginForm.valid) {
      this._userUseCase.login(correo, contraseña).subscribe((response: User) => {
        localStorage.setItem('token', response.token);
        this.router.navigate(['/default']);
      });

    }
    else {
      alert('formulario no valido');
    }
  }


}
