import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IUser } from '../IUser';

@Component({
  selector: 'app-user-create-form',
  templateUrl: './user-create-form.component.html',
  styleUrls: ['./user-create-form.component.css']
})
export class UserCreateFormComponent implements OnInit {
  userForm!: FormGroup;

  @Output() onSubmitUser: EventEmitter<IUser> = new EventEmitter();

  constructor(private fbuilder: FormBuilder) {}

  ngOnInit(): void {
    this.userForm = this.fbuilder.group({
      firstName: [
        '',
        [Validators.required, Validators.minLength(2)],
      ],
      lastName: [
        '',
        [Validators.required, Validators.minLength(2), Validators.maxLength(60)],
      ],
      email: [
        '',
        [Validators.required, Validators.email],
      ],
      phone: [
        '',
        [Validators.required, Validators.pattern('[0-9]+')],
      ],
    });
  }

  onSubmit() {
    this.onSubmitUser.emit(<IUser>{
      name: this.firstName?.value + ' ' + this.lastName?.value,
      email: this.email?.value,
      phone: this.phone?.value,
    });
    this.userForm.reset();
  }

  get firstName() {
    return this.userForm.get('firstName');
  }

  get lastName() {
    return this.userForm.get('lastName');
  }

  get email() {
    return this.userForm.get('email');
  }

  get phone() {
    return this.userForm.get('phone');
  }
}