import { ITransaction} from './../interfaces';
import { Component, OnInit } from '@angular/core';
import { RequestService } from '../services/request.service';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.css']
})
export class MainLayoutComponent implements OnInit {

  public transactionsList: ITransaction[];

  constructor(
    private requestService: RequestService
  ) { }

  ngOnInit() {
    this.requestService.getTransactionList()
      .subscribe(
        transactionsList => this.transactionsList = transactionsList,
        err => console.log(err));
  }

}
