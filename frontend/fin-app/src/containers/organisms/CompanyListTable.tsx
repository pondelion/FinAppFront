import React from 'react'
//import { Sector, CompanyBasicData } from '../../types/Company'
import { Table } from '../../components/atoms/Table'
import { APIClient } from '../../utils/APIClient'


const COLUMNS = [
  { field: 'id', headerName: '銘柄コード', width: 150 },
  { field: 'companyName', headerName: '企業名', width: 360 },
  { field: 'sector', headerName: '業種', width: 160 }
]

type rowData = {
  id: number,
  companyName: string,
  sector: string
}

export interface Props {
  sector: string
}


export class CompanyListTable extends React.Component<Props> {

  // private companies: CompanyBasicData[] = []
  private rows: rowData[] = []
  private tableRef = React.createRef<Table>()

  constructor(props: Props) {
    super(props);

    this.getCompanyList(this.props.sector)
  }

  getCompanyList(sector: string): void {

    APIClient.getCompanyList(
      (companyNames: string[], tickers: number[], sectors: string[]) => {
        let rows: rowData[] = []
        for (let i=0; i < companyNames.length; i++) {
          rows.push({
            id: tickers[i],
            companyName: companyNames[i],
            sector: sectors[i]
          })
        }
        this.rows = rows
        console.log(this.rows)
        this.forceUpdate()
        this.tableRef.current!.updateRows(this.rows);
      },
      sector,
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