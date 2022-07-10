import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatInputModule } from '@angular/material/input'
import { MatCardModule } from '@angular/material/card';

import { UserServiceService } from './user-service.service';
import { MainToolbarComponent } from './main-toolbar/main-toolbar.component';
import { ActionsToolbarComponent } from './actions-toolbar/actions-toolbar.component';
import { UsersComponent } from './users/users.component';
import { UserCardComponent } from './user-card/user-card.component';
import { UserCreateFormComponent } from './user-create-form/user-create-form.component';

@NgModule({
  declarations: [
    MainToolbarComponent,
    ActionsToolbarComponent,
    UsersComponent,
    UserCardComponent,
    UserCreateFormComponent
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatCheckboxModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatCardModule
  ],
  exports: [
    MainToolbarComponent,
    ActionsToolbarComponent,
    UsersComponent,
    UserCardComponent,
    UserCreateFormComponent
  ],
  providers: [UserServiceService]
})
export class UsersModule { }
