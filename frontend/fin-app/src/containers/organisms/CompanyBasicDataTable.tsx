import React from 'react'
import { Sector, CompanyBasicData } from '../../types/Company'
import { Table } from '../../components/atoms/Table'
import { APIClient } from '../../utils/APIClient'


const COLUMNS = [
  { field: 'id', headerName: 'id', width: 1 },
  { field: 'item', headerName: '企業基本データ', width: 360 },
  { field: 'value', headerName: ' ', width: 360 }
]

type rowData = {
  id: number,
  item: string,
  value: any
}

export interface Props {
  ticker: number
}


export class CompanyBasicDataTable extends React.Component<Props> {

  private rows: rowData[] = []
  private tableRef = React.createRef<Table>()

  constructor(props: Props) {
    super(props);

    this.getCompanyBasicData(this.props.ticker)
  }

  getCompanyBasicData(ticker: number): void {

    APIClient.getCompanyBasicData(
      ticker,
      (basicDataList: CompanyBasicData[], submissionDates: string[]) => {
        let rows: rowData[] = [{
          id: 1,
          item: '提出日',
          value: submissionDates[submissionDates.length-1]
        }]
        let id: number = 2
        let basicData: CompanyBasicData = basicDataList[basicDataList.length-1]
        for (let itemName in basicData) {
          rows.push({
            id: id,
            item: itemName,
            value: (basicData as any)[itemName]
          })
          id += 1
        }
        this.rows = rows
        console.log(this.rows)
        this.forceUpdate()
      },
    )
    
  }

  render() {
    return (
      <div>
        <Table 
          rows={this.rows}
          columns={COLUMNS}
          pageSize={10}
          ref={this.tableRef}
        />
      </div>
    )
  }

}