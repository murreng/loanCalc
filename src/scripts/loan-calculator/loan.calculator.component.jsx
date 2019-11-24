import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

const LoanCalculatorComponent = props => {

  const {title, labels} = props;

  if(!labels) return null;

  const {amountReq, duration, currency, period} = labels;

  return (
    <div>
      <h3>{title}</h3>
    </div>
    );
};

HomeComponent.propTypes = {};
HomeComponent.defaultProps = {};
export default HomeComponent;
