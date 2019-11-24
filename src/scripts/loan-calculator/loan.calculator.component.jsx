import React, { Fragment, useEffect, useState } from 'react';
import PropTypes from 'prop-types';

const LoanCalculatorComponent = props => {
  const [amountRequested, setAmountRequested] = useState('');
  const [localDuration, setDuration] = useState('');

  const {title, labels} = props;

  if(!labels) return null;

  const {amountReq, duration, currency, period} = labels;

  return (
    <Fragment>
    <div>
      <div className="header">{title}</div>
    </div>
    <div className="loan-calculator-container">
      <div className="generic-row-container">
        <div className="generic-label">{amountReq}</div>
        <input type="text" className = "generic-text-box"></input>
        <div className="generic-label">{currency}</div>
      </div>
      <div className="generic-row-container">
        <div className="generic-label">{duration}</div>
        <input type="text" className = "generic-text-box"></input>
        <div className="generic-label">{period}</div>
      </div>
    </div>
    </Fragment>
    )
};

LoanCalculatorComponent.propTypes = {
  title: PropTypes.string,
  labels: PropTypes.shape({
    amountReq: PropTypes.string, 
    duration: PropTypes.string, 
    currency: PropTypes.string, 
    period: PropTypes.string
  })
};

LoanCalculatorComponent.defaultProps = {};
export default LoanCalculatorComponent;
