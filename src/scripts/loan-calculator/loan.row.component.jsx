import React, { Fragment, useEffect, useState } from 'react';
import PropTypes from 'prop-types';

const LoanRowComponent = props => {
  const { data, classes } = props;

  return (
    <div className={`loan-row-container body-txt-normal ${classes}`}>
      {data.map((item, idx) => {
        return (
          <div className="loan-row-cell" key={idx}>
            {item}
          </div>
        );
      })}
    </div>
  );
};

LoanRowComponent.propTypes = {
  data: PropTypes.arrayOf(PropTypes.string),
  classes: PropTypes.string
};

LoanRowComponent.defaultProps = {
  data: [],
  classes: ''
};
export default LoanRowComponent;
