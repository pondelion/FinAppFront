import { Stock, StockPriceData } from '../types/Stock'


export type StockList = Stock[]


export class APIClient {

  static getStockList(): StockList {
    // TODO : get data from backend server.
    const dummyData = [
      {
        'company_name': 'トヨタ自動車',
        'ticker': 7203
      },
      {
        'company_name': '三菱商事',
        'ticker': 8058
      },
      {
        'company_name': '本田技研工業',
        'ticker': 7267
      },
      {
        'company_name': 'NTT',
        'ticker': 9432
      },
    ]
    return dummyData
  }

  static getStockPriceData(ticker: number): StockPriceData {
    // TODO : get data from backend server.
    const dummyData: any = {
      7203: {
        'datetime': [
          '2019-01-11', '2019-01-12', '2019-01-13', '2019-01-14', '2019-01-15'
        ],
        'stock_price': [
          1000, 1050, 1100, 900, 1400
        ]
      },
      8058: {
        'datetime': [
          '2019-01-11', '2019-01-12', '2019-01-13', '2019-01-14', '2019-01-15'
        ],
        'stock_price': [
          2000, 1400, 2100, 2198, 1232
        ]
      },
      7267: {
        'datetime': [
          '2019-01-11', '2019-01-12', '2019-01-13', '2019-01-14', '2019-01-15'
        ],
        'stock_price': [
          3210, 3212, 100, 2100, 400
        ]
      },
      9432: {
        'datetime': [
          '2019-01-11', '2019-01-12', '2019-01-13', '2019-01-14', '2019-01-15'
        ],
        'stock_price': [
          4000, 1050, 2900, 3300, 1400
        ]
      },
    }
    return dummyData[ticker]
  }

}