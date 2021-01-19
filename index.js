import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router } from 'react-router-dom';
import { Route,Link,withRouter,Switch} from 'react-router-dom';
import history from './history';
import FirstForm from './components/FirstForm';
import PaymentOption from './components/Option';
import Netpay from './components/NetPay'
import CardPay from './components/CardPay'
import Upi from './components/Upi'
import Wallet from './components/Wallet';
import Credit from './components/Credit';
import Opt from './components/opttest'
ReactDOM.render(
  <React.StrictMode>
   <Router history={history}>
    <Switch>   
    <Route  exact path="/" component={FirstForm}></Route>
    <Route  exact path="/paymentoption" component={PaymentOption}></Route>
    <Route  exact path="/netbanking" component={Netpay}></Route>
    <Route  exact path="/cardpayment" component={CardPay}></Route>
    <Route  exact path="/upi" component={Upi}></Route>
    <Route  exact path="/wallet" component={Wallet}></Route>
    <Route  exact path="/credit" component={Credit}></Route>
    </Switch>
  </Router>
    
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
