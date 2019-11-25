const buildRowsData =(amount, duration) => {
  const rows =[];
  let counter = 1;
  let remaining = amount;


 // Sorry, run out of time to start working out years etc
  const principle = amount/duration;

  while(counter <= duration) { 
    const interest = (remaining/100) * 3;
    rows.push([`30/${counter}/2019`, `£${principle.toFixed(2)}`, `£${interest.toFixed(2)}`, `£${(principle+interest).toFixed(2)}`]);
    counter++;
    remaining = remaining - principle;
 } 

 return rows;
}

export {buildRowsData}
