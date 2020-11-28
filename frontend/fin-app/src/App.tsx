import React from 'react';
import './App.css';
import { CompanyProfile } from './containers/pages/CompanyProfile'
import { BubbleMenu } from './containers/organisms/Menu'
//import { StockSelect } from './containers/organisms/StockSelect'


// const App: React.FC = () => {
//   return (
//     <React.Fragment>
//       <CompanyProfile />
//     </React.Fragment>
//   );
// }
class App extends React.Component {
  
  render() {
    return(
      <div>
        <BubbleMenu />
        <CompanyProfile ticker={7203} handleOnSelectStock={(event)=>{console.log(event.value)}} />
        <CompanyProfile ticker={8058} handleOnSelectStock={(event)=>{}} />
      </div>
    );
  }

}

export default App;
