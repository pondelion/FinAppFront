import axios from 'axios'
import { CompanyBasicData } from '../types/Company'
//import { StockPriceData } from '../types/Stock'
import { config } from '../config/Config'
import { SECTORS } from '../Const'


export type CompanyList = CompanyBasicData[]


export class APIClient {

  static getCompanyList(
    callback: (companyNames: string[], tickers: number[], sectors: string[]) => void,
    sector?: string
  ): void {
    // TODO : get data from backend server.
    // const dummyData = [
    //   {
    //     'companyName': 'トヨタ自動車',
    //     'ticker': 7203,
    //     'sector': ('輸送用機器' as Sector)
    //   },
    //   {
    //     'companyName': '三菱商事',
    //     'ticker': 8058,
    //     'sector': ('卸売業' as Sector)
    //   },
    //   {
    //     'companyName': '本田技研工業',
    //     'ticker': 7267,
    //     'sector': ('輸送用機器' as Sector)
    //   },
    //   {
    //     'companyName': 'NTT',
    //     'ticker': 9432,
    //     'sector': ('情報・通信' as Sector)
    //   },
    // ]
    // return dummyData

    let params: string = ''
    if (sector !== undefined) {
      params = `?sector=${sector}`
    }

    let url = `http://${config.server}:${config.server_port}/company_list${params}`
    url = encodeURI(url)
    console.log(url)

    axios.get(url).then((results) => {
      console.log(typeof results.data)
      // const data = JSON.parse(results.data.replace(/\bNaN\b/g, "null"))
      const data = results.data
      const companyNames: string[] = data['company_list'].map((v: any) => v['company_name'])
      const tickers: number[] = data['company_list'].map((v: any) => v['ticker'])
      const sectors: string[] = data['company_list'].map((v: any) => v['sector'])
      callback(companyNames, tickers, sectors)
    }).catch((e) => {
      console.log(e.message)
    })
  }

  static getStockPriceData(
    ticker: number,
    callback: (dates: string[], stockPrices: number[]) => void,
    year?: number,
  ): void {
    // TODO : get data from backend server.
    // const dummyData: any = {
    //   7203: {
    //     'datetime': [
    //       '2019-01-11', '2019-01-12', '2019-01-13', '2019-01-14', '2019-01-20'
    //     ],
    //     'stock_price': [
    //       1000, 1050, 1100, 900, 1400
    //     ]
    //   },
    //   8058: {
    //     'datetime': [
    //       '2019-01-11', '2019-01-12', '2019-01-13', '2019-01-14', '2019-01-20'
    //     ],
    //     'stock_price': [
    //       2000, 1400, 2100, 2198, 1232
    //     ]
    //   },
    //   7267: {
    //     'datetime': [
    //       '2019-01-11', '2019-01-12', '2019-01-13', '2019-01-14', '2019-01-20'
    //     ],
    //     'stock_price': [
    //       3210, 3212, 100, 2100, 400
    //     ]
    //   },
    //   9432: {
    //     'datetime': [
    //       '2019-01-11', '2019-01-12', '2019-01-13', '2019-01-14', '2019-01-20'
    //     ],
    //     'stock_price': [
    //       4000, 1050, 2900, 3300, 1400
    //     ]
    //   },
    // }
    // return dummyData[ticker]

    let params: string = ''
    if (year !== undefined) {
      params = `?year=${year}`
    }

    const url = `http://${config.server}:${config.server_port}/stock_price/${ticker}${params}`
    console.log(url)

    axios.get(url).then((results) => {
      console.log(typeof results.data)
      // const data = JSON.parse(results.data.replace(/\bNaN\b/g, "null"))
      const data = results.data
      const stockPrices = data['stock_price'].map((v: any) => v['終値'])
      const dates = data['stock_price'].map((v: any) => v['日付'])
      callback(dates, stockPrices)
    }).catch((e) => {
      console.log(e.message)
    })

  }

  static getSectorList(): string[] {
    return SECTORS
  }


  static getCompanyBasicData(
    ticker: number,
    callback: (basicDataList: CompanyBasicData[], submissionDates: string[]) => void,
  ): void {

    const url = `http://${config.server}:${config.server_port}/company_basic_data/${ticker}`

    axios.get(url).then((results) => {
      const data = JSON.parse(results.data.replace(/\bNaN\b/g, "null"))
      //const data = results.data
      console.log(data)
      const basicDataList: CompanyBasicData[] = data['company_basic_data'].map((v: any) => {
        return {
          companyName: v['会社名'],
          ticker: v['証券コード'],
          sector: v['業種'],
          employee: v['従業員数'],
          averageNumberOfTemporaryWorkers: v['平均臨時雇用人員'],
          averageAge: v['平均年齢'],
          averageLengthOfServiceYears: v['平均勤続年数'],
          averageAnnualSalary: v['平均年間給与']
        }
      })
      const subDates: string[] = data['company_basic_data'].map((v: any) => v['提出日'])
      callback(basicDataList, subDates)
    }).catch((e) => {
      console.log(e.message)
    })
  }
}
