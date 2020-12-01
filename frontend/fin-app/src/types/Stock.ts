
export type Stock = {
  company_name: string,
  ticker: number,
  address?: string,
  sector?: string,
  employee?: number,
}

export type StockPriceData = {
  'datetime': string[],
  'stock_price': number[]
}