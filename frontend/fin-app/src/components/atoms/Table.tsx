import React from 'react'
import { DataGrid } from '@material-ui/data-grid'


export interface TableProps {
  rows: any,
  columns: any,
  pageSize: number,
}

export interface TableHandler {
}

export type Props = TableProps & TableHandler


export class Table extends React.Component<Props> {

  updateRows(rows: any): void {
    console.log('updateRows')
    console.log(rows)
  }

  render() {
    return (
      <div>
        <DataGrid
          autoHeight
          rows={ this.props.rows }
          columns={ this.props.columns }
          pageSize={ this.props.pageSize }
          onRowClick={ (params) => {console.log(params)}}
        />
      </div>
    )
  }

}
