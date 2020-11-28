import React from 'react'
import { default as SelectMaterialUI } from '@material-ui/core/Select'  
import MenuItem from '@material-ui/core/MenuItem'


export interface SelectProps {
  items: string[]
}

export interface SelectHandler {
  onChange: (event: any) => void
}

export type Props = SelectProps & SelectHandler

// export const Select: React.FC<Props> = props => {
//   return (
//     <React.Component>
//       <SelectMaterialUI labelId='label' id='select' value=''>
//         { 
//           props.items.map((item, idx) => {
//             return <MenuItem value={idx}>{item}</MenuItem>
//           })
//         }
//       </SelectMaterialUI>
//     </React.Component>
//   )
// }
export class Select extends React.Component<Props> {

  render() {
    return (
      <div>
        <SelectMaterialUI
          labelId='label' id='select' autoWidth={true}
          onChange={ this.props.onChange }
        >
          { 
            this.props.items.map((item, idx) => {
              return <MenuItem value={idx}>{item}</MenuItem>
            })
          }
        </SelectMaterialUI>
      </div>
    )
  }

}