import React from 'react'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'
import { ScatterChart, Props as ScatterProps } from '../atoms/chart/chartjs/Scatter'
import { SelectProps } from '../atoms/Select'


export type Props = ScatterProps & SelectProps


export const SelectScatterChart: React.FC<Props> = props => {
  return (
    <React.Component>
      <Select labelId='label' id='select' value=''>
        { 
          props.items.map((item, idx) => {
            return <MenuItem value={idx}>{item}</MenuItem>
          })
        }
      </Select>
      <ScatterChart points={props.points} />
    </React.Component>
  )
}
