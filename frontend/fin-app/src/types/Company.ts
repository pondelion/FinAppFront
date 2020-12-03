
export type CompanyBasicData = {
  company_name: string,   // 企業名
  ticker: number,         // 証券コード
  sector: Sector,         // 業種
  address?: string,       // 住所
  employee?: number,      // 従業員数
  averageNumberOfTemporaryWorkers?: number,   // 平均臨時雇用人員
  averageAge?: number,    // 平均年齢
  averageLengthOfServiceYears?: number,       // 平均勤続年数
  averageAnnualSalary?: number,               // 平均年間給与
}

export type CompanyFinancialData = {
  numberOfSharesHeld?: number,      // 所有株式数
  shareholdingRatio?: number,       // 発行済株式（自己株式を除く。）の総数に対する所有株式数の割合
  totalNumberOfIssuedShares?: number,           // 発行済株式総数
  numberOfConsolidatedSubsidiaries?: number,    // 連結子会社の数
  bps?: number,                     // １株当たり純資産額
  equityToAssetRatio?: number,      // 自己資本比率
  cashAndCashEquivalents?: number,  // 現金及び現金同等物の残高
  assets?: number,                  // 資産
  currentAssets?: number,           // 流動資産
  noncurrentAssets?: number,        // 固定資産
  propertyPlantAndEquipment?: number,           // 有形固定資産
  intangibleAssets?: number,        // 無形固定資産
  investmentsAndOtherAssets?: number,           // 投資その他の資産
  liabilities?: number,             // 負債
  currentLiabilities?: number,      // 流動負債
  shortTermLoansPayable?: number,   // 短期借入金
  currentPortionOfBonds?: number,   // 1年内償還予定の社債
  currentPortionOfLongTermLoansPayable?: number,  // 1年内返済予定の長期借入金
  noncurrentLiabilities?: number,   // 固定負債
  bondsPayable?: number,            // 社債
  convertibleBondTypeBondsWithSubscriptionRightsToShares?: number,  // 転換社債型新株予約権付社債
  commercialPapersLiabilities?: number,            // コマーシャル・ペーパー
  longTermLoansPayable?: number,    // 長期借入金
  netAssets?: number,               // 純資産
  shareholdersEquity?: number,      // 株主資本
  capitalStock?: number,            // 資本金
  capitalSurplus?: number,          // 資本剰余金
  retainedEarnings?: number,        // 利益剰余金
  treasuryStock?: number,           // 自己株式
  valuationAndTranslationAdjustments?: number,      // 評価・換算差額等

  netSales?: number,                // 売上高
  costOfSales?: number,             // 売上原価
  grossProfit?: number,             // 売上総利益
  sellingGeneralAndAdministrativeExpenses?: number,   // 販売費及び一般管理費
  salariesAndAllowancesSGA?: number,                  // 給料及び手当
  depreciationSGA?: number,         // 減価償却費、販売費及び一般管理費
  researchAndDevelopmentExpensesSGA?: number,         // 研究開発費
  operatingIncome?: number,         // 営業利益
  nonOperatingIncome?: number,      // 営業外収益
  nonOperatingExpenses?: number,    // 営業外費用
  interestExpensesNOE?: number,     // 支払利息
  ordinaryIncome?: number,          // 経常利益
  extraordinaryIncome?: number,     // 特別利益
  extraordinaryLoss?: number,       // 特別損失
  incomeBeforeIncomeTaxes?: number, // 税引前純利益
  incomeTaxes?: number,             // 法人税等
  profitLoss?: number,              // 純利益
  profitLossAttributableToOwnersOfParent?: number,      // 親会社株主に帰属する純利益
  comprehensiveIncomeSummaryOfBusinessResults?: number, // 包括利益
  
  eps?: number,                     // １株当たり当期純利益
  dilutedEarningsPerShareSummaryOfBusinessResults?: number,   // 調整1株当たり純利益
  dividendPaidPerShareSummaryOfBusinessResults?: number,      // １株当たり配当額
  per?: number,                     // 株価収益率
  roe?: number,                     // 自己資本利益率

  netCashProvidedByUsedInOperatingActivities?: number,         // 営業活動によるキャッシュ・フロー
  depreciationAndAmortizationOpeCF?: number,                   // 減価償却費、営業活動によるキャッシュ・フロー
  netCashProvidedByUsedInInvestmentActivities?: number,        // 投資活動によるキャッシュ・フロー
  netCashProvidedByUsedInFinancingActivities?: number,         // 財務活動によるキャッシュ・フロー
  netIncreaseDecreaseInCashAndCashEquivalents?: number,        // 現金及び現金同等物の増減額

  previousPeriodAsset?: number,       // 前期資産
  previousPeriodSales?: number,       // 前期売上高
  previousPeriodProfit?: number,      // 前期純利益

  grossProfitMargin?: number,         // 売上高総利益率
  operatingProfitMargin?: number,     // 売上高営業利益率
  ordinaryIncomeMargin?: number,      // 売上高経常利益率
  sellingGeneralAndAdministrativeExpensesMargin?: number,   // 売上高販管費率
  totalAssetTurnover?: number,        // 総資本回転率
  currentRatio?: number,              // 流動比率
  salesGrowthRate?: number,           // 売上高変化率
  profitGrowthRate?: number,          // 純利益変化率
  equityCapital?: number,             // 自己資本
  interestBearingLiability?: number,  // 有利子負債
}


export type FinancialData = {
  company: CompanyBasicData,
  finantialData: CompanyFinancialData,
  submissionDate: string,               // 提出日
  accountingPeriodEndDate: string,      // 会計期間終了日
}


export type Sector = `水産・農林業` |
  `卸売業` |
  `建設業` |
  `非鉄金属` |
  `鉱業` |
  `機械` |
  `サービス業` |
  `金属製品` |
  `情報・通信` |
  `食料品` |
  `医薬品` |
  `不動産業` |
  `陸運業` |
  `その他金融業` |
  `小売業` |
  `その他製品` |
  `REIT銘柄一覧` |
  `繊維製品` |
  `電気機器` |
  `ガラス・土石製品` |
  `証券業` |
  `輸送用機器` |
  `石油・石炭製品` |
  `化学` |
  `パルプ・紙` |
  `精密機器` |
  `ゴム製品` |
  `鉄鋼` |
  `銀行業` |
  `保険業` |
  `倉庫・運輸関連業` |
  `海運業` |
  `空運業` |
  `電気・ガス業`;
