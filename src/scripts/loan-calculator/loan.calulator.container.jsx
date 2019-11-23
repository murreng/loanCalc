import LoanCalculatorComponent from './loan.calculator.component';
import { connect } from 'react-redux';
//import { stuff } from '../home/reducers';
//import { changeValue } from '../home/actions';

const mapStateToProps = state => {
  return { ...state };
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
