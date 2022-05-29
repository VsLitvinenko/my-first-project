import { Component, OnInit } from '@angular/core';
import { doRequest } from '../functions';

@Component({
  selector: 'app-subscriptions-list',
  templateUrl: './subscriptions-list.component.html',
  styleUrls: ['./subscriptions-list.component.scss']
})
export class SubscriptionsListComponent implements OnInit {
  public list: any[] = [];

  constructor() { }

  ngOnInit(): void {
    this.getListFromServer().then();
  }

  public async getListFromServer(): Promise<void> {
    const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a';
    const res = await doRequest(url)
    if (res !== null) {
      this.list = res.drinks;
      console.log(this.list);
    }
  }

  public deleteItem(id: any): void {
    alert(id);
  }

}
