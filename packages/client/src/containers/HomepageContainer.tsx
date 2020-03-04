import { connect } from "react-redux";

import { Homepage } from "pages/homepage";
import { IState } from "interfaces/IState";

const mapStateToProps = (state: IState) => state;

const connector = connect(mapStateToProps);

export default connector(Homepage);
