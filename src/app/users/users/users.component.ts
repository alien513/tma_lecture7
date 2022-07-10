import { Component, OnInit } from '@angular/core';
import { IUser } from '../IUser';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})

export class UsersComponent implements OnInit {
  users: IUser[] = [];
  selectedAll: boolean = false;

  constructor(private usersService: UserServiceService) {}

  ngOnInit(): void {
    this.usersService.getUsers().subscribe((users) => (this.users = users));
  }

  onSelectAll(selectedAll: boolean) {
    this.users = this.users.map((u) => {
      u.select = selectedAll;
      return u;
    });
  }

  checkIfAnySelected(): boolean {
    return !this.users.some((u) => u.select);
  }

  onDelete() {
    this.users
      .filter((u) => u.select)
      .forEach((u) =>
        this.usersService
          .deleteUser(u)
          .subscribe(
            () => (this.users = this.users.filter((user) => user.id !== u.id))
          )
      );
  }

  onSelect(user: IUser) {
    this.users = this.users.map((u) => {
      if (u.id === user.id) {
        u.select = !Boolean(user.select);
        return u;
      }
      return u;
    });
  }

  onSortUsers(how: string) {
    switch (how) {
      case 'ASC':
        this.users.sort(this.compareName);
        break;
      case 'DESC':
        this.users.sort(this.compareName).reverse();
    }
  }

  onSearchUser(query: string) {
    if (!query) {
      this.usersService.getUsers().subscribe((users) => (this.users = users));
    } else {
      this.usersService.getUsers().subscribe((users) => {
        this.users = users.filter((u) => {
          const userName = u.name.toLowerCase();
          return userName.includes(query);
        });
      });
    }
  }

  compareName(user1: IUser, user2: IUser) {
    const nameUser1 = user1.name.toLowerCase();
    const nameUser2 = user2.name.toLowerCase();

    if (nameUser1 < nameUser2) {
      return -1;
    } else if (nameUser1 > nameUser2) {
      return 1;
    }
    return 0;
  }

  onCreateUser(user: IUser) {
    this.usersService
      .createUser({
        id: Math.max(...(<number[]>this.users.map((u) => {console.log(u.id); return u.id;}))) + 1,
        ...user,
      })
      .subscribe(() => this.users.push(user));
  }

}