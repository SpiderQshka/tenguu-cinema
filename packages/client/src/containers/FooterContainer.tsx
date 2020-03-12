import { connect } from "react-redux";

import { Footer } from "pages/homepage/components/footer";
import { IState } from "interfaces/IState";

const mapStateToProps = (state: IState) => {
  return {
    lang: state.lang.currentLang
  };
};

const connector = connect(mapStateToProps);

export default connector(Footer);
