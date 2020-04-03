import React from 'react';
import './Rate.css';
import Calculator from '../Calculator/Calculator'


class Rate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      'date': '',
      'currencyRate': ''
    }
    this.currency = ['USD', 'EUR', 'GBP', 'HUF']
    this.getRate()
  }
  getRate = () => {
    fetch('https://api.exchangeratesapi.io/latest?base=ILS')
      .then(data => {
        return data.json();
      })
      .then(data => {
        console.log(data);
        this.setState({ date: data.date });
        let result = {};
        for (let i = 0; i < this.currency.length; i++) {
          result[this.currency[i]] = data.rates[this.currency[i]];
          this.setState({ currencyRate: result });
        }
        console.log(result)
      })
  }
  render() {
    return (
      <div className='rate'>
        <h3> Exchange Rates on {this.state.date}</h3>
        <div className="flex-container">
          {Object.keys(this.state.currencyRate).map((keyName, i) => (
            <div className="block flex-item" key={keyName}>
              <div className="currency-name">{keyName}</div>
              <div className="currency-in">{this.state.currencyRate[keyName].toFixed(2)}</div>
              <p>You can buy for 1 ILS</p>
            </div>
          )
          )}
        </div>
        <Calculator rate={this.state.currencyRate} />
      </div>
    );
  }
}
export default Rate;
