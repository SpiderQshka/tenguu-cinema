import { connect } from "react-redux";

import { ComingSoon } from "pages/homepage/components/coming-soon";

import { IState } from "interfaces/IState";
import { comingSoonFilmsSelector } from "selectors";

const mapStateToProps = (state: IState) => comingSoonFilmsSelector(state);
const connector = connect(mapStateToProps);

export default connector(ComingSoon);
