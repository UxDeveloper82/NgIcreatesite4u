import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Message } from 'src/app/_models/message';
import { AuthService } from 'src/app/_services/auth.service';
import { MessageService } from 'src/app/_services/message.service';

@Component({
  selector: 'app-message-page',
  templateUrl: './message-page.component.html',
  styleUrls: ['./message-page.component.scss'],
})
export class MessagePageComponent implements OnInit {
  messagesList: Message[] = [];
  displayedColumns: string[] = ['name', 'email', 'message', 'delete'];

  dataSource = new MatTableDataSource();
  @ViewChild(MatPaginator, { static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor(
    private auth: AuthService,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.messageService
      .getAllMessages()
      .subscribe((res) => (this.dataSource.data = res));
  }

  deleteMessage(message: Message) {
    if (window.confirm('Are you sure you want to delete the message ?')) {
      this.messageService.deleteMessage(message);
    }
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
