import React, { Fragment, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { loanTypes } from './enums';
import LoanRowComponent from './loan.row.component';
import {buildRowsData} from './helper';

const LoanCalculatorComponent = props => {
  const [dataRows, setDataRows] = useState(null);
  const [dataCheck, setDataCheck] = useState(false);
  const { types, labels, data, loanType, type, rateChanged, amount, duration, apiData } = props;
  useEffect(() => {
    if(verifyData()) setDataRows(buildRowsData(amount, duration));
  }, [amount, duration]);

  if (!labels) return null;

  const onRateChanged = e => {
    const val = e.target.value
    rateChanged({[type]:parseInt(val)});
  };

  const verifyData = () => {
    const result =(apiData && amount >= apiData.amount_min && amount <= apiData.amount_max && duration >= apiData.duration_min && duration <= apiData.duration_max) 
    setDataCheck(result);
    return result;
  }

  const { interestRate, symbol} = labels;
  if(!apiData) return null;

  return (
    <Fragment>
      <div className={`loan-product-container ${!dataCheck? 'invalid': ''}`}>
        <div className="generic-row-container body-txt-normal centered">
          <div className="generic-label">{interestRate}</div>
          <input type="number" min="0" className="generic-text-box" onChange={onRateChanged}/>
          <div className="generic-label">{symbol}</div>
        </div>
        <div>
        <LoanRowComponent data={data}/>
        {dataRows && dataCheck && dataRows.map((row, idx) => {
          return (
            <LoanRowComponent key={idx} data={row}/>
          )
        })}
      </div>
      <div>
        <div className="header centered">{types[type]}</div>
      </div>
      </div>

    </Fragment>
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
