import React from 'react'
import { Select, SelectHandler } from '../../components/atoms/Select'
//import { APIClient } from '../../utils/APIClient'
//import { CompanyBasicData } from '../../types/Company'


export interface StockSelectProps {}

type Props = StockSelectProps & SelectHandler


// export const StockSelect: React.FC<Props> = props => {
//   return (
//     <div>
//       <Select items={ getCompanyList().map(v => v.company_name) }/>
//     </div>
//   )
// }
export class StockSelect extends React.Component<Props> {

  render() {
    return (
      <div>
        <Select
          items={ ['A.inc', 'B.inc'] }
          onChange={ this.props.onChange }  
        />
      </div>
    )
  }

}