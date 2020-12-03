import { CompanyBasicData, Sector } from '../types/Company'
import { StockPriceData } from '../types/Stock'


export type CompanyList = CompanyBasicData[]


export class APIClient {

  static getCompanyList(): CompanyList {
    // TODO : get data from backend server.
    const dummyData = [
      {
        'company_name': 'トヨタ自動車',
        'ticker': 7203,
        'sector': ('輸送用機器' as Sector)
      },
      {
        'company_name': '三菱商事',
        'ticker': 8058,
        'sector': ('卸売業' as Sector)
      },
      {
        'company_name': '本田技研工業',
        'ticker': 7267,
        'sector': ('輸送用機器' as Sector)
      },
      {
        'company_name': 'NTT',
        'ticker': 9432,
        'sector': ('情報・通信' as Sector)
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

  static getSectorList(): string[] {
    const sectors: string[] = [
      '水産・農林業',
      '卸売業',
      '建設業',
      '非鉄金属',
      '鉱業',
      '機械',
      'サービス業',
      '金属製品',
      '情報・通信',
      '食料品',
      '医薬品',
      '不動産業',
      '陸運業',
      'その他金融業',
      '小売業',
      'その他製品',
      'REIT銘柄一覧',
      '繊維製品',
      '電気機器',
      'ガラス・土石製品',
      '証券業',
      '輸送用機器',
      '石油・石炭製品',
      '化学',
      'パルプ・紙',
      '精密機器',
      'ゴム製品',
      '鉄鋼',
      '銀行業',
      '保険業',
      '倉庫・運輸関連業',
      '海運業',
      '空運業',
      '電気・ガス業'
    ]

    return sectors
  }

}