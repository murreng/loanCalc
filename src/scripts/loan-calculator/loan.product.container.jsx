import LoanProductComponent from './loan.product.component';
import { connect } from 'react-redux';
import { getProductContent } from './selectors';

const mapStateToProps = state => {
  const productData = getProductContent(state);
  return { productData };
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

const LoanProductContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(LoanProductComponent);

export default LoanProductContainer;
