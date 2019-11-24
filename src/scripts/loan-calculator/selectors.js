import { createSelector } from 'reselect';


const getLoanCalculatorContent = state => state.loanCalculator.loanCalculator.content || {};

const getpageContent = createSelector([getLoanCalculatorContent], loan => loan.pageData || {});
const getProductContent = createSelector([getLoanCalculatorContent], loan => loan.loanData || {});

export {
  getpageContent,
  getProductContent
};
