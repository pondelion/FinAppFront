import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { bubble as BurgerMenu } from 'react-burger-menu';
import CompanyProfile from '../../containers/pages/CompanyProfile'
import CompanyList from '../../containers/pages/CompanyList'
import { store } from '../../redux/Store'


interface State {
  isOpen: boolean;
}

interface Styles {
  bmBurgerBars: Partial<CSSStyleDeclaration>;
  bmBurgerBarsHover: Partial<CSSStyleDeclaration>;
  bmBurgerButton: Partial<CSSStyleDeclaration>;
  bmCross: Partial<CSSStyleDeclaration>;
  bmCrossButton: Partial<CSSStyleDeclaration>;
  bmItemList: Partial<CSSStyleDeclaration>;
  bmItem: Partial<CSSStyleDeclaration>;
  bmMenuWrap: Partial<CSSStyleDeclaration>;
  bmMenu: Partial<CSSStyleDeclaration>;
  bmMorphShape: Partial<CSSStyleDeclaration>;
  bmOverlay: Partial<CSSStyleDeclaration>;
}

interface Props {
  bodyClassName?: string;
  burgerBarClassName?: string;
  burgerButtonClassName?: string;
  className?: string;
  crossButtonClassName?: string;
  crossClassName?: string;
  customBurgerIcon?: JSX.Element | false;
  customCrossIcon?: JSX.Element | false;
  customOnKeyDown?(event: React.KeyboardEvent): void;
  disableAutoFocus?: boolean;
  disableCloseOnEsc?: boolean;
  disableOverlayClick?: boolean;
  htmlClassName?: string;
  id?: string;
  isOpen?: boolean;
  itemClassName?: string;
  itemListClassName?: string;
  menuClassName?: string;
  morphShapeClassName?: string;
  noOverlay?: boolean;
  onStateChange?(state: State): void;
  // TODO (Rajab) This can be improved, though I do not know how. From PropTypes:
  // styles && styles.outerContainer ? PropTypes.string.isRequired : PropTypes.string
  outerContainerId?: string;
  overlayClassName?: string;
  // TODO (Rajab) This can be improved, though I do not know how. From PropTypes:
  // styles && styles.pageWrap ? PropTypes.string.isRequired : PropTypes.string,
  pageWrapId?: string;
  right?: boolean;
  styles?: Styles;
  width?: number | string;
}

const styles = {
  bmBurgerButton: {
    position: 'fixed',
    width: '36px',
    height: '30px',
    left: '36px',
    top: '56px'
  },
  bmBurgerBars: {
    background: '#373a47'
  },
  bmBurgerBarsHover: {
    background: '#a90000'
  },
  bmCrossButton: {
    height: '24px',
    width: '24px'
  },
  bmCross: {
    background: '#bdc3c7'
  },
  bmMenuWrap: {
    position: 'fixed',
    top: '0px',
    height: '100%'
  },
  bmMenu: {
    background: '#373a47',
    padding: '0.5em 1.2em 0',
    fontSize: '1.4em'
  },
  bmMorphShape: {
    fill: '#373a47'
  },
  bmItemList: {
    color: '#b8b7ad',
    padding: '0.8em'
  },
  bmItem: {
    display: 'inline-block',
    padding: '0.6em',
    color: '#fffce1',
    outline: 'none'
  },
  bmOverlay: {
    background: 'rgba(0, 0, 0, 0.3)'
  }
}


export class BubbleMenu extends React.Component<Props> {

  render() {
    return (
      <div className="App">
        <BurgerMenu
          styles={styles}
          onStateChange={this.onStateChange}
        >
          <a id='company_list' className="menu-item" href="/#" onClick={e => {ReactDOM.render(<Provider store={store}><CompanyList/></Provider>, document.getElementById('main_page')); e.preventDefault();}}>1.Company List</a>
          <a id='company_profile' className="menu-item" href="/#" onClick={e => {ReactDOM.render(<Provider store={store}><CompanyProfile/></Provider>, document.getElementById('main_page')); e.preventDefault();}}>2.Company Profile</a>
        </BurgerMenu>
      </div>
    )
  }

  onStateChange = (state: State): void => {
    console.log(state.isOpen);
  }
}

export default BubbleMenu;
