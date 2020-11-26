import React from 'react'
import { default as SelectMaterialUI } from '@material-ui/core/Select'  
import MenuItem from '@material-ui/core/MenuItem'


export interface SelectProps {
  items: string[]
}

export type Props = SelectProps

export const Select: React.FC<Props> = props => {
  return (
    <React.Component>
      <SelectMaterialUI labelId='label' id='select' value=''>
        { 
          props.items.map((item, idx) => {
            return <MenuItem value={idx}>{item}</MenuItem>
          })
        }
      </SelectMaterialUI>
    </React.Component>
  )
}
