import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm!: FormGroup;

  public validationMessages = {
    firstName: [
      { type: 'required', message: 'Este campo es requerido' },
    ],
    lastName: [
      { type: 'required', message: 'Este campo es requerido' },
    ],
    age: [
      { type: 'required', message: 'Este campo es requerido' },
    ],
    email: [ 
      { type: 'required', message: 'Este campo es requerido' },
      { type: 'email', message: 'Este campo es de tipo email' }
    ],
    password: [
      { type: 'required', message: 'Este campo es requerido' },
      { type: 'pattern', message: 'Este campo debe contener por lo menos 1 mayuscula y una minuscula' }
    ],
    confirmPassword: [
      { type: 'required', message: 'Este campo es requerido' },
      { type: 'pattern', message: 'Este campo debe contener por lo menos 1 mayuscula y una minuscula' }
    ]
  }
  constructor(private formBuilder: FormBuilder, private router: Router,private http: HttpClient) { }
  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      firstName: ['', [
        Validators.required,
      ]
      ],
      lastName: ['', [
        Validators.required,
      ]],
      age: ['', [
        Validators.required,
      ]],
      email: ['', [
        Validators.required,
        Validators.email
      ]],
      password: [
        '', [
          Validators.required,
          Validators.pattern(/^(?=.{8,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).*$/gm)
        ]
      ],
      confirmPassword: [
        '', [
          Validators.required,
          Validators.pattern(/^(?=.{8,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).*$/gm)
        ]
      ],
    }, { validator: this.checkPasswords }
    )
  }

  checkPasswords(group: FormGroup) {
    let password = group.controls['password'].value;
    let confirmPassword = group.controls['confirmPassword'].value;
    console.log(password === confirmPassword)
    return password === confirmPassword ? null : { notSame: true }
  }

  public get campos() {
    return this.registerForm.controls
  }
  register(){
    var firstName = this.registerForm.controls['firstName'].value;
    var lastName = this.registerForm.controls['lastName'].value;
    var age = this.registerForm.controls['age'].value;
    var password = this.registerForm.controls['password'].value;
    var email = this.registerForm.controls['email'].value;
    if (this.registerForm.valid) {
      const headers = new HttpHeaders().set('Content-Type', 'application/json')
      .set('mi-header','mi-header-value')
      this.http.post('https://dummyjson.com/users/add', { firstName, lastName,age, email,password }, { headers }).subscribe((data: any) => {
        console.log(data);
      });
      this.router.navigate(['/fullscreen/login']);
    }
    else {
      alert('Este formulario no es valido');
    }
  }
}
