import React, { Fragment, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import LoanRowComponent from './loan.row.component';
import { buildRowsData } from './helper';

const LoanCalculatorComponent = props => {
  const [dataRows, setDataRows] = useState(null);
  const [dataCheck, setDataCheck] = useState(false);
  const [rate, setRate] = useState(false);
  const { types, labels, data, type, amount, duration, apiData } = props;

  useEffect(() => {
    if (verifyData() && rate) setDataRows(buildRowsData(amount, duration, rate));
  }, [amount, duration, rate]);

  if (!labels) return null;

  const onRateChanged = e => {
    const val = e.target.value;
    setRate(val);
  };

  const verifyData = () => {
    const result =
      apiData &&
      amount >= apiData.amount_min &&
      amount <= apiData.amount_max &&
      duration >= apiData.duration_min &&
      duration <= apiData.duration_max;
    setDataCheck(result);
    return result;
  };

  const { interestRate, symbol } = labels;
  if (!apiData) return null;

  return (
    <Fragment>
      <div className={`loan-product-container ${!dataCheck ? 'invalid' : ''}`}>
        <div className="generic-row-container body-txt-normal centered">
          <div className="generic-label">{interestRate}</div>
          <input type="number" min="0" className="generic-text-box" onChange={onRateChanged} />
          <div className="generic-label">{symbol}</div>
        </div>
        <div className="loan-table-container">
          <LoanRowComponent data={data} classes={'head-row'} />
          {dataRows &&
            dataCheck &&
            dataRows.map((row, idx) => {
              return <LoanRowComponent key={idx} data={row} />;
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
  types: PropTypes.shape({
    bl: PropTypes.string,
    rfc: PropTypes.string
  }),
  labels: PropTypes.shape({
    interestRate: PropTypes.string,
    symbol: PropTypes.string
  }),
  data: PropTypes.arrayOf(PropTypes.string),
  type: PropTypes.string,
  amount: PropTypes.number,
  duration: PropTypes.number,
  apiData: PropTypes.shape({
    amount_max: PropTypes.number,
    amount_min: PropTypes.number,
    duration_max: PropTypes.number,
    duration_min: PropTypes.number
  })
};

LoanCalculatorComponent.defaultProps = {};
export default LoanCalculatorComponent;
