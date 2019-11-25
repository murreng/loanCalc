import LoanProductComponent from './loan.product.component';
import { connect } from 'react-redux';
import { getProductContent, getDuration, getAmount } from './selectors';
import actions from './actions';

const mapStateToProps = (state, ownProps) => {
  const productData = getProductContent(state);
  const amount = getAmount(state);
  const duration = getDuration(state);
  const {type, apiData} = ownProps;
  return { ...productData, type, amount, duration, apiData };
};

const mapDispatchToProps = dispatch => {
  return {
    rateChanged(payload) {
      dispatch(actions.updateInterestRate(payload));
    }
  };
};

const LoanProductContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(LoanProductComponent);

export default LoanProductContainer;
