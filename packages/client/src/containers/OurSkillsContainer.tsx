import { connect } from "react-redux";

import { OurSkills } from "pages/homepage/components/our-skills";
import { IState } from "interfaces/IState";

const mapStateToProps = (state: IState) => {
  return {
    lang: state.lang.currentLang
  };
};

const connector = connect(mapStateToProps);

export default connector(OurSkills);
