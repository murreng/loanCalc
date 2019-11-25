import LoanCalculatorComponent from './loan.calculator.component';
import { connect } from 'react-redux';
import { getpageContent, getProductsData } from './selectors';
import actions from './actions';

const mapStateToProps = state => {
  const pageData = getpageContent(state);
  const productData = getProductsData(state);
  return { ...pageData, productData};
};

const mapDispatchToProps = dispatch => {
  return {
    changeAmount(payload) {
      dispatch(actions.updateAmount({amount:parseInt(payload)}));
    },
    changeDuration(payload) {
      dispatch(actions.updateDuration({duration:parseInt(payload)}));
    },
    mounted() {
      dispatch(actions.getProductData());
    }
  };
};

const LoanCalculatorContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(LoanCalculatorComponent);

export default LoanCalculatorContainer;
