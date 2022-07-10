import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IUser } from '../IUser';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css']
})
export class UserCardComponent implements OnInit {
  @Input() user!: IUser;
  @Output() onSelectUser: EventEmitter<IUser> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  onSelect(user: IUser) {
    this.onSelectUser.emit(user);
  }
}