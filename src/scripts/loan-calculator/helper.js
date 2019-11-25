const buildRowsData = (amount, duration, rate) => {
  const rows = [];
  let remaining = amount;
  let counter = 1,
    totalInterest = 0,
    totalRepayment = 0;

  // Sorry, run out of time to start working out years etc
  const principle = amount / duration;

  while (counter <= duration) {
    const interest = (remaining / 100) * rate;
    const plusInterest = principle + interest;
    totalInterest = totalInterest + interest;
    totalRepayment = totalRepayment + plusInterest;
    rows.push([
      `30/${counter}/2019`,
      `£${principle.toFixed(2)}`,
      `£${interest.toFixed(2)}`,
      `£${plusInterest.toFixed(2)}`
    ]);
    counter++;
    remaining = remaining - principle;
  }

  rows.push(['Total', `£${amount.toFixed(2)}`, `£${totalInterest.toFixed(2)}`, `£${totalRepayment.toFixed(2)}`]);

  return rows;
};

export { buildRowsData };
