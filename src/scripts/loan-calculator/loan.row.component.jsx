import React, { Fragment, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { loanTypes } from './enums';

const LoanRowComponent = props => {
  const { data } = props;

  return (

    <div className="loan-row-container body-txt-normal">
      {data.map((item, idx) => {
        return (
          <div className="loan-row-cell" key={idx}>{item}</div>
        )
      })}
    </div>
    /*<Fragment>
      <div>
        <div className="header">{title}</div>
      </div>
      <div className="loan-calculator-container">
        <div className="generic-row-container body-txt-normal">
          <div className="generic-label">{amountReq}</div>
          <input type="text" className="generic-text-box" />
          <div className="generic-label">{currency}</div>
        </div>
        <div className="generic-row-container body-txt-normal">
          <div className="generic-label">{duration}</div>
          <input type="text" className="generic-text-box" />
          <div className="generic-label">{period}</div>
        </div>
      </div>
    </Fragment>*/
  );
};

LoanRowComponent.propTypes = {
  data: PropTypes.array,
};

LoanRowComponent.defaultProps = {};
export default LoanRowComponent;
