import LoanCalculatorComponent from './loan.calculator.component';
import { connect } from 'react-redux';
import { getpageContent } from './selectors';

const mapStateToProps = state => {
  const pageData = getpageContent(state);
  return { ...pageData };
};

const mapDispatchToProps = dispatch => {
  return {
    /*stuff,
    changeVal(val) {
      dispatch(changeValue(val));
    }*/
    //changePage: () => {dispatch(push('/atoms'))}
  };
};

const LoanCalculatorContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(LoanCalculatorComponent);

export default LoanCalculatorContainer;
