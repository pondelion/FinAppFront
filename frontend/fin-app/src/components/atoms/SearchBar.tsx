import React from 'react'
import { default as MaterialUISearchBar } from "material-ui-search-bar";


export interface SearchBarProps {}


export interface SearchBarHandler {
  onRequestSearch: () => void
}

export type Props = SearchBarProps & SearchBarHandler

export class SearchBar extends React.Component<Props> {

  render() {
    return (
      <div>
        <MaterialUISearchBar onRequestSearch={ this.props.onRequestSearch }>
        </MaterialUISearchBar>
      </div>
    )
  }

}