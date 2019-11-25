const loanTypes = Object.freeze(
  {
    BL: 'bl',
    RFC: 'rfc'
  }
);

const apiLoanTypes = Object.freeze(
  {
    BL: 'business_loan',
    RFC: 'revolving_credit_facility'
  }
);

export { loanTypes, apiLoanTypes };
