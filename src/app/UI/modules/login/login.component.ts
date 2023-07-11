import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http'

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
  constructor(private formBuilder: FormBuilder, private router: Router, private http: HttpClient) { }
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
    this.http.get('https://dummyjson.com/products').subscribe((data: any) => {
      console.log(data);
    });
    const headers = new HttpHeaders().set('Content-Type', 'application/json')
    .set('mi-header','mi-header-value')
    this.http.post('https://dummyjson.com/auth/login', { username: 'kminchelle', password: '0lelplR' }, { headers }).subscribe((data: any) => {
      console.log(data);
    });
    if (this.loginForm.valid) {

      localStorage.setItem('token', correo + contraseña);
      this.router.navigate(['/default']);
    }
    else {
      alert('formulario no valido');
    }
  }


}
