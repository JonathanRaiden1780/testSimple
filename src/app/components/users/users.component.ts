import { Component, OnInit } from '@angular/core';
import { PrincipalService } from '../../services/Principal/principal.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Users } from '../../interfaces/Users';

@Component({
  standalone: false,
  selector: "app-users",
  templateUrl: "./users.component.html",
  styleUrl: "./users.component.scss",
})
export class UsersComponent implements OnInit {
  users: any;
  isModalOpen: boolean = false;
  userForm: FormGroup;

  constructor(private service: PrincipalService, private fb: FormBuilder) {
    this.userForm = this.fb.group({
      name: ["", [Validators.required, Validators.maxLength(50), Validators.minLength(3)]],
      email: ["", [Validators.required, Validators.email]],
      age: ["", [Validators.required, Validators.min(1), Validators.max(120)]],
    });
  }

  ngOnInit(): void {
    this.getUsers();
  }
  getUsers(){
    this.service.GetUsers().subscribe((res:Users[]) => {
      this.users = res;
    });
  }

  openModal() {
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
  }

  onSubmit() {
    if (this.userForm.valid) {
      let req: Users = {
        name: this.userForm.value.name,
        email: this.userForm.value.email,
        age: this.userForm.value.age,
      };
      this.service.Register(req).subscribe({
        next: (res: Users) => {
          this.users.push(res);
        },
        error: (err:any) => {
          console.log(err);
        },
        complete: () => {
          this.userForm.reset();
          this.getUsers();
          this.closeModal();
        },
      });
    }
  }
}