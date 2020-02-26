import { connect } from "react-redux";

import { ComingSoon } from "pages/homepage/components/coming-soon";

import { IState } from "interfaces/IState";

const mapStateToProps = (state: IState) => state.films;

const connector = connect(mapStateToProps);

export default connector(ComingSoon);
