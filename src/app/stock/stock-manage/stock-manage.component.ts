import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-stock-manage',
  templateUrl: './stock-manage.component.html',
  styleUrls: ['./stock-manage.component.css']
})
export class StockManageComponent implements OnInit {
  private stocks: Array<Stock>;
  constructor() {
    this.stocks = [
       new Stock(1, '华夏基金', 1.99, 3.5, '华夏基金股票', ['金融', '证券']),
       new Stock(2, '基金金泰', 4.2, 4.5, '基金金泰股票', ['金融', '证券']),
       new Stock(3, '山东药业集团', 2.4, 2.5, '山东药业集团股票', ['医药', '金融']),
       new Stock(4, '中国软件', 1.8, 3.0, '中国软件股票', ['软件', 'IT']),
       new Stock(5, '海航创新', 1.76, 5.0, '航空控股股票', ['航空', '证券']),
       new Stock(6, '太平洋保险', 1.56, 3.2, '太平洋保险股票', ['保险', '金融'] ),
       new Stock(7, '山东黄金', 1.64, 2.7, '山东黄金股票', ['金融', '黄金', '证券']),
       new Stock(8, '万达影院', 3.46, 4.8, '万达影院', ['电影', '金融'] ),
    ];
  }

  ngOnInit() {
  }

}

export class Stock {
  constructor(
    public id: number,
    public name: string,
    public price: number,
    public rating: number,
    public desc: string,
    public categories: Array<string>
  ) {

  }
}
