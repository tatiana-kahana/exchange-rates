import React from 'react';
import './Calculator.css';


class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      result: 0
    }
  }

  static getDerivedStateFromProps(props, state) {
    return { rate: props.rate }
  }
  calcRate = (e) => {
    e.preventDefault();
    let elements = e.target.elements;
    console.log(elements);
    console.log(elements['count-currency'].value);
    console.log(elements['type-currency'].value);
    let countCurrency = elements['count-currency'].value;
    let typeCurrency = elements['type-currency'].value;
    this.setState({ result: (countCurrency / this.props.rate[typeCurrency]).toFixed(2) })
  }
  render() {
    return (
      <div className='calculator'>
        <h3> Change calculator</h3>
        <div className="block">

          <div>
            <form onSubmit={this.calcRate}>
              <input type="number" defaultValue="150" name='count-currency' />
              <select name="type-currency" id="">
                {Object.keys(this.props.rate).map((keyName, i) => (
                  <option key={keyName} value={keyName}>{keyName}</option>
                )
                )}
              </select>
              <input type='submit' defaultValue='calc' />
            </form>
          </div>
          <div>
            <h4>Result</h4>
            <ul className="calc-res">
              <li>ILS {this.state.result}</li>
            </ul>
          </div>
        </div>
      </div >
    );
  }
}
export default Calculator;
