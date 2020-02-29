import { connect } from "react-redux";

import Carousel from "pages/homepage/components/film-carousel";
import { IState } from "interfaces/IState";

const mapStateToProps = (state: IState) => state.films;

const connector = connect(mapStateToProps);

export default connector(Carousel);
