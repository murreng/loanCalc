import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import LoanProductContainer from './loan.product.container';
import {loanTypes, apiLoanTypes} from './enums';
const LoanCalculatorComponent = props => {
  const { title, labels, changeAmount, changeDuration, mounted, productData } = props;

  useEffect(() => {
    mounted();
  }, []);

  const onDurationChanged = e => {
    changeDuration(e.target.value);
  };

  const onAmountChanged = e => {
    changeAmount(e.target.value);
  };

  if (!labels || !productData) return null;

  const { amountReq, currency, period } = labels;

  return (
    <div className="loan-page-container">
      <div className="header">{title}</div>
      <div className="loan-form-container">
      <div className="loan-calculator-container">
        <div className="generic-row-container body-txt-normal">
          <div className="generic-label">{amountReq}</div>
          <input type="number" min="0" className="generic-text-box" onChange={onAmountChanged} />
          <div className="generic-label">{currency}</div>
        </div>
        <div className="generic-row-container body-txt-normal">
          <div className="generic-label">{labels.duration}</div>
          <input type="number" min="0" className="generic-text-box" onChange={onDurationChanged} />
          <div className="generic-label">{period}</div>
        </div>
      </div>
      <div className="loan-calculator-product-container">
        <LoanProductContainer type={loanTypes.RFC} apiData={productData[apiLoanTypes.RFC]} />
        <LoanProductContainer type={loanTypes.BL} apiData={productData[apiLoanTypes.BL]} />
      </div>
      </div>
    </div>
  );
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
