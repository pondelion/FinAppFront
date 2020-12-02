import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Tab from '@material-ui/core/Tab'
import TabPanel from '@material-ui/lab/TabPanel'
import TabContext from '@material-ui/lab/TabContext'
import TabList from '@material-ui/lab/TabList'
import { APIClient } from '../../utils/APIClient'



export interface StockListTabProps {
}
export interface TabSelectedHandler {
  handleOnSelect?: () => void
}

type Props = StockListTabProps & TabSelectedHandler


export class StockListTab extends React.Component<Props, {val: string}> {

  constructor(props: Props) {
    super(props);

    this.state = {
      val: '1',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event: any, value: string) {
    this.setState({
      val: value
    })
  }

  render() {
    return (
      <div>
        <TabContext value={this.state.val}>
          <AppBar position='static'>
            <TabList onChange={this.handleChange}>
            { APIClient.getSectorList().map((sec, idx) => <Tab label={sec} value={`${idx+1}`} />)}
            </TabList>
          </AppBar>
        { APIClient.getSectorList().map((sec, idx) => <TabPanel value={`${idx+1}`}>{sec}</TabPanel>)}
        </TabContext>
      </div>
    )
  }

}
