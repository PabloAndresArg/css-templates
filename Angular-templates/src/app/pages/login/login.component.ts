import { Component, OnInit } from "@angular/core";
import { FormBuilder, Validators, FormGroup } from "@angular/forms";
import swal from 'sweetalert2';

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent implements OnInit {
  // FORMULARIOS REACTIVOS
  public loginForm = this.fb.group(
    {
      username: ["", Validators.required],
      password: ["", Validators.required],
      // password: ['123456', Validators.required ],
      // password2: ['123456', Validators.required ],
    },
    {
      // este apartado es para validad cosas muy especificas los parametros se mandan con el mismo nombre de las declaraciones de arriba
      // validators: this.passwordsIguales('password', 'password2')
    }
  );

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {}
  onSubmit() {
    console.log(this.loginForm)

    console.log(this.loginForm.get('username')?.value);
    console.log(this.loginForm.get('password')?.value);
    swal.fire(
      {
        title: "",
        icon: "info",
        color: "#0d6efd",
        html: "<h1> Bienvenido..!</h1>",
        confirmButtonColor: "#0d6efd",
        focusConfirm: true
      }

      );
  }
}
