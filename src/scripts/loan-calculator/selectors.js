import { createSelector } from 'reselect';

const getLoanCalculator = state => state.loanCalculator.loanCalculator || {};

const getContent = createSelector(
  [getLoanCalculator],
  calculator => calculator.content || {}
);

const getpageContent = createSelector(
  [getContent],
  loan => loan.pageData || {}
);

const getProductContent = createSelector(
  [getContent],
  loan => loan.loanData || {}
);

const getDuration = createSelector(
  [getLoanCalculator],
  calculator => calculator.duration || {}
);

const getAmount = createSelector(
  [getLoanCalculator],
  calculator => calculator.amount || {}
);

const getProducts = createSelector(
  [getLoanCalculator],
  calculator => calculator.products || {}
);

const getProductsData = createSelector(
  [getProducts],
  products => products.data || {}
);

export { getpageContent, getProductContent, getDuration, getAmount, getProductsData };
