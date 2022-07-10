import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-actions-toolbar',
  templateUrl: './actions-toolbar.component.html',
  styleUrls: ['./actions-toolbar.component.css'],
  providers: [UserServiceService]
})
export class ActionsToolbarComponent implements OnInit {
  @Output() onDeleteUsers: EventEmitter<any> = new EventEmitter();
  @Output() onSortAscending: EventEmitter<string> = new EventEmitter();
  @Output() onSortDescending: EventEmitter<string> = new EventEmitter();
  @Output() onSelectAllUsers: EventEmitter<any> = new EventEmitter();
  @Output() onSearchUsers: EventEmitter<string> = new EventEmitter();
  @Input() selectedAny?: boolean;

  constructor() {}

  selectedAll: boolean = false;
  searchUser: string = '';
  selectedSorting: 'ASC' | 'DESC' | 'NO' = 'NO';

  onSearch() {
    this.onSearchUsers.emit(this.searchUser.toLowerCase().trim());
  }

  onSelectAll() {
    this.selectedAll = !this.selectedAll;
    this.onSelectAllUsers.emit(this.selectedAll);
  }

  onDelete() {
    this.onDeleteUsers.emit();
  }

  onSort(how: string) {
    switch (how) {
      case 'ASC':
        this.onSortAscending.emit(how);
        break;
      case 'DESC':
        this.onSortDescending.emit(how);
        break;
    }
  }

  ngOnInit(): void {}
}